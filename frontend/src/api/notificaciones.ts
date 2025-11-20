import { api } from "./client";
import type { Notificacion } from "./types";

type NotificacionesListResponse = {
  success: boolean;
  notificaciones: Notificacion[];
};

export async function getMyNotifications() {
  const data  = await api.get<NotificacionesListResponse>(
    "/notificaciones/mias"
  );
  return data.notificaciones;
}
