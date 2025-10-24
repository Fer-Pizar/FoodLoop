import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service'; // asegúrate que esta ruta sea correcta
import { NegocioController } from './negocio.controller';
import { NegocioService } from './negocio.service';
import { ComerciosController } from './comercios.controller';

@Module({
  controllers: [UsersController, NegocioController, ComerciosController], 
  providers: [UsersService, PrismaService, NegocioService], 
  exports: [UsersService], 
})
export class UsersModule {}

