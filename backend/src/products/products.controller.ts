import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('productos')
export class ProductsController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async findAll() {
    return this.prisma.productos.findMany({
      where: { estado: true },
      include: { categorias: true, comercio: true },
      orderBy: { fecha_publicacion: 'desc' },
    });
  }
}

