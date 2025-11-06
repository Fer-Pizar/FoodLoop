import { getApiBaseUrl, getImageBaseUrl } from "../config/env";
import { getToken } from "../lib/token";

const BASE = getApiBaseUrl();

async function authHeaders() {
  const token = await getToken();
  return {
    Authorization: token ? `Bearer ${token}` : "",
  };
}

export type ConsumidorMe = {
  id: number | string;            
  nombre: string;
  email: string;
  foto_perfil: string | null;    
  role: string | null;
};

export async function getMe(): Promise<ConsumidorMe> {
  const res = await fetch(`${BASE}/consumidor/me`, {
    method: "GET",
    headers: { ...(await authHeaders()) },
  });
  if (!res.ok) throw new Error(`getMe failed: ${res.status}`);
  return res.json();
}

export async function updateMe(payload: { nombre?: string; email?: string }): Promise<ConsumidorMe> {
  const res = await fetch(`${BASE}/consumidor/me`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(await authHeaders()),
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error(`updateMe failed: ${res.status}`);
  return res.json();
}

export async function uploadAvatar(fileUri: string, filename = "avatar.jpg"): Promise<ConsumidorMe> {
  const fd = new FormData();

  (fd as any).append("avatar", {
    uri: fileUri,
    name: filename,
    type: "image/jpeg",
  });

  const res = await fetch(`${BASE}/consumidor/avatar`, {
    method: "PATCH",
    headers: {
      ...(await authHeaders()),
    } as any,
    body: fd as any,
  });
  if (!res.ok) throw new Error(`uploadAvatar failed: ${res.status}`);
  return res.json();
}

export async function deleteAvatar(): Promise<{ ok: boolean; foto_perfil: null }> {
  const res = await fetch(`${BASE}/consumidor/avatar`, {
    method: "DELETE",
    headers: { ...(await authHeaders()) },
  });
  if (!res.ok) throw new Error(`deleteAvatar failed: ${res.status}`);
  return res.json();
}

export function avatarUrl(relPath?: string | null) {
  if (!relPath) return null;
  const imgBase = getImageBaseUrl(); 
  return `${imgBase}/${relPath.replace(/^\/+/, "")}`;
}
