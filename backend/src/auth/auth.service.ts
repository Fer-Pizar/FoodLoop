import { Injectable, BadRequestException, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  // 🔹 Registro existente
  async register({ nombre, email, password, confirmPassword }) {
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

    return { ok: true, user };
  }

  // 🔹 Nuevo método: LOGIN
  async login({ email, password }: { email: string; password: string }) {
    if (!email || !password) {
      throw new BadRequestException('Email y contraseña son obligatorios');
    }

    // Buscar usuario
    const user = await this.prisma.usuarios.findUnique({ where: { email } });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    // Comparar contraseña
    const isValid = await bcrypt.compare(password, user.contrasena_hash);
    if (!isValid) throw new UnauthorizedException('Contraseña incorrecta');

    // Respuesta segura
    const safeUser = {
      id_usuario: user.id_usuario.toString(),
      nombre: user.nombre,
      email: user.email,
    };

    return {
      ok: true,
      mensaje: 'Inicio de sesión exitoso',
      user: safeUser,
    };
  }
}
