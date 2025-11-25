import axios, { AxiosError } from "axios";
import { getApiBaseUrl } from "../config/env";

const baseURL = getApiBaseUrl();
console.log("🔥 API_BASE:", baseURL);

export const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// ----------------------------
// Funciones de utilidad
// ----------------------------

export async function getHealth() {
  const res = await api.get("/health");
  return res.data;
}

export async function registerUser(
  nombre: string,
  email: string,
  password: string
) {
  try {
    const res = await api.post("/auth/register", { nombre, email, password });
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
      error.message ||
      "Error al iniciar sesión";
    throw new Error(Array.isArray(msg) ? msg.join(", ") : msg);
  }
}

export async function registerNegocio(payload: {
  nombre: string;
  email: string;
  password: string;
  telefono?: string;
  direccion?: string;
  categoria?: string;
}) {
  try {
    const res = await api.post("/auth/register-negocio", payload);
    return res.data;
  } catch (err) {
    const error = err as AxiosError<any>;
    const msg =
      (Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message.join(", ")
        : error.response?.data?.message) ||
      error.response?.data?.error ||
      "Error al registrar el negocio";
    throw new Error(msg);
  }
}
