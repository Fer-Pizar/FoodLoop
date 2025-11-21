// backend/src/notificaciones/notificaciones.controller.ts
import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { NotificacionesService } from './notificaciones.service';

@Controller('notificaciones')
export class NotificacionesController {
  constructor(
    private readonly notificacionesService: NotificacionesService,
  ) {}

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

    const rows = await this.notificacionesService.getNotificationsForUser(userId);

    return {
      success: true,
      notificaciones: rows,
    };
  }
}
