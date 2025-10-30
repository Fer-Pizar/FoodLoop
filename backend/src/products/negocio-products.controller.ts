// backend/src/products/negocio-products.controller.ts
import {
  Controller, Get, Post, Patch, Delete,
  Param, Query, Body, Req,
  UseGuards, UploadedFile, UseInterceptors, ParseIntPipe
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { NegocioProductsService } from './negocio-products.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard'; // tu guard existente

@UseGuards(JwtAuthGuard)
@Controller('negocio/productos')
export class NegocioProductsController {
  constructor(private readonly svc: NegocioProductsService) {}

  @Get()
  list(
    @Req() req,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
    @Query('estado') estado?: 'activo'|'inactivo'|'todos',
    @Query('search') search?: string,
    @Query('orden') orden?: 'precio'|'stock'|'fecha',
  ) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.list(userId, { page, limit, estado, search, orden });
  }

  @Get('stats')
  stats(@Req() req) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.stats(userId);
  }

  @Post()
  create(@Req() req, @Body() dto: any) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.create(userId, dto);
  }

  @Patch(':id')
  update(@Req() req, @Param('id', ParseIntPipe) id: number, @Body() dto: any) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.update(userId, BigInt(id), dto);
  }

  @Delete(':id')
  remove(@Req() req, @Param('id', ParseIntPipe) id: number) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.remove(userId, BigInt(id));
  }

  @Post(':id/imagen')
  @UseInterceptors(FileInterceptor('imagen'))
  uploadImage(
    @Req() req,
    @Param('id', ParseIntPipe) id: number,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.uploadImage(userId, BigInt(id), file);
  }

  @Delete(':id/imagen')
  deleteImage(@Req() req, @Param('id', ParseIntPipe) id: number) {
    const userId = BigInt(req.user.idUsuario || req.user.userId);
    return this.svc.deleteImage(userId, BigInt(id));
  }
}
