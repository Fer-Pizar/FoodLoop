import { useEffect, useState } from "react";
import { api } from "../src/api/client";
import { Reserva } from "../src/api/types";

export function useReservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      const res = await api.get<{ reservas: Reserva[] }>("/reservas/mias");
      setReservas(res.reservas || []);
    } catch (err) {
      console.error("Error loading reservas:", err);
      setReservas([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  return { reservas, loading };
}
