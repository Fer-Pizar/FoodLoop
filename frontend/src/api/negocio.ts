import { api } from "./client";
import type { Comercio } from "./types";

export const negocioApi = {
  getMe: () => api.get<Comercio>("/negocio/me"),
  updateMe: (dto: Partial<Pick<Comercio, "nombreNegocio"|"telefono"|"direccion"|"categoria">>) =>
    api.patch<Comercio>("/negocio/me", dto),
  //  No definas getMisProductos() porque no hay ruta
};
