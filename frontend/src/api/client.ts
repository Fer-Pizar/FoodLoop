// frontend/src/api/client.ts
import AsyncStorage from "@react-native-async-storage/async-storage";

let AUTH_TOKEN: string | null = null;

// ✅ 1️⃣ Permite setear el token (desde login o recuperación)
export async function setAuthToken(t: string | null) {
  AUTH_TOKEN = t;
  if (t) {
    await AsyncStorage.setItem("foodloop_token", t);
    console.log("🔑 Token guardado y seteado en memoria");
  } else {
    await AsyncStorage.removeItem("foodloop_token");
  }
}

// ✅ 2️⃣ Carga el token al iniciar la app (para reusar sesiones)
export async function initAuthToken() {
  const token = await AsyncStorage.getItem("foodloop_token");
  if (token) {
    AUTH_TOKEN = token;
    console.log("🔄 Token restaurado desde AsyncStorage");
  } else {
    console.log("⚠️ No se encontró token guardado");
  }
}

// ✅ 3️⃣ URL base (sin slash al final)
const BASE = (process.env.EXPO_PUBLIC_API_BASE ?? "").replace(/\/$/, "");

// ✅ 4️⃣ Headers dinámicos con Authorization
function authHeaders(): HeadersInit {
  return {
    ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}),
    "ngrok-skip-browser-warning": "true", // evita el HTML de ngrok
  };
}

// ✅ 5️⃣ Manejo de respuestas del servidor
async function parseBody(res: Response) {
  const ct = res.headers.get("content-type") || "";
  if (ct.includes("application/json")) return res.json();
  return res.text();
}

async function handle<T>(res: Response): Promise<T> {
  const body = await parseBody(res);
  if (!res.ok) {
    const msg =
      typeof body === "string"
        ? `${res.status} ${res.statusText} – ${body.slice(0, 180)}`
        : body?.message ?? `${res.status} ${res.statusText}`;
    throw new Error(msg);
  }
  if (typeof body === "string") {
    console.warn("⚠️ Respuesta no JSON:", body.slice(0, 180));
    throw new Error("La API devolvió contenido no JSON");
  }
  return body as T;
}

// ✅ 6️⃣ Métodos disponibles
export const api = {
  get: <T>(path: string) =>
    fetch(`${BASE}${path}`, { headers: authHeaders() }).then(handle<T>),

  patch: <T>(path: string, body: any) =>
    fetch(`${BASE}${path}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(body),
    }).then(handle<T>),
};

export const setToken = setAuthToken;
export const initToken = initAuthToken;

// ✅ 7️⃣ Función para cerrar sesión (limpia token y storage)
export async function logout() {
  try {
    await AsyncStorage.multiRemove(["foodloop_token", "user"]);
    console.log("🚪 Sesión cerrada, token eliminado");
  } catch (e) {
    console.error("Error al cerrar sesión:", e);
  } finally {
    AUTH_TOKEN = null;
  }
}