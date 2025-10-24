import AsyncStorage from "@react-native-async-storage/async-storage";
import { api } from "../lib/api";

const TOKEN_KEY = "foodloop_token";
const USER_KEY = "user";

const ME_ENDPOINT = "/auth/me";

type RawRole = string | null | undefined;
export type Role = "comercio" | "consumidor";

function normalizeRole(role: RawRole): Role | null {
  if (!role) return null;
  const r = role.toString().toLowerCase().trim();
  if (r === "consumidor") return "consumidor";
  if (r === "comercio" || r === "negocio") return "comercio"; 
  return null;
}

export async function saveSession(data: any) {
  const token = data?.access_token ?? data?.token ?? null;
  if (token) await AsyncStorage.setItem(TOKEN_KEY, token);
  if (data?.user) await AsyncStorage.setItem(USER_KEY, JSON.stringify(data.user));
}

export async function getToken() {
  return AsyncStorage.getItem(TOKEN_KEY);
}

export async function getStoredRole(): Promise<Role | null> {
  try {
    const raw = await AsyncStorage.getItem(USER_KEY);
    if (!raw) return null;
    const u = JSON.parse(raw);
    return normalizeRole(u?.role ?? u?.rol ?? "");
  } catch {
    return null;
  }
}

export async function logout() {
  await AsyncStorage.multiRemove([TOKEN_KEY, USER_KEY]);
}

export async function hardResetLocalSession() {
  await logout();
}

export async function verifySession(): Promise<{ user: any; role: Role } | null> {
  try {
    const { data } = await api.get(ME_ENDPOINT);
    const role = normalizeRole(data?.role ?? data?.rol ?? "");
    if (!role) return null;
    return { user: data, role };
  } catch {
    return null;
  }
}

export async function ensureFreshSession(): Promise<{ user: any; role: Role } | null> {
  const ok = await verifySession();
  if (ok) return ok;
  await logout(); 
  return null;
}
