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

    return rows.map(n => ({
      id: Number(n.id_notificacion),
      titulo: n.titulo,
      mensaje: n.mensaje,
      tipo: n.tipo,
      fecha_envio: n.fecha_envio,
      leido: n.leido,
    }));
  }
}
