import { Module } from '@nestjs/common';
import { NegocioService } from './negocio.service';
import { NegocioController } from './negocio.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [NegocioController],
  providers: [NegocioService],
})
export class NegocioModule {}
