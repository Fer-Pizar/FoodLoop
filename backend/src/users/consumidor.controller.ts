import { Controller, Get, Patch, UseGuards, Req, Body, BadRequestException, UseInterceptors, UploadedFile, Delete,} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { UsersService, toPublic } from './users.service';
import { UpdateConsumidorDto } from './dto/update-consumidor.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage, memoryStorage } from 'multer'; 
import { extname, join } from 'path';
import { existsSync, unlinkSync } from 'fs';
import { Request } from 'express';
import { uploadToCloudinary } from '../cloudinary';

const AVATARS_DIR = join(process.cwd(), 'uploads', 'avatars');

type JwtUser = {
  sub?: number | string;
  id?: number | string;
  idUsuario?: number | string;
  id_usuario?: number | string;
  userId?: number | string;
  uid?: number | string;
};

function extractUserId(req: Request & { user?: JwtUser }) {
  const raw =
    req.user?.sub ??
    req.user?.id ??
    req.user?.idUsuario ??
    req.user?.id_usuario ??
    req.user?.userId ??
    req.user?.uid;

  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function avatarFileName(userId: number, originalName: string) {
  const ts = Date.now();
  const ext = extname(originalName || '').toLowerCase() || '.png';
  return `u_${userId}_${ts}${ext}`;
}

function toAbsolutePath(storedPath: string | null) {
  if (!storedPath) return null;
  if (storedPath.startsWith('/') || storedPath.startsWith('\\')) {
    return storedPath;
  }
  return join(process.cwd(), storedPath);
}

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

  @Patch('me')
  async updateMe(
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

    const user = await this.usersService.findByIdOrThrow(userId);

    if (user.fotoPerfil) {
      const abs = toAbsolutePath(user.fotoPerfil);
      if (abs && existsSync(abs)) {
        try {
          unlinkSync(abs);
        } catch {
        }
      }
    }

    const { url } = await uploadToCloudinary(
      file.buffer, 
      'foodloop/avatars',
      `consumidor_${userId}_${Date.now()}`,
    );

    const updated = await this.usersService.updateAvatar(userId, url);

    return toPublic(updated);
  }

  @Delete('avatar')
  async deleteAvatar(@Req() req: Request & { user?: JwtUser }) {
    const userId = extractUserId(req);
    if (!userId) throw new BadRequestException('Invalid token user');

    const user = await this.usersService.findByIdOrThrow(userId);

    if (user.fotoPerfil) {
      const abs = toAbsolutePath(user.fotoPerfil);
      if (abs && existsSync(abs)) {
        try {
          unlinkSync(abs);
        } catch {
        }
      }
    }

    await this.usersService.updateAvatar(userId, null);
    return { ok: true, foto_perfil: null };
  }
}
