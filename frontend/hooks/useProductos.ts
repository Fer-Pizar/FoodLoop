import { useCallback, useEffect, useState } from "react";
import type { Producto } from "@/src/api/types";
import { getProductosByComercio } from "@/src/api/producto";

export function useProductos(idComercio: number | string) {
  const [items, setItems] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await getProductosByComercio(Number(idComercio));
      setItems(res.productos ?? []);
    } catch (err: any) {
      console.log("❌ Error cargando productos:", err);
      setError(err?.message ?? "Error cargando productos");
      setItems([]);
    } finally {
      setLoading(false);
    }
  }, [idComercio]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    productos: items,
    loading,
    error,
    refetch: fetchData,
  };
}
