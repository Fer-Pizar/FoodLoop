// backend/src/auth/auth.controller.ts
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { CrearNegocioDto } from './dto/crear-negocio.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly auth: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  register(@Body() dto: RegisterDto) {
    return this.auth.register(dto);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() data: { email: string; password: string }) {
    return this.auth.login(data);
  }

  @Post('register-negocio')
  @HttpCode(HttpStatus.CREATED)
  registerNegocio(@Body() dto: CrearNegocioDto) {
    return this.auth.registerNegocio(dto);
  }
}
