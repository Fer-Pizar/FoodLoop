import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ReservasController } from './reservas.controller';
import { ReservasService } from './reservas.service';
import { PrismaModule } from '../prisma/prisma.module';
import { NotificacionesModule } from '../notificaciones/notificaciones.module';

@Module({
  imports: [
    PrismaModule,
    ScheduleModule,
    NotificacionesModule, 
  ],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {}
