import { Platform } from "react-native";

export const BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/api"
    : "https://fergie.ngrok-free.app/api";

const rawApi =
  process.env.EXPO_PUBLIC_API_BASE_URL ||
  process.env.EXPO_PUBLIC_API_BASE ||
  process.env.VITE_API_URL ||
  BASE_URL ||
  "http://localhost:3000/api"; 

function normalizeApi(url: string) {
  const u = url.trim().replace(/\/+$/, "");
  return /\/api$/.test(u) ? u : `${u}/api`;
}

export function getApiBaseUrl(): string {
  return normalizeApi(rawApi);
}

export function getImageBaseUrl(): string {
  const api = getApiBaseUrl();
  return api.replace(/\/api\/?$/, "");
}

export const API_BASE = getApiBaseUrl();
