import AsyncStorage from "@react-native-async-storage/async-storage";

let AUTH_TOKEN: string | null = null;

export async function setAuthToken(t: string | null) {
  AUTH_TOKEN = t;
  if (t) {
    await AsyncStorage.setItem("foodloop_token", t);
    console.log("🔑 Token guardado y seteado en memoria");
  } else {
    await AsyncStorage.removeItem("foodloop_token");
  }
}

export async function initAuthToken() {
  const token = await AsyncStorage.getItem("foodloop_token");
  if (token) {
    AUTH_TOKEN = token;
    console.log("🔄 Token restaurado desde AsyncStorage");
  } else {
    console.log("⚠️ No se encontró token guardado");
  }
}

const BASE = (process.env.EXPO_PUBLIC_API_BASE ?? "").replace(/\/$/, "");

function authHeaders(): HeadersInit {
  return {
    ...(AUTH_TOKEN ? { Authorization: `Bearer ${AUTH_TOKEN}` } : {}),
    "ngrok-skip-browser-warning": "true",
  };
}

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

export const api = {
  get: <T>(path: string) =>
    fetch(`${BASE}${path}`, { headers: authHeaders() }).then(handle<T>),

  post: <T>(path: string, body: any) =>
    fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(body),
    }).then(handle<T>),

  patch: <T>(path: string, body: any) =>
    fetch(`${BASE}${path}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...authHeaders() },
      body: JSON.stringify(body),
    }).then(handle<T>),

  upload: <T>(path: string, form: FormData) =>
    fetch(`${BASE}${path}`, {
      method: "POST",
      headers: { ...authHeaders() },
      body: form,
    }).then(handle<T>),

  del: <T>(path: string) =>
    fetch(`${BASE}${path}`, {
      method: "DELETE",
      headers: authHeaders(),
    }).then(handle<T>),
};

export const setToken = setAuthToken;
export const initToken = initAuthToken;

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


export async function uploadMyAvatarFromUri(uri: string) {
  const filename = uri.split("/").pop() ?? "avatar.jpg";
  const ext = filename.split(".").pop()?.toLowerCase();
  const mime =
    ext === "png" ? "image/png" :
    ext === "webp" ? "image/webp" :
    "image/jpeg";

  const form = new FormData();
  form.append("file", { uri, name: filename, type: mime } as any);

  return api.upload<{ ok?: boolean; url?: string; usuario?: any; comercio?: any }>(
    "/negocio/me/avatar",
    form
  );
}

export async function deleteMyAvatar() {
  return api.del<{ ok?: boolean }>("/negocio/me/avatar");
}

export function toAbsoluteUrl(path?: string | null): string | undefined {
  if (!path) return undefined;

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  const base = (process.env.EXPO_PUBLIC_API_BASE ?? "").replace(/\/api\/?$/, "");
  let url = `${base}${path.startsWith("/") ? "" : "/"}${path}`;

  if (/ngrok/.test(url) && !/[?&]ngrok-skip-browser-warning=/.test(url)) {
    url += (url.includes("?") ? "&" : "?") + "ngrok-skip-browser-warning=true";
  }

  return url;
}
