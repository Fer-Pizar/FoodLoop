import {Controller,Get,Put,Param,Body,NotFoundException,} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Obtener usuario por ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(id);
    if (!user) throw new NotFoundException('Usuario no encontrado');
    return user;
  }

  // Actualizar nombre o fechaNacimiento
  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() body: { nombre?: string; fechaNacimiento?: string }
  ) {
    const updated = await this.usersService.updateUser(id, body);
    if (!updated) throw new NotFoundException('No se pudo actualizar el usuario');
    return updated;
  }
}
