// backend/src/products/negocio-products.service.ts
import { Injectable, ForbiddenException, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';

@Injectable()
export class NegocioProductsService {
  constructor(private prisma: PrismaService) {}

  private async comercioIdFromUser(userId: bigint) {
    const com = await this.prisma.comercio.findUnique({
      where: { idUsuario: userId },
      select: { idComercio: true }, // ⬅️ solo necesitamos el id del comercio
    });
    if (!com) throw new ForbiddenException('Usuario sin comercio.');
    return com.idComercio;
  }

  async list(
    userId: bigint,
    q: { page?: string; limit?: string; estado?: 'activo'|'inactivo'|'todos'; search?: string; orden?: 'precio'|'stock'|'fecha' } = {}
  ) {
    const idComercio = await this.comercioIdFromUser(userId);
    const page = Math.max(1, parseInt(q.page ?? '1'));
    const limit = Math.min(50, Math.max(5, parseInt(q.limit ?? '10')));
    const skip = (page - 1) * limit;

    const where: Prisma.productosWhereInput = { id_comercio: idComercio };
    if (q.estado && q.estado !== 'todos') where.estado = q.estado === 'activo';
    if (q.search) where.nombre = { contains: q.search, mode: 'insensitive' };

    // ✅ orderBy correcto según tipos de Prisma
    // - precio_actual: permite SortOrderInput (para manejar nulls)
    // - cantidad_disponible: 'asc' | 'desc'
    // - fecha_publicacion: 'asc' | 'desc'
    const orderBy: Prisma.productosOrderByWithRelationInput =
      q.orden === 'precio'
        ? { precio_actual: { sort: 'desc', nulls: 'last' } }
        : q.orden === 'stock'
        ? { cantidad_disponible: 'desc' }
        : { fecha_publicacion: 'desc' };

    const [items, total] = await Promise.all([
      this.prisma.productos.findMany({
        where,
        orderBy,
        skip,
        take: limit,
        // si no necesitas categoría, no la incluyas
        // include: { categorias: true },
      }),
      this.prisma.productos.count({ where }),
    ]);

    const data = items.map((p) => ({
      ...p,
      // números seguros
      precio_base: Number(p.precio_base),
      precio_actual: p.precio_actual == null ? null : Number(p.precio_actual),
      descuentoAbs:
        p.precio_actual == null ? 0 : Number(p.precio_base) - Number(p.precio_actual),
      descuentoPct:
        p.precio_actual == null
          ? 0
          : Math.round(
              ((Number(p.precio_base) - Number(p.precio_actual)) / Number(p.precio_base)) * 100
            ),
      // normaliza url local si existe
      imagen_url: p.imagen_url ? `/uploads/productos/${path.basename(p.imagen_url)}` : null,
    }));

    return { page, limit, total, data };
  }

  async stats(userId: bigint) {
    const idComercio = await this.comercioIdFromUser(userId);
    const soon = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    const [activos, inactivos, porVencer] = await Promise.all([
      this.prisma.productos.count({ where: { id_comercio: idComercio, estado: true } }),
      this.prisma.productos.count({ where: { id_comercio: idComercio, estado: false } }),
      this.prisma.productos.count({
        where: {
          id_comercio: idComercio,
          estado: true,
          fecha_vencimiento: { lte: soon },
        },
      }),
    ]);
    return { activos, inactivos, porVencer };
  }

  async create(userId: bigint, dto: any) {
    const idComercio = await this.comercioIdFromUser(userId);
    if (!dto?.nombre || !dto?.precio_base)
      throw new BadRequestException('nombre y precio_base son requeridos');

    return this.prisma.productos.create({
      data: {
        id_comercio: idComercio,
        // si NO usas categorías aquí, fija un valor o elimina si tu esquema lo permite
        id_categoria: BigInt(dto.id_categoria ?? 1),
        nombre: dto.nombre,
        descripcion: dto.descripcion ?? null,
        precio_base: dto.precio_base,
        precio_actual: dto.precio_actual ?? null,
        fecha_vencimiento: dto.fecha_vencimiento ?? null,
        cantidad_disponible: dto.cantidad_disponible ?? 0,
        estado: dto.estado ?? true,
      },
    });
  }

  private async ensureOwner(userId: bigint, id_producto: bigint) {
    const prod = await this.prisma.productos.findUnique({ where: { id_producto } });
    if (!prod) throw new NotFoundException('Producto no encontrado');
    const idComercio = await this.comercioIdFromUser(userId);
    if (prod.id_comercio !== idComercio) throw new ForbiddenException('Sin permiso');
    return prod;
  }

  async update(userId: bigint, id: bigint, dto: any) {
    await this.ensureOwner(userId, id);
    return this.prisma.productos.update({
      where: { id_producto: id },
      data: dto,
    });
  }

  async remove(userId: bigint, id: bigint) {
    await this.ensureOwner(userId, id);
    // Baja lógica
    return this.prisma.productos.update({
      where: { id_producto: id },
      data: { estado: false },
    });
  }

  async uploadImage(userId: bigint, id: bigint, file: Express.Multer.File) {
    await this.ensureOwner(userId, id);
    if (!file) throw new BadRequestException('Falta archivo');

    const ext = (file.mimetype.split('/')[1] || 'jpg').toLowerCase();
    const fname = `p_${id}_${Date.now()}.${ext}`;
    const dir = path.join(process.cwd(), 'uploads', 'productos');
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(path.join(dir, fname), file.buffer);

    const rel = `/uploads/productos/${fname}`;
    const updated = await this.prisma.productos.update({
      where: { id_producto: id },
      data: { imagen_url: rel },
    });
    return { ok: true, url: rel, producto: updated };
  }

  async deleteImage(userId: bigint, id: bigint) {
    const prod = await this.ensureOwner(userId, id);
    if (prod.imagen_url) {
      const file = path.join(process.cwd(), prod.imagen_url.replace(/^\//, ''));
      try {
        await fs.unlink(file);
      } catch {}
    }
    await this.prisma.productos.update({
      where: { id_producto: id },
      data: { imagen_url: null },
    });
    return { ok: true };
  }
}
