import { api } from "./client";

export const reservasApi = {
  getMine: () => api.get("/reservas/mias"),
  getById: (id: number) => api.get(`/reservas/${id}`),
};
