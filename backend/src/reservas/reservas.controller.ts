import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('reservas')
@UseGuards(JwtAuthGuard)
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  private getUserId(req: any): number {
    return req.user?.userId ?? req.user?.sub;
  }

  @Get('mias')
  async getMyReservations(@Request() req: any) {
    const userId = this.getUserId(req);
    const reservas = await this.reservasService.getUserReservations(userId);

    return {
      success: true,
      reservas,
    };
  }
}
