import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NotificacionesService {
  constructor(private readonly prisma: PrismaService) {}

  async getNotificationsForUser(id_usuario: number) {
    const rows = await this.prisma.notificaciones.findMany({
      where: { id_usuario: BigInt(id_usuario) },
      orderBy: { fecha_envio: 'desc' },
    });

    return rows.map((n) => ({
      id_notificacion: Number(n.id_notificacion),
      id_usuario: Number(n.id_usuario),
      titulo: n.titulo,
      mensaje: n.mensaje,
      tipo: n.tipo,
      fecha_envio: n.fecha_envio.toISOString(),
      leido: n.leido,
      updated_at: n.updated_at?.toISOString(),
    }));
  }

  async crearNotificacionCancelacion(id_usuario: number, id_reserva: number) {
    return this.prisma.notificaciones.create({
      data: {
        id_usuario: BigInt(id_usuario),
        titulo: 'Reserva cancelada',
        mensaje: `Tu reserva #${id_reserva} fue cancelada automáticamente al superar el tiempo límite.`,
        tipo: 'sistema',
        fecha_envio: new Date(),
        leido: false,
      },
    });
  }
}
