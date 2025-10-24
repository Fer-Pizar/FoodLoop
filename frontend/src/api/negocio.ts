// frontend/src/api/negocio.ts
import { api } from "./client";
import type { Comercio } from "./types";
import { Platform } from "react-native";

export const negocioApi = {
  getMe: () => api.get<Comercio>("/negocio/me"),
  updateMe: (dto: Partial<Pick<Comercio,"nombreNegocio"|"telefono"|"direccion"|"categoria">>) =>
    api.patch<Comercio>("/negocio/me", dto),

  // 📸 Subir avatar (campo debe llamarse 'avatar' para el backend)
  uploadAvatar: async (uri: string) => {
    const filename = uri.split("/").pop() || "avatar.jpg";
    const ext = filename.split(".").pop()?.toLowerCase();
    const mime =
      ext === "png" ? "image/png" :
      ext === "webp" ? "image/webp" :
      "image/jpeg";

    const form = new FormData();

    if (Platform.OS === "web") {
      // En web hay que convertir el URI a Blob
      const resp = await fetch(uri);
      const blob = await resp.blob();
      form.append("avatar", blob, filename);
    } else {
      // En nativo vale el objeto con { uri, name, type }
      form.append("avatar", { uri, name: filename, type: mime } as any);
    }

    return api.upload<{ ok: boolean; url: string }>("/negocio/me/avatar", form);
  },

  // 🗑️ Eliminar avatar
  deleteAvatar: async () => api.del<{ ok: boolean }>("/negocio/me/avatar"),
};


