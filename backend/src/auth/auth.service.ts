import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService, private jwtService: JwtService) {}

  async register(nombre: string, email: string, password: string) {
    const existing = await this.usersService.findByEmail(email);
    if (existing) throw new BadRequestException('Email ya registrado');
    const hash = await bcrypt.hash(password, 10);
    const user = await this.usersService.createUser({ nombre, email, contrasena_hash: hash });
    return { message: 'Usuario creado', user };
  }

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Usuario no encontrado');
    const valid = await bcrypt.compare(password, user.contrasena_hash);
    if (!valid) throw new UnauthorizedException('Contraseña incorrecta');

    const payload = { sub: user.id_usuario.toString(), email: user.email };
    const token = this.jwtService.sign(payload);
    return { token, user };
  }
}

