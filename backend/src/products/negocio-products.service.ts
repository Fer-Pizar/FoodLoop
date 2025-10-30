// src/products/negocio-products.service.ts
import {
  Injectable,
  ForbiddenException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as fs from 'fs/promises';
import * as path from 'path';
import { effectivePricingAuto } from './discount.util';

type ListQuery = {
  page?: string;
  limit?: string;
  estado?: 'activo' | 'inactivo' | 'todos';
  search?: string;
  orden?: 'precio' | 'stock' | 'fecha';
};

@Injectable()
export class NegocioProductsService {
  constructor(private readonly prisma: PrismaService) {}

  private async comercioIdFromUser(userId: bigint) {
    const com = await this.prisma.comercio.findUnique({
      where: { idUsuario: userId },
      select: { idComercio: true },
    });
    if (!com) throw new ForbiddenException('Usuario sin comercio.');
    return com.idComercio;
  }

  /** Normaliza y valida el DTO de entrada (sin precio manual). */
  private parseDto(dto: any) {
    const out: any = {};

    if (typeof dto?.nombre === 'string') out.nombre = dto.nombre.trim();

    if (dto?.descripcion !== undefined)
      out.descripcion = dto.descripcion?.toString().trim() || null;

    if (dto?.precio_base !== undefined) {
      const n = Number(dto.precio_base);
      if (Number.isNaN(n) || n < 0)
        throw new BadRequestException('precio_base inválido');
      out.precio_base = n;
    }

    // ❌ No aceptamos precio manual: se ignora si viene
    if ('precio_actual' in dto) {
      // no guardamos precio manual (se calculará)
    }

    if (dto?.cantidad_disponible !== undefined) {
      const n = Number(dto.cantidad_disponible);
      if (Number.isNaN(n) || n < 0)
        throw new BadRequestException('cantidad_disponible inválida');
      out.cantidad_disponible = n;
    }

    if (dto?.fecha_vencimiento !== undefined && dto.fecha_vencimiento) {
      const d = new Date(dto.fecha_vencimiento);
      if (isNaN(d.getTime()))
        throw new BadRequestException('fecha_vencimiento inválida');
      out.fecha_vencimiento = d;
    } else if ('fecha_vencimiento' in dto) {
      out.fecha_vencimiento = null;
    }

    if (dto?.estado !== undefined) out.estado = !!dto.estado;

    if (dto?.id_categoria !== undefined)
      out.id_categoria = BigInt(dto.id_categoria ?? 1);

    return out;
  }

  /** Lista de productos, recalculando el precio efectivo “hoy” según reglas. */
  async list(userId: bigint, q: ListQuery = {}) {
    const idComercio = await this.comercioIdFromUser(userId);
    const page = Math.max(1, parseInt(q.page ?? '1'));
    const limit = Math.min(50, Math.max(5, parseInt(q.limit ?? '10')));
    const skip = (page - 1) * limit;

    // Filtros sin tipos de Prisma
    const where: any = { id_comercio: idComercio };
    if (q.estado && q.estado !== 'todos') where.estado = q.estado === 'activo';
    if (q.search) where.nombre = { contains: q.search, mode: 'insensitive' };

    const orderBy: any =
      q.orden === 'precio'
        ? { precio_actual: { sort: 'desc', nulls: 'last' } }
        : q.orden === 'stock'
        ? { cantidad_disponible: 'desc' }
        : { fecha_publicacion: 'desc' };

    const [items, total] = await Promise.all([
      this.prisma.productos.findMany({ where, orderBy, skip, take: limit }),
      this.prisma.productos.count({ where }),
    ]);

    const data = items.map((p) => {
      const base = Number(p.precio_base);
      const ep = effectivePricingAuto({
        precio_base: base,
        fecha_vencimiento: p.fecha_vencimiento ?? null,
      });

      return {
        ...p,
        precio_base: base,
        // 👇 Lo que mostramos al front siempre es lo recalculado "hoy"
        precio_actual: ep.precioFinal,
        precioFinal: ep.precioFinal,
        descuentoPct: ep.descuentoPct,
        descuentoAbs: Number((base - ep.precioFinal).toFixed(2)),
        origenDescuento: 'auto' as const,
        diasParaVencer: ep.diasParaVencer,
        imagen_url: p.imagen_url
          ? `/uploads/productos/${path.basename(p.imagen_url)}`
          : null,
      };
    });

    return { page, limit, total, data };
  }

  async stats(userId: bigint) {
    const idComercio = await this.comercioIdFromUser(userId);
    const soon = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    const [activos, inactivos, porVencer] = await Promise.all([
      this.prisma.productos.count({
        where: { id_comercio: idComercio, estado: true },
      }),
      this.prisma.productos.count({
        where: { id_comercio: idComercio, estado: false },
      }),
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

  /** Crea producto y **persiste** el precio_actual calculado por reglas. */
  async create(userId: bigint, dto: any) {
    const idComercio = await this.comercioIdFromUser(userId);
    const parsed = this.parseDto(dto);

    if (!parsed?.nombre || parsed?.precio_base === undefined)
      throw new BadRequestException('nombre y precio_base son requeridos');

    const ep = effectivePricingAuto({
      precio_base: parsed.precio_base,
      fecha_vencimiento: parsed.fecha_vencimiento ?? null,
    });

    return this.prisma.productos.create({
      data: {
        id_comercio: idComercio,
        id_categoria: parsed.id_categoria ?? BigInt(1),
        nombre: parsed.nombre,
        descripcion: parsed.descripcion ?? null,
        precio_base: parsed.precio_base,
        // ✅ Persistimos el precio calculado
        precio_actual: ep.precioFinal,
        fecha_vencimiento: parsed.fecha_vencimiento ?? null,
        cantidad_disponible: parsed.cantidad_disponible ?? 0,
        estado: parsed.estado ?? true,
      },
    });
  }

  private async ensureOwner(userId: bigint, id_producto: bigint) {
    const prod = await this.prisma.productos.findUnique({
      where: { id_producto },
    });
    if (!prod) throw new NotFoundException('Producto no encontrado');
    const idComercio = await this.comercioIdFromUser(userId);
    if (prod.id_comercio !== idComercio)
      throw new ForbiddenException('Sin permiso');
    return prod;
  }

  /**
   * Actualiza y **recalcula** precio_actual según reglas.
   * Si no se envía precio_base/fecha_vencimiento en el DTO,
   * usamos los valores actuales para el cálculo.
   */
  async update(userId: bigint, id: bigint, dto: any) {
    await this.ensureOwner(userId, id);

    const existing = await this.prisma.productos.findUnique({
      where: { id_producto: id },
      select: { precio_base: true, fecha_vencimiento: true },
    });
    if (!existing) throw new NotFoundException('Producto no encontrado');

    const parsed = this.parseDto(dto);

    const baseToUse =
      parsed.precio_base !== undefined
        ? parsed.precio_base
        : Number(existing.precio_base);

    const fechaToUse =
      parsed.fecha_vencimiento !== undefined
        ? parsed.fecha_vencimiento
        : existing.fecha_vencimiento ?? null;

    const ep = effectivePricingAuto({
      precio_base: baseToUse,
      fecha_vencimiento: fechaToUse,
    });

    // ✅ persistimos el nuevo precio calculado
    parsed.precio_actual = ep.precioFinal;

    return this.prisma.productos.update({
      where: { id_producto: id },
      data: parsed,
    });
  }

  async remove(userId: bigint, id: bigint) {
    await this.ensureOwner(userId, id);
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
