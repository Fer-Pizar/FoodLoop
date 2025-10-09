import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
  providers: [UsersService],
  exports: [UsersService], // <--- importante para poder usarlo en otros módulos
})
export class UsersModule {}
