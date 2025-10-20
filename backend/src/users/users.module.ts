import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../prisma/prisma.service'; // asegúrate que esta ruta sea correcta

@Module({
  controllers: [UsersController], // ✅ para que Nest exponga /api/users
  providers: [UsersService, PrismaService], // ✅ Prisma necesario para queries
  exports: [UsersService], // opcional, útil si lo usan otros módulos
})
export class UsersModule {}

