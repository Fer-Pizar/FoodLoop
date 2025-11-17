import { api } from "./client";
import type { Comercio } from "./types";
import { Platform } from "react-native";

export type { Comercio } from "./types";

export const negocioApi = {
  getMe: () => api.get<Comercio>("/negocio/me"),

  updateMe: (dto: Partial<
    Pick<Comercio, "nombreNegocio" | "telefono" | "direccion" | "categoria">
  >) => api.patch<Comercio>("/negocio/me", dto),

  uploadAvatar: async (uri: string) => {
    const filename = uri.split("/").pop() || "avatar.jpg";
    const ext = filename.split(".").pop()?.toLowerCase();
    const mime =
      ext === "png"
        ? "image/png"
        : ext === "webp"
        ? "image/webp"
        : "image/jpeg";

    const form = new FormData();

    if (Platform.OS === "web") {
      const resp = await fetch(uri);
      const blob = await resp.blob();
      form.append("avatar", blob, filename);
    } else {
      form.append("avatar", { uri, name: filename, type: mime } as any);
    }

    return api.upload<{ ok: boolean; url: string }>(
      "/negocio/me/avatar",
      form
    );
  },

  deleteAvatar: async () => api.del<{ ok: boolean }>("/negocio/me/avatar"),
};

export async function getComerciosByCategoria(
  categoria: string
): Promise<Comercio[]> {
  const res = await api.get<{
    ok: boolean;
    categoria: string;
    comercios: Comercio[];
  }>(
    `/products/comercios/by-category?categoria=${encodeURIComponent(
      categoria
    )}`
  );

  return res.comercios;
}
