import { useCallback, useEffect, useState } from "react";
import { cartApi } from "@/src/api/cart";
import type { CartItem, CartResponse } from "@/src/api/types";

function normalizeCart(res: CartResponse | undefined | null) {
  if (!res) {
    return { items: [] as CartItem[], total: 0 };
  }
  const totalNumber =
    typeof res.total === "string" ? Number(res.total) : res.total ?? 0;

  return {
    items: res.items ?? [],
    total: Number.isNaN(totalNumber) ? 0 : totalNumber,
  };
}

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const applyResponse = (res: CartResponse) => {
    const normalized = normalizeCart(res);
    setItems(normalized.items);
    setTotal(normalized.total);
  };

  const fetchCart = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await cartApi.get();
      applyResponse(res);
    } catch (err: any) {
      console.log("❌ Error loading cart:", err);
      setError(err?.message ?? "Error loading cart");
      setItems([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  }, []);

  const add = useCallback(
    async (productId: number, quantity: number) => {
      setError(null);
      const res = await cartApi.add(productId, quantity);
      applyResponse(res);
      return res; 
    },
    []
  );

  const update = useCallback(
    async (productId: number, quantity: number) => {
      setError(null);
      const res = await cartApi.update(productId, quantity);
      applyResponse(res);
      return res;
    },
    []
  );

  const remove = useCallback(async (productId: number) => {
    setError(null);
    const res = await cartApi.remove(productId);
    applyResponse(res);
    return res;
  }, []);

  const clear = useCallback(async () => {
    setError(null);
    const res = await cartApi.clear();
    applyResponse(res);
    return res;
  }, []);

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  return {
    items,
    total,
    loading,
    error,
    count: items.length,
    refetch: fetchCart,
    add,
    update,
    remove,
    clear,
  };
}
