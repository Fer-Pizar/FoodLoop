// hooks/useMisProductos.ts
import { useCallback, useEffect, useState } from "react";
import { productosApi, type Producto } from "../src/api/producto";

export function useMisProductos() {
  const [items, setItems] = useState<Producto[]>([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string|null>(null);

  const fetchPage = useCallback(async (p = 1) => {
    setLoading(true); setError(null);
    try {
      const res = await productosApi.list({ page: p, limit: 10, estado: 'activo' });
      setItems(res.data); setPage(res.page); setTotal(res.total);
    } catch (e: any) { setError(e?.message ?? 'Error'); }
    finally { setLoading(false); }
  }, []);

  useEffect(() => { fetchPage(1); }, [fetchPage]);

  const refetch = () => fetchPage(page);
  const create = async (dto: any) => { const p = await productosApi.create(dto); setItems(v => [p, ...v]); return p; };
  const update = async (id: any, dto: any) => { const p = await productosApi.update(id, dto); setItems(v => v.map(x => x.id_producto===p.id_producto? p : x)); return p; };
  const remove = async (id: any) => { await productosApi.remove(id); setItems(v => v.filter(x => x.id_producto!==id)); };

  return { items, page, total, loading, error, refetch, fetchPage, create, update, remove };
}

