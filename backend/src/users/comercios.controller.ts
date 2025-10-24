import { Controller, Get, Param, Query } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Controller('comercios')
export class ComerciosController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  async list(
    @Query('id_categoria') idCategoria?: string,
    @Query('categoria') categoria?: string,  
    @Query('q') q?: string,                 
  ) {
    const where: any = { estado: true };

    if (idCategoria) {
      where.id_categoria = Number(idCategoria);
    } else if (categoria) {
      const cat = await this.prisma.categorias.findFirst({
        where: { nombre: categoria },
        select: { id_categoria: true },
      });
      if (cat) where.id_categoria = Number(cat.id_categoria);
    }

    if (q) where.nombreNegocio = { contains: q, mode: 'insensitive' };

    return this.prisma.comercio.findMany({
      where,
      orderBy: { nombreNegocio: 'asc' },
      select: {
        idComercio: true,
        nombreNegocio: true,
        direccion: true,
        telefono: true,
        id_categoria: true,
      },
    });
  }

  @Get(':id')
  async byId(@Param('id') id: string) {
    const idComercio = Number(id);
    return this.prisma.comercio.findUnique({
      where: { idComercio },
      select: {
        idComercio: true,
        nombreNegocio: true,
        direccion: true,
        telefono: true,
        id_categoria: true,
      },
    });
  }
}
