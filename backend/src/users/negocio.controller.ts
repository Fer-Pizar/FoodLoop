import { Controller, Get, Patch, Body, UseGuards, Req } from '@nestjs/common';
import { NegocioService } from './negocio.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('negocio')
@UseGuards(JwtAuthGuard)
export class NegocioController {
  constructor(private readonly service: NegocioService) {}

  @Get('me')
  me(@Req() req: any) {
    return this.service.getMine(req.user.userId);
  }

  @Patch('me')
  update(@Req() req: any, @Body() body: any) {
    return this.service.updateMine(req.user.userId, body);
  }
}
