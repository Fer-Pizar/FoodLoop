import { useCallback, useEffect, useState } from "react";
import { api } from "../src/api/client";

// 🔹 Tipo EXACTO de lo que devuelve backend
interface ProductoItem {
  id_producto: number;
  nombre: string;
  cantidad: number;
  precio: number;
}

export interface HistorialReserva {
  id_reserva: number;
  codigo: string;
  fecha_reserva: string;
  estado: string;               // pendiente | confirmada | entregada | cancelada
  total: number;
  cliente: {
    id: number;
    nombre: string;
  };
  productos: ProductoItem[];
}

interface ApiResponse {
  success: boolean;
  reservas: HistorialReserva[];
}

export function useHistorialNegocio() {
  const [items, setItems] = useState<HistorialReserva[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // ⭐ AQUÍ TIPAS la respuesta
      const res = await api.get<ApiResponse>("/reservas/historial/comercio");

      setItems(res.reservas ?? []);
    } catch (err: any) {
      setError(err?.message ?? "Error cargando historial");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { items, loading, error, refetch: fetchData };
}
