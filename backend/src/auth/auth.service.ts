import { Injectable, BadRequestException, ConflictException, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Prisma } from '@prisma/client';
import { CrearNegocioDto } from './dto/crear-negocio.dto';

type RegisterInput = {
  nombre: string;
  email: string;
  password: string;
  confirmPassword: string;
};

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
  ) {}

  async register({ nombre, email, password, confirmPassword }: RegisterInput) {
    if (!nombre || !email || !password || !confirmPassword) {
      throw new BadRequestException('nombre, email, password y confirmPassword son obligatorios');
    }
    if (password !== confirmPassword) {
      throw new BadRequestException('Las contraseñas no coinciden');
    }

    const emailLower = email.toLowerCase();

    const existing = await this.prisma.usuario.findUnique({
      where: { email: emailLower },
      select: { idUsuario: true },
    });
    if (existing) throw new ConflictException('El email ya está registrado');

    const rounds = parseInt(process.env.BCRYPT_ROUNDS || '12', 10);
    const contrasenaHash = await bcrypt.hash(password, rounds);

    const user = await this.prisma.usuario.create({
      data: { nombre, email: emailLower, contrasenaHash },
      select: { idUsuario: true, nombre: true, email: true, rol: true },
    });

    return {
      ok: true,
      user: {
        id_usuario: user.idUsuario.toString(),
        nombre: user.nombre,
        email: user.email,
        rol: user.rol,
      },
    };
  }

  async login({ email, password }: { email: string; password: string }) {
    if (!email || !password) {
      throw new BadRequestException('Email y contraseña son obligatorios');
    }
    const emailLower = email.toLowerCase();

    const user = await this.prisma.usuario.findUnique({
      where: { email: emailLower },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    const isValid = await bcrypt.compare(password, user.contrasenaHash);
    if (!isValid) throw new UnauthorizedException('Contraseña incorrecta');

    const payload = {
      userId: String(user.idUsuario),
      email: user.email,
      role: user.rol,
    };
    const access_token = await this.jwt.signAsync(payload);

    const safeUser = {
      id_usuario: user.idUsuario.toString(),
      nombre: user.nombre,
      email: user.email,
      rol: user.rol,
    };

    return {
      ok: true,
      mensaje: 'Inicio de sesión exitoso',
      access_token,
      role: user.rol,
      user: safeUser,
    };
  }

  async registerNegocio(dto: CrearNegocioDto) {
    if (!dto?.nombre || !dto?.email || !dto?.password) {
      throw new BadRequestException('nombre, email y password son obligatorios');
    }

    const email = dto.email.toLowerCase();
    const exists = await this.prisma.usuario.findUnique({
      where: { email },
      select: { idUsuario: true },
    });
    if (exists) throw new BadRequestException('El email ya está registrado');

    const hashed = await bcrypt.hash(dto.password, 10);
    const nombre = dto.nombre.trim();

    const { user, comercio } = await this.prisma.$transaction(async (tx) => {
      const user = await tx.usuario.create({
        data: {
          nombre,
          email,
          contrasenaHash: hashed,
          rol: 'comercio',
        },
      });

      let id_categoria: number | undefined = dto.idCategoria;

      if (!id_categoria && dto.categoria) {
        const cat = await tx.categorias.findFirst({
          where: { nombre: dto.categoria },
          select: { id_categoria: true },
        });
        if (cat) id_categoria = Number(cat.id_categoria);
      }

      if (!id_categoria) {
        const fallback = await tx.categorias.findFirst({
          where: { nombre: 'Cafetería' },
          select: { id_categoria: true },
        });
        id_categoria = fallback ? Number(fallback.id_categoria) : undefined;
      }

      if (!id_categoria) {
        throw new BadRequestException('No se pudo asignar una categoría válida');
      }

      const comercio = await tx.comercio.create({
        data: {
          idUsuario: user.idUsuario,
          nombreNegocio: nombre,
          telefono: dto.telefono ?? null,
          direccion: dto.direccion ?? null,
          id_categoria, 
          categoria: dto.categoria ?? null,
        },
      });

      return { user, comercio };
    });

    const payload = { userId: String(user.idUsuario), email: user.email, role: user.rol };
    const access_token = await this.jwt.signAsync(payload);

    return {
      message: 'Registro de negocio exitoso',
      access_token,
      role: user.rol,
      user: { id: String(user.idUsuario), nombre: user.nombre, email: user.email },
      comercio: {
        id: String(comercio.idComercio),
        nombre: comercio.nombreNegocio,
        id_categoria: comercio.id_categoria,
      },
    };
  }
}
