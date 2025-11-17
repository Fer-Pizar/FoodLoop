import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { ProductsController } from './products.controller';       
import { ProductsService } from './products.service';
import { NegocioProductsController } from './negocio-products.controller'; 
import { NegocioProductsService } from './negocio-products.service';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [
    PrismaModule,
    AuthModule,    
  ],

  controllers: [
    ProductsController,      
    CategoriesController,
    NegocioProductsController,
  ],

  providers: [
    ProductsService,          
    NegocioProductsService,
  ],

  exports: [
    ProductsService,         
    NegocioProductsService,
  ],
})
export class ProductsModule {}
