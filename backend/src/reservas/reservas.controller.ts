// backend/src/reservas/reservas.controller.ts
import {
  Controller,
  Get,
  Request,
  UseGuards,
  Post,
  Body,
  BadRequestException,
  Param,
  Query,
} from '@nestjs/common';
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

  // ⭐ HU14 – historial por comercio
  @Get('historial/comercio')
  async getHistorialComercio(
    @Request() req: any,
    @Query('estado') estado?: string,
    @Query('desde') desde?: string,
    @Query('hasta') hasta?: string,
  ) {
    const userId = this.getUserId(req);

    // normalizamos estado: pendiente/confirmada/entregada/cancelada
    const allowed = ['pendiente', 'confirmada', 'entregada', 'cancelada'];
    const estadoFiltrado =
      estado && allowed.includes(estado) ? (estado as any) : undefined;

    const reservas = await this.reservasService.getHistorialComercio(userId, {
      estado: estadoFiltrado,
      desde,
      hasta,
    });

    return {
      success: true,
      reservas,
    };
  }

  // ⭐ NUEVO: confirmar reserva → pasa de "pendiente" a "confirmada"
  @Post('confirmar/:id')
  async confirmarReserva(@Param('id') id: string) {
    const idNumber = Number(id);

    if (Number.isNaN(idNumber)) {
      throw new BadRequestException('id debe ser numérico');
    }

    const updated = await this.reservasService.confirmarReserva(idNumber);

    return {
      success: true,
      reserva: updated,
    };
  }

  // 👇 NUEVO: validar código (tu implementación actual, se mantiene igual)
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

  // 👇 NUEVO: confirmar retiro (tu implementación actual, se mantiene igual)
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

