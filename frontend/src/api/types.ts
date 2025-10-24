export type ID = string | number; // por si Prisma BigInt viene como string

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

export type Usuario = {
  idUsuario: ID;
  nombre: string;
  email: string;
  fotoPerfil?: string | null;
  rol: "consumidor" | "comercio" | "admin";
};

export type Producto = {
  id_producto: ID;
  id_comercio: ID;
  id_categoria: ID;
  nombre: string;
  descripcion?: string | null;
  precio_base: number;     // backend serializa Decimal → number
  precio_actual?: number | null;
  fecha_vencimiento?: string | null;
  cantidad_disponible?: number | null;
  imagen_url?: string | null;
  fecha_publicacion: string;
  estado: boolean;
  updated_at: string;
};

export type UpdateComercioDTO = {
  nombreNegocio?: string;
  telefono?: string | null;
  direccion?: string | null;
};
