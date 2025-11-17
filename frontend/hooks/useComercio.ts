import { useCallback, useEffect, useState } from "react";
import { getComerciosByCategoria } from "@/src/api/negocio";
import type { Comercio } from "@/src/api/negocio";

export function useComerciosByCategoria(categoria: string) {
  const [comercios, setComercios] = useState<Comercio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const list = await getComerciosByCategoria(categoria);
      setComercios(list);
    } catch (err: any) {
      console.log("❌ Error cargando comercios:", err);
      setError(err?.message ?? "Error al cargar la categoría");
    } finally {
      setLoading(false);
    }
  }, [categoria]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { comercios, loading, error };
}
