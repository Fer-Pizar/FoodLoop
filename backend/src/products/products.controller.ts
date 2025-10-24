import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('productos')
export class ProductsController {
  constructor(private readonly service: ProductsService) {}

  @Get()
  async findAll(
    @Query('comercioId') comercioId?: string,
    @Query('id_categoria') idCategoria?: string,
    @Query('categoria') categoria?: string, 
    @Query('q') q?: string,
    @Query('expiresSoon') expiresSoon?: string, 
  ) {
    if (!comercioId) {
      throw new BadRequestException('comercioId es requerido');
    }

    return this.service.findByFilters({
      comercioId: Number(comercioId),
      idCategoria: idCategoria ? Number(idCategoria) : undefined,
      categoria: categoria || undefined,
      q: q || undefined,
      expiresSoon: expiresSoon === 'true',
    });
  }
}
