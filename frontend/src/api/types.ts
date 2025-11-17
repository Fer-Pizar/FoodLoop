export type ID = string | number;

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

export interface Producto {
  id_producto: number;
  id_comercio: number;
  nombre: string;
  descripcion: string;
  precio: number | null;
  imagen_url?: string | null;
}

export type UpdateComercioDTO = {
  nombreNegocio?: string;
  telefono?: string | null;
  direccion?: string | null;
};
