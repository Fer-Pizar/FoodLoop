export type ID = string | number;

export type Usuario = {
  idUsuario: ID;
  nombre: string;
  email: string;
  fotoPerfil?: string | null;
  rol: "consumidor" | "comercio" | "admin";
};

export type Comercio = {
  idComercio: ID;
  idUsuario: ID;
  nombreNegocio: string;
  telefono?: string | null;
  direccion?: string | null;
  latitud?: number | null;
  longitud?: number | null;
  categoria?: string | null;
  fechaRegistro: string;
  estado: boolean;
  updatedAt: string;
  usuario?: Usuario;
};

export interface Producto {
  id_producto: number;
  id_comercio: number;
  nombre: string;
  descripcion: string | null;
  precio_base?: number | string | null;
  precio_actual?: number | string | null;
  precio?: number | string | null;
  imagen_url?: string | null;
  cantidad_disponible?: number | null;
  estado?: boolean;
  fecha_vencimiento?: string | null;
}

export type UpdateComercioDTO = {
  nombreNegocio?: string;
  telefono?: string | null;
  direccion?: string | null;
};

export type CartItem = {
  id_producto: number;
  nombre: string;
  precio_actual: number | string;
  cantidad: number;
  subtotal: number;
};

export type CartResponse = {
  success: boolean;
  message?: string;
  items: CartItem[];
  total: number | string;
};

export interface Reserva {
  id_reserva: number;
  id_producto: number;
  cantidad: number;
  total: number;
  estado: string;
  codigo_validacion: string;
}

export interface Notificacion {
  id_notificacion: number;
  id_usuario: number;
  titulo: string;
  mensaje: string;
  tipo: string;           // 'sistema' | 'oferta' | 'recordatorio' | 'precio'
  fecha_envio: string;    
  leido: boolean;
}
