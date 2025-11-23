import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; 
import { Prisma, Usuario } from '@prisma/client';

export type PublicConsumidor = {
  id: bigint;              
  nombre: string;
  email: string;
  foto_perfil: string | null;
  role: string | null;
};

export function toPublic(u: Usuario): PublicConsumidor {
  return {
    id: u.idUsuario,
    nombre: u.nombre,
    email: u.email,
    foto_perfil: u.fotoPerfil ?? null,
    role: u.rol ?? null,
  };
}

export function toPublicNullable(u: Usuario | null): PublicConsumidor | null {
  return u ? toPublic(u) : null;
}

type CreateUserInput = {
  nombre: string;
  email: string;
  contrasena_hash: string;  
  rol?: string;            
};

type UpdatePerfilInput = {
  nombre?: string;
  fechaNacimiento?: string;
};

type UpdateConsumidorInput = {
  nombre?: string;
  email?: string;
  fechaNacimiento?: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  
  private normalizeEmail(email: string) {
    return email.trim().toLowerCase();
  }

  private toBigInt(id: string | number | bigint): bigint {
    try {
      return typeof id === 'bigint' ? id : BigInt(id);
    } catch {
      throw new BadRequestException('Invalid id format');
    }
  }

  private parseISODateOrThrow(dateStr: string): Date {
    const d = new Date(dateStr);
    if (Number.isNaN(d.getTime())) {
      throw new BadRequestException('Invalid fechaNacimiento format (expected ISO date)');
    }
    return d;
  }

  private async assertUsuarioExists(id: bigint) {
    const user = await this.prisma.usuario.findUnique({
      where: { idUsuario: id },
      select: { idUsuario: true },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');
  }

  async findByEmail(email: string): Promise<Usuario | null> {
    return this.prisma.usuario.findUnique({
      where: { email: this.normalizeEmail(email) },
    });
  }

  async findById(id: string | number | bigint): Promise<Usuario | null> {
    const idBigInt = this.toBigInt(id);
    return this.prisma.usuario.findUnique({
      where: { idUsuario: idBigInt },
    });
  }

  async findByIdOrThrow(id: string | number | bigint): Promise<Usuario> {
    const user = await this.findById(id);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  async createUser(data: CreateUserInput): Promise<Usuario> {
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: this.normalizeEmail(data.email),
        contrasenaHash: data.contrasena_hash,
        rol: data.rol ?? 'consumidor',
      },
    });
  }

  async updateUser(id: number | string | bigint, data: UpdatePerfilInput): Promise<Usuario> {
    const idBigInt = this.toBigInt(id);
    await this.assertUsuarioExists(idBigInt);

    return this.prisma.usuario.update({
      where: { idUsuario: idBigInt },
      data: {
        ...(data.nombre && { nombre: data.nombre }),
        ...(data.fechaNacimiento && {
          fechaNacimiento: this.parseISODateOrThrow(data.fechaNacimiento),
        }),
        updatedAt: new Date(),
      },
    });
  }

  async updateAvatar(
    id: number | string | bigint,
    fotoPerfil: string | null,
  ): Promise<Usuario> {
    const idBigInt = this.toBigInt(id);
    await this.assertUsuarioExists(idBigInt);

    return this.prisma.usuario.update({
      where: { idUsuario: idBigInt },
      data: {
        fotoPerfil: fotoPerfil ?? null,
        updatedAt: new Date(),
      },
    });
  }

  async updateConsumidorStrict(
    id: number | string | bigint,
    data: UpdateConsumidorInput,
  ): Promise<Usuario> {
    const idBigInt = this.toBigInt(id);

    try {
      const u = await this.findByIdOrThrow(idBigInt);
      if (u.rol !== 'consumidor') {
        throw new BadRequestException('El usuario no tiene rol "consumidor"');
      }

      return await this.prisma.usuario.update({
        where: { idUsuario: idBigInt },
        data: {
          ...(data.nombre && { nombre: data.nombre }),
          ...(data.email && { email: this.normalizeEmail(data.email) }),
          ...(data.fechaNacimiento && {
            fechaNacimiento: this.parseISODateOrThrow(data.fechaNacimiento),
          }),
          updatedAt: new Date(),
        },
      });
    } catch (e) {
      throw e;
    }
  }

  async updateConsumidor(
    id: number | string | bigint,
    data: UpdateConsumidorInput,
  ): Promise<Usuario> {
    const idBigInt = this.toBigInt(id);
    await this.assertUsuarioExists(idBigInt);

    return this.prisma.usuario.update({
      where: { idUsuario: idBigInt },
      data: {
        ...(data.nombre && { nombre: data.nombre }),
        ...(data.email && { email: this.normalizeEmail(data.email) }),
        ...(data.fechaNacimiento && {
          fechaNacimiento: this.parseISODateOrThrow(data.fechaNacimiento),
        }),
        updatedAt: new Date(),
      },
    });
  }
}
