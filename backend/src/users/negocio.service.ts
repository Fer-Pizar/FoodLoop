import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs/promises';
import * as path from 'path';

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

  // SUBIR AVATAR
  async uploadMyAvatar(userId: string, file: Express.Multer.File /* o: any */) {
    if (!file) throw new BadRequestException('Archivo requerido');
    if (!file.mimetype?.startsWith('image/')) {
      throw new BadRequestException('Solo se permiten imágenes');
    }

    // carpeta local: /uploads/avatars
    const uploadsDir = path.join(process.cwd(), 'uploads', 'avatars');
    await fs.mkdir(uploadsDir, { recursive: true });

    const ext = (file.mimetype.split('/')[1] || 'jpg').toLowerCase();
    const filename = `u_${userId}_${Date.now()}.${ext}`;
    const filepath = path.join(uploadsDir, filename);

    // memoryStorage → buffer disponible
    await fs.writeFile(filepath, file.buffer);

    // URL pública (servida por main.ts)
    const publicUrl = `/uploads/avatars/${filename}`;

    await this.prisma.usuario.update({
      where: { idUsuario: BigInt(userId) },
      data: { fotoPerfil: publicUrl },
    });

    return { ok: true, url: publicUrl };
  }

  // ELIMINAR AVATAR
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
        // Si no existe el archivo, ignoramos
      }
    }

    await this.prisma.usuario.update({
      where: { idUsuario: BigInt(userId) },
      data: { fotoPerfil: null },
    });

    return { ok: true };
  }
}
