import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NegocioService {
  constructor(private prisma: PrismaService) {}

  getMine(userId: string) {
    return this.prisma.comercio.findUnique({ where: { idUsuario: BigInt(userId) } });
  }

  updateMine(userId: string, data: Partial<{ nombreNegocio: string; telefono?: string; direccion?: string; categoria?: string }>) {
    return this.prisma.comercio.update({
      where: { idUsuario: BigInt(userId) },
      data,
    });
  }
}
