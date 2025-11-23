import { Controller, Get, Patch, UseGuards, Req, Body, BadRequestException, UseInterceptors, UploadedFile, Delete,} from '@nestjs/common';

import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService, toPublic } from './users.service';
import { UpdateConsumidorDto } from './dto/update-consumidor.dto';

import { FileInterceptor } from '@nestjs/platform-express';
  import { memoryStorage } from 'multer';
import { Request } from 'express';

import { uploadToCloudinary } from '../cloudinary';
import { extractUserId, JwtUser } from '../auth/jwt.types';

@Controller('consumidor')
@UseGuards(JwtAuthGuard)
export class ConsumidorController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  async me(@Req() req: Request & { user?: JwtUser }) {
    const userId = extractUserId(req);
    if (!userId) throw new BadRequestException('Invalid token user');

    const user = await this.usersService.findByIdOrThrow(userId);
    return toPublic(user);
  }

  @Patch()
  async update(
    @Req() req: Request & { user?: JwtUser },
    @Body() dto: UpdateConsumidorDto,
  ) {
    const userId = extractUserId(req);
    if (!userId) throw new BadRequestException('Invalid token user');

    const updated = await this.usersService.updateConsumidor(userId, dto);
    return toPublic(updated);
  }

  @Patch('avatar')
  @UseInterceptors(
    FileInterceptor('avatar', {
      storage: memoryStorage(),
      fileFilter: (req, file, cb) => {
        const ok = /image\/(png|jpe?g|webp)/i.test(file.mimetype);
        cb(ok ? null : new BadRequestException('Only PNG/JPG/WEBP'), ok);
      },
      limits: { fileSize: 3 * 1024 * 1024 },
    }),
  )
  async uploadAvatar(
    @Req() req: Request & { user?: JwtUser },
    @UploadedFile() file?: Express.Multer.File,
  ) {
    const userId = extractUserId(req);
    if (!userId) throw new BadRequestException('Invalid token user');
    if (!file) throw new BadRequestException('avatar file is required');

    const folder = 'foodloop/avatars';
    const publicId = `consumidor_${userId}_${Date.now()}`;
    const { url } = await uploadToCloudinary(file.buffer, folder, publicId);

    const updated = await this.usersService.updateAvatar(userId, url);
    return toPublic(updated);
  }

  @Delete('avatar')
  async deleteAvatar(@Req() req: Request & { user?: JwtUser }) {
    const userId = extractUserId(req);
    if (!userId) throw new BadRequestException('Invalid token user');

    await this.usersService.updateAvatar(userId, null);
    return { ok: true, foto_perfil: null };
  }
}
