import { Controller, Get } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list() {
    return this.prisma.categorias.findMany({
      select: { id_categoria: true, nombre: true, descripcion: true },
      orderBy: { nombre: 'asc' },
    });
  }
}
