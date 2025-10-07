import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.usuarios.findUnique({ where: { email } });
  }

  async findById(id: number) {
    return this.prisma.usuarios.findUnique({ where: { id_usuario: BigInt(id) } });
  }

  async createUser(data: { nombre: string; email: string; contrasena_hash: string }) {
    return this.prisma.usuarios.create({ data });
  }
}

