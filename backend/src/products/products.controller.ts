import { Controller, Get, Query, BadRequestException, UseGuards,} from '@nestjs/common';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('products') 
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

  @UseGuards(JwtAuthGuard)
  @Get('comercios/by-category')
  async getComerciosByCategory(@Query('categoria') categoria: string) {
    if (!categoria) {
      throw new BadRequestException('Query param "categoria" is required');
    }

    const comercios = await this.service.getComerciosByCategoria(categoria);

    return {
      ok: true,
      categoria,
      comercios,
    };
  }
}
