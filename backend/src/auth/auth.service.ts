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
    confirmPassword,   
  }: {
    nombre: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    if (!nombre || !email || !password || !confirmPassword) {
      throw new BadRequestException('nombre, email, password y confirmPassword son obligatorios');
    }

    if (password !== confirmPassword) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    const existing = await this.prisma.usuarios.findUnique({ where: { email } });
    if (existing) throw new ConflictException('El email ya está registrado');

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
