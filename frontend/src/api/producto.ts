import { api } from "./client";
import type { Producto } from "./types";
export type { Producto };  

export const productosApi = {
  list: (
    params: {
      estado?: "activo" | "inactivo" | "todos";
      search?: string;
      page?: number;
      limit?: number;
      orden?: "fecha" | "stock" | "precio";
    } = {}
  ) =>
    api.get<{
      page: number;
      limit: number;
      total: number;
      data: Producto[];
    }>(
      `/negocio/productos?${new URLSearchParams(
        Object.entries(params).filter(([, v]) => v !== undefined) as any
      )}`
    ),

  stats: () =>
    api.get<{ activos: number; inactivos: number; porVencer: number }>(
      `/negocio/productos/stats`
    ),

  create: (dto: Partial<Producto> & { id_categoria: string }) =>
    api.post<Producto>("/negocio/productos", dto),

  update: (id: string | number, dto: Partial<Producto>) =>
    api.patch<Producto>(`/negocio/productos/${id}`, dto),

  remove: (id: string | number) =>
    api.del(`/negocio/productos/${id}`),

  uploadImage: (id: string | number, uri: string) => {
    const form = new FormData();
    form.append(
      "imagen",
      { uri, name: "producto.jpg", type: "image/jpeg" } as any
    );

    return api.upload<{ ok: boolean; url: string; producto: Producto }>(
      `/negocio/productos/${id}/imagen`,
      form
    );
  },

  deleteImage: (id: string | number) =>
    api.del<{ ok: boolean }>(`/negocio/productos/${id}/imagen`),

  byComercio: (idComercio: number | string) =>
    api.get<{ ok: boolean; productos: Producto[] }>(
      `/products/comercios/${idComercio}/productos`
    ),
};

export const getProductosByComercio = productosApi.byComercio;
