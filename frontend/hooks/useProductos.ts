import { useEffect, useState } from "react";
import type { Producto } from "../src/api/types";

/**
 * Temporal: como el backend no tiene /negocio/me/productos,
 * devolvemos vacío y un mensaje amigable.
 */
export function useProductos() {
  const [items, setItems] = useState<Producto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string|null>("La API de productos del negocio aún no existe");

  useEffect(() => {
    setItems([]); // vacío
  }, []);

  return { items, loading, error, refetch: () => {} };
}

