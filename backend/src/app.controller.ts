import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('health')
  health() {
    return { ok: true };
  }

  @Post('users')
  createUser(@Body() body: CreateUserDto) {
    return { created: true, user: body };
  }
}
