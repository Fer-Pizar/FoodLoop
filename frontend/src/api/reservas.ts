// src/api/reservas.ts
import { api } from "./client";

export const reservasApi = {
  getMine: () => api.get("/reservas/mias"),
  getById: (id: number) => api.get(`/reservas/${id}`),

  // 👇 NUEVO: validar código de retiro (negocio)
  validarCodigo: (codigo: string) =>
    api.post("/reservas/validar-codigo", { codigo }),

  // 👇 NUEVO: confirmar retiro
  confirmarRetiro: (codigo: string) =>
    api.post("/reservas/confirmar-retiro", { codigo }),

  // ⭐ NUEVO: CONFIRMAR RESERVA → pasa de pendiente → confirmada
  confirmarReserva: (id_reserva: number) =>
    api.post(`/reservas/confirmar/${id_reserva}`, {}),
};
