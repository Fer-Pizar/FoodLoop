import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NegocioService {
  constructor(private prisma: PrismaService) {}

  async getMine(userId: string) {
    const comercio = await this.prisma.comercio.findUnique({
      where: { idUsuario: BigInt(userId) },
      include: {
        usuario: {
          select: {
            idUsuario: true,
            nombre: true,
            email: true,
            rol: true,
            fotoPerfil: true, // si existe este campo en tu modelo
          },
        },
      },
    });

    if (!comercio) {
      throw new NotFoundException('No se encontró el comercio del usuario');
    }

    return comercio;
  }

  async updateMine(
    userId: string,
    data: Partial<{
      nombreNegocio: string;
      telefono?: string;
      direccion?: string;
      categoria?: string;
    }>,
  ) {
    return this.prisma.comercio.update({
      where: { idUsuario: BigInt(userId) },
      data,
    });
  }
}

