import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Decimal } from '@prisma/client/runtime/library';

export interface CartItem {
  id_producto: number;  
  nombre: string;
  precio_actual: number;
  cantidad: number;
  subtotal: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

@Injectable()
export class CartService {
  private carts = new Map<number, Cart>();

  constructor(private prisma: PrismaService) {}

  private recalcTotal(cart: Cart) {
    cart.total = cart.items.reduce((sum, i) => sum + i.subtotal, 0);
  }

  async getCart(userId: number): Promise<Cart> {
    return this.carts.get(userId) ?? { items: [], total: 0 };
  }

  async addItem(userId: number, productId: number, quantity: number): Promise<Cart> {
    const product = await this.prisma.productos.findUnique({
      where: { id_producto: BigInt(productId) },
    });

    if (!product || !product.estado)
      throw new NotFoundException('Producto no disponible');

    const stock = product.cantidad_disponible ?? 0;
    if (stock <= 0) throw new BadRequestException('Producto sin stock');
    if (quantity > stock) throw new BadRequestException('Stock insuficiente');

    const price = product.precio_actual instanceof Decimal
      ? Number(product.precio_actual)
      : 0;

    const cart = this.carts.get(userId) ?? { items: [], total: 0 };
    const existing = cart.items.find(i => i.id_producto === Number(product.id_producto));

    if (existing) {
      const newQty = existing.cantidad + quantity;
      if (newQty > stock) throw new BadRequestException('Stock insuficiente');

      existing.cantidad = newQty;
      existing.subtotal = newQty * price;
    } else {
      cart.items.push({
        id_producto: Number(product.id_producto),
        nombre: product.nombre,
        precio_actual: price,
        cantidad: quantity,
        subtotal: price * quantity,
      });
    }

    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async updateItem(userId: number, productId: number, quantity: number): Promise<Cart> {
    if (quantity < 1) return this.removeItem(userId, productId);

    const cart = this.carts.get(userId);
    if (!cart) throw new NotFoundException('El carrito está vacío');

    const item = cart.items.find(i => i.id_producto === productId);
    if (!item) throw new NotFoundException('El producto no está en el carrito');

    const product = await this.prisma.productos.findUnique({
      where: { id_producto: BigInt(productId) },
    });

    if (!product || !product.estado)
      throw new NotFoundException('Producto no disponible');

    const stock = product.cantidad_disponible ?? 0;
    if (quantity > stock) throw new BadRequestException('Stock insuficiente');

    const price = product.precio_actual instanceof Decimal
      ? Number(product.precio_actual)
      : 0;

    item.cantidad = quantity;
    item.subtotal = quantity * price;

    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async removeItem(userId: number, productId: number): Promise<Cart> {
    const cart = this.carts.get(userId);
    if (!cart) throw new NotFoundException('El carrito está vacío');

    cart.items = cart.items.filter(i => i.id_producto !== productId);

    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async clearCart(userId: number): Promise<Cart> {
    const empty = { items: [], total: 0 };
    this.carts.set(userId, empty);
    return empty;
  }
}
