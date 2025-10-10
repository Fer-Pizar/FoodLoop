import axios, { AxiosError } from "axios";
import { BASE_URL } from "../config/env"; 

// Small helper: normalize baseURL (avoid double slashes)
function trimSlash(s?: string | null) {
  return (s || "").replace(/\/+$/, "");
}

// 1) Preferred: Expo public env (available at runtime in Expo)
const expoBase = trimSlash(process.env.EXPO_PUBLIC_API_BASE);

// 2) Fallback: your existing config value
const cfgBase = trimSlash(BASE_URL);


const defaultBase = trimSlash(
  // If running on Android emulator, you might prefer uncommenting next line:
  // Platform.OS === "android" ? "http://10.0.2.2:3000/api" :
  "http://localhost:3000/api"
);

const baseURL = expoBase || cfgBase || defaultBase;

if (!expoBase) {
  console.warn(
    "[api] EXPO_PUBLIC_API_BASE is not set. Using fallback:",
    baseURL
  );
}

export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});


export async function getHealth() {
  const res = await api.get("/health");
  return res.data;
}

export async function registerUser(
  nombre: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  try {
    const res = await api.post("/auth/register", {
      nombre,
      email,
      password,
      confirmPassword,
    });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<any>;
    const msg =
      (Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message.join(", ")
        : error.response?.data?.message) ||
      error.response?.data?.error ||
      "Error al registrar el usuario";
    throw new Error(msg);
  }
}

export async function loginUser(email: string, password: string) {
  try {
    const res = await api.post("/auth/login", { email, password });
    return res.data;
  } catch (err) {
    const error = err as AxiosError<any>;
    const msg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Error al iniciar sesión";
    throw new Error(msg);
  }
}
