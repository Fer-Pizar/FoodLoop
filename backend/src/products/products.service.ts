import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

type FindParams = {
  comercioId: number;
  idCategoria?: number;   
  categoria?: string;     
  q?: string;             // búsqueda por nombre
  expiresSoon?: boolean;  // fecha_vencimiento cercana
};

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async findByFilters(params: FindParams) {
    const { comercioId, idCategoria, categoria, q, expiresSoon } = params;

    // Base: productos activos del comercio con stock
    const where: any = {
      id_comercio: comercioId,
      estado: true,
      cantidad_disponible: { gt: 0 },
    };

    // Filtro por id_categoria directo
    if (idCategoria) {
      where.id_categoria = idCategoria;
    }

    // Filtro por nombre de categoría (resolver a id)
    if (!idCategoria && categoria) {
      const cat = await this.prisma.categorias.findFirst({
        where: { nombre: categoria },
        select: { id_categoria: true },
      });
      if (cat) {
        where.id_categoria = cat.id_categoria;
      }
    }

    // Búsqueda por nombre
    if (q) {
      where.nombre = { contains: q, mode: 'insensitive' };
    }

    // “Del día” (vence pronto). Ajusta días si quieres.
    if (expiresSoon) {
      const inTwoDays = new Date(Date.now() + 2 * 24 * 60 * 60 * 1000);
      where.fecha_vencimiento = { lte: inTwoDays };
    }

    // Devuelve lo necesario para la vista
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
