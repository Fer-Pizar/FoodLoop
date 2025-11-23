import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs/promises';
import * as path from 'path';
import { uploadToCloudinary } from '../cloudinary'; 

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
            fotoPerfil: true,
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

  async uploadMyAvatar(userId: string, file: Express.Multer.File /* o: any */) {
    if (!file) {
      throw new BadRequestException('Archivo requerido');
    }
    if (!file.mimetype?.startsWith('image/')) {
      throw new BadRequestException('Solo se permiten imágenes');
    }

    const folder = 'foodloop/avatars';
    const publicId = `negocio_${userId}_${Date.now()}`;

    const { url } = await uploadToCloudinary(file.buffer, folder, publicId);

    await this.prisma.usuario.update({
      where: { idUsuario: BigInt(userId) },
      data: { fotoPerfil: url }, 
    });

    return { ok: true, url };
  }

  async deleteMyAvatar(userId: string) {
    const user = await this.prisma.usuario.findUnique({
      where: { idUsuario: BigInt(userId) },
      select: { fotoPerfil: true },
    });
    if (!user) throw new NotFoundException('Usuario no encontrado');

    if (user.fotoPerfil && user.fotoPerfil.startsWith('/uploads/')) {
      const localPath = path.join(process.cwd(), user.fotoPerfil);
      try {
        await fs.unlink(localPath);
      } catch {
      }
    }

    await this.prisma.usuario.update({
      where: { idUsuario: BigInt(userId) },
      data: { fotoPerfil: null },
    });

    return { ok: true };
  }
}
