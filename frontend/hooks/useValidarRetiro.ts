// hooks/useValidarRetiro.ts
import { useState } from "react";
import { reservasApi } from "../src/api/reservas";

export type EstadoValidacion =
  | "idle"
  | "valid"
  | "invalid"
  | "used"
  | "expired"
  | "confirmed";

export interface ReservaValidadaNegocio {
  id_reserva: number;
  codigo: string;
  estado: string;
  fecha_reserva: string | Date;
  total: number;
  cliente: { id: number; nombre: string };
  producto: { id_producto: number; nombre: string; imagen_url?: string | null };
}

export function useValidarRetiro() {
  const [estado, setEstado] = useState<EstadoValidacion>("idle");
  const [reserva, setReserva] = useState<ReservaValidadaNegocio | null>(null);
  const [mensaje, setMensaje] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const reset = () => {
    setEstado("idle");
    setReserva(null);
    setMensaje(null);
  };

  const validar = async (codigo: string) => {
    if (!codigo.trim()) return;
    setLoading(true);
    setMensaje(null);

    try {
      const res: any = await reservasApi.validarCodigo(codigo.trim());

      if (res.success) {
        setEstado("valid");
        setReserva(res.reserva as ReservaValidadaNegocio);
      } else {
        const reason = res.reason as string | undefined;
        if (reason === "used") setEstado("used");
        else if (reason === "expired") setEstado("expired");
        else setEstado("invalid");

        setMensaje(res.message ?? "Código inválido");
        setReserva(null);
      }
    } catch (e: any) {
      setEstado("invalid");
      setMensaje(e?.message ?? "Error al validar el código");
      setReserva(null);
    } finally {
      setLoading(false);
    }
  };

  const confirmar = async (codigo: string) => {
    if (!codigo.trim()) return;
    setLoading(true);

    try {
      const res: any = await reservasApi.confirmarRetiro(codigo.trim());

      if (res.success) {
        setEstado("confirmed");
        setReserva(res.reserva as ReservaValidadaNegocio);
        setMensaje(null);
      } else {
        setEstado("invalid");
        setMensaje(res.message ?? "No se pudo confirmar el retiro");
      }
    } catch (e: any) {
      setEstado("invalid");
      setMensaje(e?.message ?? "Error al confirmar el retiro");
    } finally {
      setLoading(false);
    }
  };

  return {
    estado,
    reserva,
    mensaje,
    loading,
    validar,
    confirmar,
    reset,
  };
}
