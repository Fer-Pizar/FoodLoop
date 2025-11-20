// backend/src/reservas/reservas.service.ts
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

// 👇 TIPOS EXPORTADOS (así no hay drama si luego los usas en otro archivo)
export type ValidacionReason = 'not_found' | 'used' | 'expired' | 'no_comercio';

export interface ReservaValidada {
  id_reserva: number;
  codigo: string;
  estado: string;
  fecha_reserva: Date;
  ventana_retiro_inicio: Date | null;
  ventana_retiro_fin: Date | null;
  total: number;
  cliente: {
    id: number;
    nombre: string;
  };
  producto: {
    id_producto: number;
    nombre: string;
    imagen_url?: string | null;
  };
}

@Injectable()
export class ReservasService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔹 Rol consumidor: obtener reservas del usuario
  async getUserReservations(userId: number) {
    const reservas = await this.prisma.reservas.findMany({
      where: { id_usuario: BigInt(userId) },
      orderBy: { fecha_reserva: 'desc' },
      include: { producto: true },
    });

    return reservas.map((r) => ({
      id_reserva: Number(r.id_reserva),
      fecha_reserva: r.fecha_reserva,
      estado: r.estado,
      total: Number(r.total),
      producto: {
        id_producto: Number(r.id_producto),
        nombre: r.producto.nombre,
        precio_actual: Number(
          r.producto.precio_actual ?? r.producto.precio_base,
        ),
      },
    }));
  }

  // 👇 NUEVO: confirmar una reserva (cuando pasa a "confirmada")
  async confirmarReserva(id_reserva: number) {
    return this.prisma.$transaction(async (tx) => {
      const reserva = await tx.reservas.findUnique({
        where: { id_reserva: BigInt(id_reserva) },
      });

      if (!reserva) {
        throw new NotFoundException('Reserva no encontrada');
      }

      if (reserva.estado === 'confirmada') {
        return reserva;
      }

      const updated = await tx.reservas.update({
        where: { id_reserva: BigInt(id_reserva) },
        data: {
          estado: 'confirmada',
        },
      });

      // 3) Crear notificación para el consumidor
      await tx.notificaciones.create({
        data: {
          id_usuario: updated.id_usuario,
          titulo: 'Reserva confirmada',
          mensaje: `Tu reserva con código ${updated.codigo_validacion} fue confirmada por el comercio.`,
          tipo: 'sistema',
        },
      });

      return updated;
    });
  }

  // 👇 NUEVO: validar código para un usuario con rol comercio
  async validateCodigoForUserComercio(
    userId: number,
    codigo: string,
  ): Promise<
    | { status: 'valid'; reserva: ReservaValidada }
    | { status: 'invalid'; reason: ValidacionReason }
  > {
    const comercio = await this.prisma.comercio.findUnique({
      where: { idUsuario: BigInt(userId) },
    });

    if (!comercio) {
      return { status: 'invalid', reason: 'no_comercio' };
    }

    const reserva = await this.prisma.reservas.findFirst({
      where: {
        codigo_validacion: codigo,
        producto: {
          id_comercio: comercio.idComercio,
        },
      },
      include: {
        producto: true,
        usuario: true,
      },
    });

    if (!reserva) {
      return { status: 'invalid', reason: 'not_found' };
    }

    if (reserva.estado === 'entregada') {
      return { status: 'invalid', reason: 'used' };
    }

    const now = new Date();
    if (reserva.ventana_retiro_fin && now > reserva.ventana_retiro_fin) {
      return { status: 'invalid', reason: 'expired' };
    }

    const dto: ReservaValidada = {
      id_reserva: Number(reserva.id_reserva),
      codigo: reserva.codigo_validacion,
      estado: reserva.estado,
      fecha_reserva: reserva.fecha_reserva,
      ventana_retiro_inicio: reserva.ventana_retiro_inicio,
      ventana_retiro_fin: reserva.ventana_retiro_fin,
      total: Number(reserva.total),
      cliente: {
        id: Number(reserva.usuario.idUsuario),
        nombre: reserva.usuario.nombre,
      },
      producto: {
        id_producto: Number(reserva.id_producto),
        nombre: reserva.producto.nombre,
        imagen_url: reserva.producto.imagen_url,
      },
    };

    return { status: 'valid', reserva: dto };
  }

  // 👇 NUEVO: confirmar retiro (marcar como entregada)
  async confirmarRetiro(
    userId: number,
    codigo: string,
  ): Promise<
    | { status: 'confirmed'; reserva: ReservaValidada }
    | { status: 'invalid'; reason: ValidacionReason }
  > {
    const validation = await this.validateCodigoForUserComercio(userId, codigo);

    if (validation.status !== 'valid') {
      return {
        status: 'invalid',
        reason: validation.reason,
      };
    }

    // 1) Actualizar estado -> entregada
    await this.prisma.reservas.update({
      where: { codigo_validacion: codigo },
      data: {
        estado: 'entregada',
        updated_at: new Date(),
      },
    });

    // 2) ⭐ Notificación para el consumidor
    await this.prisma.notificaciones.create({
      data: {
        id_usuario: BigInt(validation.reserva.cliente.id),
        titulo: 'Reserva entregada',
        mensaje: `Tu reserva #${validation.reserva.id_reserva} ha sido marcada como entregada.`,
        tipo: 'sistema',
      },
    });

    // TODO: aquí podrías crear registro de auditoría (CA7)

    return {
      status: 'confirmed',
      reserva: {
        ...validation.reserva,
        estado: 'entregada',
      },
    };
  }

  // 🔥 NUEVO HU14 – Historial por comercio (rol comercio)
  async getHistorialComercio(
    userId: number,
    options?: {
      estado?: 'pendiente' | 'confirmada' | 'entregada' | 'cancelada';
      desde?: string;
      hasta?: string;
    },
  ) {
    const comercio = await this.prisma.comercio.findUnique({
      where: { idUsuario: BigInt(userId) },
    });

    if (!comercio) {
      // CA3 – acceso restringido por rol / pertenencia
      throw new ForbiddenException('Usuario no asociado a un comercio');
    }

    const where: any = {
      producto: {
        id_comercio: comercio.idComercio,
      },
    };

    if (options?.estado) {
      where.estado = options.estado;
    }

    if (options?.desde || options?.hasta) {
      where.fecha_reserva = {};
      if (options.desde) where.fecha_reserva.gte = new Date(options.desde);
      if (options.hasta) where.fecha_reserva.lte = new Date(options.hasta);
    }

    const reservas = await this.prisma.reservas.findMany({
      where,
      orderBy: { fecha_reserva: 'desc' },
      include: {
        producto: true,
        usuario: true,
      },
    });

    // CA2 + CA4 + CA5 – dto con productos[]
    return reservas.map((r) => ({
      id_reserva: Number(r.id_reserva),
      codigo: r.codigo_validacion,
      fecha_reserva: r.fecha_reserva,
      estado: r.estado,
      total: Number(r.total),
      cliente: {
        id: Number(r.id_usuario),
        nombre: r.usuario?.nombre ?? '',
      },
      productos: [
        {
          id_producto: Number(r.id_producto),
          nombre: r.producto.nombre,
          // si en tu schema tienes cantidad, cámbialo a Number(r.cantidad)
          cantidad: 1,
          precio: Number(r.producto.precio_actual ?? r.producto.precio_base),
        },
      ],
    }));
  }
}
