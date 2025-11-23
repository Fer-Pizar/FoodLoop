import { BadRequestException, Injectable, NotFoundException,} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, reserva_estado } from '@prisma/client';

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

  constructor(private readonly prisma: PrismaService) {}

  private getOrCreateCart(userId: number): Cart {
    const existing = this.carts.get(userId);
    if (existing) return existing;

    const empty: Cart = { items: [], total: 0 };
    this.carts.set(userId, empty);
    return empty;
  }

  private recalcTotal(cart: Cart) {
    cart.total = cart.items.reduce((sum, i) => sum + i.subtotal, 0);
  }

  private generateValidationCode(): string {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = '';
    for (let i = 0; i < 12; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    return code;
  }

  async getCart(userId: number): Promise<Cart> {
    return this.carts.get(userId) ?? { items: [], total: 0 };
  }

  async addItem(
    userId: number,
    productId: number,
    quantity: number,
  ): Promise<Cart> {
    if (quantity <= 0) {
      throw new BadRequestException('La cantidad debe ser mayor a 0');
    }

    const product = await this.prisma.productos.findUnique({
      where: { id_producto: BigInt(productId) },
    });

    if (!product || !product.estado) {
      throw new NotFoundException('Producto no disponible');
    }

    const available = product.cantidad_disponible ?? 0;
    if (available <= 0) {
      throw new BadRequestException('Producto sin stock');
    }
    if (quantity > available) {
      throw new BadRequestException('Stock insuficiente');
    }

    const cart = this.getOrCreateCart(userId);

    const existing = cart.items.find(
      (i) => i.id_producto === Number(product.id_producto),
    );

    const precio = Number(product.precio_actual ?? product.precio_base ?? 0);

    if (existing) {
      const newQuantity = existing.cantidad + quantity;
      if (newQuantity > available) {
        throw new BadRequestException('Stock insuficiente');
      }

      existing.cantidad = newQuantity;
      existing.subtotal = newQuantity * precio;
      existing.precio_actual = precio;
    } else {
      cart.items.push({
        id_producto: Number(product.id_producto),
        nombre: product.nombre,
        precio_actual: precio,
        cantidad: quantity,
        subtotal: precio * quantity,
      });
    }

    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async updateItem(
    userId: number,
    productId: number,
    quantity: number,
  ): Promise<Cart> {
    if (quantity <= 0) {
      return this.removeItem(userId, productId);
    }

    const cart = this.carts.get(userId);
    if (!cart) {
      throw new NotFoundException('El carrito está vacío');
    }

    const item = cart.items.find((i) => i.id_producto === productId);
    if (!item) {
      throw new NotFoundException('El producto no está en el carrito');
    }

    const product = await this.prisma.productos.findUnique({
      where: { id_producto: BigInt(productId) },
    });

    if (!product || !product.estado) {
      throw new NotFoundException('Producto no disponible');
    }

    const available = product.cantidad_disponible ?? 0;
    if (quantity > available) {
      throw new BadRequestException('Stock insuficiente');
    }

    const precio = Number(product.precio_actual ?? product.precio_base ?? 0);

    item.cantidad = quantity;
    item.precio_actual = precio;
    item.subtotal = quantity * precio;

    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async removeItem(userId: number, productId: number): Promise<Cart> {
    const cart = this.carts.get(userId);
    if (!cart) {
      throw new NotFoundException('El carrito está vacío');
    }

    const exists = cart.items.some((i) => i.id_producto === productId);
    if (!exists) {
      throw new NotFoundException('Producto no está en el carrito');
    }

    cart.items = cart.items.filter((i) => i.id_producto !== productId);
    this.recalcTotal(cart);
    this.carts.set(userId, cart);
    return cart;
  }

  async clearCart(userId: number): Promise<Cart> {
    const empty: Cart = { items: [], total: 0 };
    this.carts.set(userId, empty);
    return empty;
  }

  async reserveCart(
    userId: number,
    ventanaRetiroInicio?: Date,
    ventanaRetiroFin?: Date,
  ): Promise<{
    reservas: {
      id_reserva: bigint;
      id_producto: bigint;
      cantidad: number;
      total: Prisma.Decimal;
      estado: reserva_estado;
      codigo_validacion: string;
    }[];
    totalGeneral: number;
  }> {
    const cart = this.carts.get(userId);

    if (!cart || cart.items.length === 0) {
      throw new BadRequestException('El carrito está vacío');
    }

    const reservas = await this.prisma.$transaction(async (tx) => {
      const created: {
        id_reserva: bigint;
        id_producto: bigint;
        cantidad: number;
        total: Prisma.Decimal;
        estado: reserva_estado;
        codigo_validacion: string;
      }[] = [];

      for (const item of cart.items) {
        const product = await tx.productos.findUnique({
          where: { id_producto: BigInt(item.id_producto) },
          include: { comercio: true },
        });

        if (!product || !product.estado) {
          throw new NotFoundException(
            `Producto ${item.id_producto} no encontrado`,
          );
        }

        const available = product.cantidad_disponible ?? 0;
        if (item.cantidad > available) {
          throw new BadRequestException(
            `Stock insuficiente para ${product.nombre}`,
          );
        }

        const codigo = this.generateValidationCode();

        const reserva = await tx.reservas.create({
          data: {
            id_usuario: BigInt(userId),
            id_producto: product.id_producto,
            cantidad: item.cantidad,
            total: new Prisma.Decimal(item.subtotal),
            codigo_validacion: codigo,
            estado: reserva_estado.pendiente,
            ventana_retiro_inicio: ventanaRetiroInicio,
            ventana_retiro_fin: ventanaRetiroFin,
          },
        });

        await tx.productos.update({
          where: { id_producto: product.id_producto },
          data: {
            cantidad_disponible: available - item.cantidad,
          },
        });


        created.push({
          id_reserva: reserva.id_reserva,
          id_producto: reserva.id_producto,
          cantidad: reserva.cantidad,
          total: reserva.total,
          estado: reserva.estado,
          codigo_validacion: reserva.codigo_validacion,
        });
      }

      return created;
    });

    await this.clearCart(userId);

    const totalGeneral = reservas.reduce(
      (sum, r) => sum + Number(r.total),
      0,
    );

    return { reservas, totalGeneral };
  }
}
