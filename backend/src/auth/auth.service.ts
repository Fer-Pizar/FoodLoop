// src/auth/auth.service.ts
import { Injectable, BadRequestException, ConflictException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async register({
    nombre,
    email,
    password,
  }: {
    nombre: string;
    email: string;
    password: string;
  }) {
    if (!nombre || !email || !password) {
      throw new BadRequestException('nombre, email y password son obligatorios');
    }

    const existing = await this.prisma.usuarios.findUnique({ where: { email } });
    if (existing) {
      throw new ConflictException('El email ya está registrado');
    }

    const rounds = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);
    const contrasena_hash = await bcrypt.hash(password, rounds);

    const user = await this.prisma.usuarios.create({
      data: { nombre, email, contrasena_hash },
      select: { id_usuario: true, nombre: true, email: true },
    });

    const safeUser = {
      ...user,
      id_usuario: user.id_usuario.toString(),
    };

    return { ok: true, user: safeUser };
  }
}
