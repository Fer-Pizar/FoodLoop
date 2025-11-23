import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type FindParams = {
  comercioId: number;
  idCategoria?: number;
  categoria?: string;
  q?: string;
  expiresSoon?: boolean;
};

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async getComerciosByCategoria(categoria: string) {
    return this.prisma.comercio.findMany({
      where: {
        categoria,
        estado: true,
      },
      select: {
        idComercio: true,
        nombreNegocio: true,
        telefono: true,
        direccion: true,
        categoria: true,
        latitud: true,
        longitud: true,
      },
    });
  }

  async getComerciosByCategoryName(categoryName: string) {
    return this.getComerciosByCategoria(categoryName);
  }

  async getProductosByComercio(idComercio: number) {
    const id = BigInt(idComercio);

    const productos = await this.prisma.productos.findMany({
      where: { id_comercio: id },
      select: {
        id_producto: true,
        nombre: true,
        descripcion: true,
        precio_base: true,
        precio_actual: true,
        imagen_url: true,
        cantidad_disponible: true,
        estado: true,
      },
      orderBy: { id_producto: 'asc' },
    });

    return productos;
  }

  async findByFilters(params: FindParams) {
    const { comercioId, idCategoria, categoria, q, expiresSoon } = params;

    const where: any = {
      id_comercio: comercioId,
      estado: true,
      cantidad_disponible: { gt: 0 },
    };

    if (idCategoria) {
      where.id_categoria = idCategoria;
    }

    if (!idCategoria && categoria) {
      const cat = await this.prisma.categorias.findFirst({
        where: { nombre: categoria },
        select: { id_categoria: true },
      });
      if (cat) {
        where.id_categoria = cat.id_categoria;
      }
    }

    if (q) {
      where.nombre = { contains: q, mode: 'insensitive' };
    }

    if (expiresSoon) {
      const inTwoDays = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      where.fecha_vencimiento = { lte: inTwoDays };
    }

    return this.prisma.productos.findMany({
      where,
      orderBy: [{ fecha_publicacion: 'desc' }],
      select: {
        id_producto: true,
        id_comercio: true,
        id_categoria: true,
        nombre: true,
        descripcion: true,
        precio_base: true,
        precio_actual: true,
        imagen_url: true,
        fecha_vencimiento: true,
        cantidad_disponible: true,
      },
    });
  }
}
