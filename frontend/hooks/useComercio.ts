// hooks/useComercio.ts
import { useCallback, useEffect, useState } from "react";
import { negocioApi, getComerciosByCategoria } from "../src/api/negocio";
import type { Comercio } from "../src/api/types";

/**
 * Hook para obtener y actualizar los datos del comercio
 * asociado al usuario autenticado (rol: comercio).
 *
 * 👉 Usado en:
 * - app/(tabs-negocio)/Negocio/PerfilNegocioHome.tsx
 * - app/(tabs-negocio)/Negocio/InformacionPersonal.tsx
 * - app/(tabs-negocio)/Negocio/MisDatosPersonales.tsx
 * - app/(tabs-negocio)/Negocio/ReglasDescuento.tsx
 */
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

/**
 * Hook para listar comercios por categoría (vista consumidor).
 *
 * 👉 Usado donde antes tenías sólo useComerciosByCategoria.
 */
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

  // devuelvo también refetch por comodidad
  return { comercios, loading, error, refetch: fetchData };
}