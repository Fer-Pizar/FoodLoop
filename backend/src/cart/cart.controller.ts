import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('cart')
@UseGuards(JwtAuthGuard)
export class CartController {
  constructor(private readonly cartService: CartService) {}

  private getUserId(req: any): number {
    return req.user.userId ?? req.user.sub;
  }

  @Get()
  async getCart(@Request() req: any) {
    const userId = this.getUserId(req);
    const cart = await this.cartService.getCart(userId);
    return {
      success: true,
      message: 'Carrito obtenido correctamente',
      ...cart,
    };
  }

  @Post('add')
  async addToCart(@Request() req: any, @Body() body: AddToCartDto) {
    const userId = this.getUserId(req);
    const cart = await this.cartService.addItem(userId, body.productId, body.quantity);
    return {
      success: true,
      message: 'Producto agregado al carrito', 
      ...cart,
    };
  }

  @Patch('item/:productId')
  async updateItem(
    @Request() req: any,
    @Param('productId', ParseIntPipe) productId: number,
    @Body() body: UpdateCartItemDto,
  ) {
    const userId = this.getUserId(req);
    const cart = await this.cartService.updateItem(userId, productId, body.quantity);
    return {
      success: true,
      message: 'Producto actualizado en el carrito',
      ...cart,
    };
  }

  @Delete('item/:productId')
  async deleteItem(
    @Request() req: any,
    @Param('productId', ParseIntPipe) productId: number,
  ) {
    const userId = this.getUserId(req);
    const cart = await this.cartService.removeItem(userId, productId);
    return {
      success: true,
      message: 'Producto eliminado del carrito',
      ...cart,
    };
  }

  @Delete('clear')
  async clear(@Request() req: any) {
    const userId = this.getUserId(req);
    const cart = await this.cartService.clearCart(userId);
    return {
      success: true,
      message: 'Carrito vaciado',
      ...cart,
    };
  }
}
