import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module'; 
import { UsersController } from './users.controller';
import { ConsumidorController } from './consumidor.controller'; 
import { NegocioController } from './negocio.controller';
import { UsersService } from './users.service';
import { NegocioService } from './negocio.service';
import { PrismaService } from '../prisma/prisma.service';


@Module({
  imports: [PrismaModule],
  controllers: [
    UsersController,
    NegocioController,
    ConsumidorController,   
  ],
  providers: [
    UsersService,
    NegocioService,
    PrismaService,
  ],
  exports: [
    UsersService,
    NegocioService,
  ],
})
export class UsersModule {}
