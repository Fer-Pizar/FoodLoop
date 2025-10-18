import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type CreateUserInput = {
  nombre: string;
  email: string;
  contrasena_hash: string; 
  rol?: string;
};

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email: email.toLowerCase() },
    });
  }

  async findById(id: string | number | bigint) {
    const idBigInt = typeof id === 'bigint' ? id : BigInt(id);
    return this.prisma.usuario.findUnique({
      where: { idUsuario: idBigInt },
    });
  }

  async createUser(data: CreateUserInput) {
    return this.prisma.usuario.create({
      data: {
        nombre: data.nombre,
        email: data.email.toLowerCase(),
        contrasenaHash: data.contrasena_hash,
        rol: data.rol ?? 'consumidor',
      },
      select: { idUsuario: true, nombre: true, email: true, rol: true },
    });
  }
}
