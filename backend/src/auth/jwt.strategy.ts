// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('JWT_SECRET') ?? '',
    });
  }

  async validate(payload: any) {
    // 👇 cambiamos esto
    const userId =
      payload.userId ??
      payload.sub ??
      payload.idUsuario ??
      payload.id_usuario ??
      payload.id;

    if (!userId) {
      throw new UnauthorizedException('Token sin userId válido');
    }

    return {
      userId,                          // 👈 lo que se usará en req.user.userId
      email: payload.email,
      role: payload.role ?? payload.rol ?? null,
    };
  }
}

