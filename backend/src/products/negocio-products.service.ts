// backend/src/products/negocio-products.service.ts
import { Injectable, ForbiddenException, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as fs from 'fs/promises';
import * as path from 'path';
import { effectivePricing } from './discount.util'; // ⬅️ NUEVO

@Injectable()
export class NegocioProductsService {
  constructor(private prisma: PrismaService) {}

  private async comercioIdFromUser(userId: bigint) {
    const com = await this.prisma.comercio.findUnique({
      where: { idUsuario: userId },
      select: { idComercio: true },
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
      }),
      this.prisma.productos.count({ where }),
    ]);

    const data = items.map((p) => {
      const base = Number(p.precio_base);
      const actual = p.precio_actual == null ? null : Number(p.precio_actual);

      // 🧠 aplica regla mixta (manual tiene prioridad; si no, automático por vencimiento)
      const ep = effectivePricing({
        precio_base: base,
        precio_actual: actual,
        fecha_vencimiento: p.fecha_vencimiento ?? null,
      });

      return {
        ...p,
        precio_base: base,
        precio_actual: actual,
        precioFinal: ep.precioFinal,                                // ⬅️ NUEVO
        descuentoPct: ep.descuentoPct,                              // ⬅️ NUEVO
        descuentoAbs: Number((base - ep.precioFinal).toFixed(2)),   // ⬅️ NUEVO
        origenDescuento: ep.origen,                                 // "manual" | "auto"
        diasParaVencer: ep.diasParaVencer ?? null,
        imagen_url: p.imagen_url ? `/uploads/productos/${path.basename(p.imagen_url)}` : null,
      };
    });

    return { page, limit, total, data };
  }

  async stats(userId: bigint) {
    const idComercio = await this.comercioIdFromUser(userId);
    const soon = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    const [activos, inactivos, porVencer] = await Promise.all([
      this.prisma.productos.count({ where: { id_comercio: idComercio, estado: true } }),
      this.prisma.productos.count({ where: { id_comercio: idComercio, estado: false } }),
      this.prisma.productos.count({
        where: { id_comercio: idComercio, estado: true, fecha_vencimiento: { lte: soon } },
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
    return this.prisma.productos.update({ where: { id_producto: id }, data: dto });
  }

  async remove(userId: bigint, id: bigint) {
    await this.ensureOwner(userId, id);
    return this.prisma.productos.update({ where: { id_producto: id }, data: { estado: false } });
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
      try { await fs.unlink(file); } catch {}
    }
    await this.prisma.productos.update({ where: { id_producto: id }, data: { imagen_url: null } });
    return { ok: true };
  }
}

