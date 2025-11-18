import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservasService {
  constructor(private readonly prisma: PrismaService) {}

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
}
