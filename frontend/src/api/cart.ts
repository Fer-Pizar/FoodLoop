import { api } from "./client";
import type { CartResponse } from "./types";

export const cartApi = {
  get: () => api.get<CartResponse>("/cart"),

  add: (productId: number, quantity: number) =>
    api.post<CartResponse>("/cart/add", { productId, quantity }),

  update: (productId: number, quantity: number) =>
    api.patch<CartResponse>(`/cart/item/${productId}`, { quantity }),

  remove: (productId: number) =>
    api.del<CartResponse>(`/cart/item/${productId}`),

  clear: () => api.del<CartResponse>("/cart/clear"),

  reserve: (ventanaRetiroInicio: string, ventanaRetiroFin: string) =>
    api.post<CartResponse>("/cart/reserve", {
      ventanaRetiroInicio,
      ventanaRetiroFin,
    }),
};
