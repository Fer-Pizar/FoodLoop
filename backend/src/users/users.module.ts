import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; 
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service'; 
import { NegocioController } from './negocio.controller';
import { NegocioService } from './negocio.service';
import { ComerciosController } from './comercios.controller';
import { ConsumidorController } from './consumidor.controller';

@Module({
  imports: [PrismaModule],
  controllers: [
    UsersController,
    NegocioController,
    ComerciosController,
    ConsumidorController, 
  ],
  providers: [
    UsersService,
    NegocioService,
  ],
  exports: [
    UsersService,
    NegocioService, 
  ],
})
export class UsersModule {}