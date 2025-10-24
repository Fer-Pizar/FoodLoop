import {Controller,Get,Patch,Body,UseGuards,Req,Post,Delete,UploadedFile,UseInterceptors,} from '@nestjs/common';
import { NegocioService } from './negocio.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

// Multer en memoria (buffer disponible en file.buffer)
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';

@Controller('negocio')
@UseGuards(JwtAuthGuard)
export class NegocioController {
  constructor(private readonly service: NegocioService) {}

  @Get('me')
  me(@Req() req: any) {
    // req.user.userId viene del JWT (payload)
    return this.service.getMine(req.user.userId);
  }

  @Patch('me')
  update(@Req() req: any, @Body() body: any) {
    return this.service.updateMine(req.user.userId, body);
  }

  // ✅ SUBIR AVATAR
  @Post('me/avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: memoryStorage(),
      limits: { fileSize: 3 * 1024 * 1024 }, // 3MB
    }),
  )
  uploadAvatar(@Req() req: any, @UploadedFile() file: Express.Multer.File /* o: any */) {
    return this.service.uploadMyAvatar(req.user.userId, file);
  }

  // 🗑️ ELIMINAR AVATAR
  @Delete('me/avatar')
  deleteAvatar(@Req() req: any) {
    return this.service.deleteMyAvatar(req.user.userId);
  }
}

