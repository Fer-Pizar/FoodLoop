import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PrismaService } from '../prisma/prisma.service';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(private readonly prisma: PrismaService) {}

  private getUserId(req: any): number {
    const raw = req.user?.userId;

    if (!raw) {
      throw new Error('No se pudo obtener el userId del token');
    }

    return Number(raw);
  }

  @UseGuards(JwtAuthGuard)
  @Get('mias')
  async getMyNotifications(@Request() req: any) {
    const userId = this.getUserId(req);

    const rows = await this.prisma.notificaciones.findMany({
      where: { id_usuario: BigInt(userId) },
      orderBy: { fecha_envio: 'desc' },
    });

    return {
      success: true,
      notificaciones: rows,
    };
  }
}
