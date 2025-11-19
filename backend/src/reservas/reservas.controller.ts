import { Controller, Get, Request, UseGuards, Post, Body } from '@nestjs/common';
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

  // 👇 NUEVO: validar código
  @Post('validar-codigo')
  async validarCodigo(@Request() req: any, @Body() body: { codigo: string }) {
    const userId = this.getUserId(req);
    const codigo = (body.codigo ?? '').trim();

    const result = await this.reservasService.validateCodigoForUserComercio(
      userId,
      codigo,
    );

    if (result.status === 'valid') {
      return {
        success: true,
        reserva: result.reserva,
      };
    }

    return {
      success: false,
      reason: result.reason,
    };
  }

  // 👇 NUEVO: confirmar retiro
  @Post('confirmar-retiro')
  async confirmarRetiro(
    @Request() req: any,
    @Body() body: { codigo: string },
  ) {
    const userId = this.getUserId(req);
    const codigo = (body.codigo ?? '').trim();

    const result = await this.reservasService.confirmarRetiro(userId, codigo);

    if (result.status === 'confirmed') {
      return {
        success: true,
        reserva: result.reserva,
      };
    }

    let message = 'Código inválido';
    if (result.reason === 'used') message = 'Código ya usado';
    if (result.reason === 'expired') message = 'Código expirado';
    if (result.reason === 'no_comercio') {
      message = 'El usuario no está asociado a un comercio';
    }

    return {
      success: false,
      reason: result.reason,
      message,
    };
  }
}
