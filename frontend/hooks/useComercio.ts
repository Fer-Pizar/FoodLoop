// frontend/src/hooks/useComercio.ts
import { useCallback, useEffect, useState } from "react";
import { negocioApi } from "../src/api/negocio";
import type { Comercio } from "../src/api/types";

export function useComercioMe() {
  const [data, setData] = useState<Comercio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const d = await negocioApi.getMe();
      setData(d);
    } catch (e: any) {
      setError(e?.message ?? "Error al cargar");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const update = async (dto: Partial<Comercio>) => {
    const updated = await negocioApi.updateMe({
      nombreNegocio: dto.nombreNegocio,
      telefono: dto.telefono,
      direccion: dto.direccion,
    });
    setData(updated);
  };

  const refetch = fetchData;
  const setLocal = (patch: Partial<Comercio>) =>
    setData((prev) => (prev ? { ...prev, ...patch } : prev));

  return { data, loading, error, update, refetch, setLocal };
}
