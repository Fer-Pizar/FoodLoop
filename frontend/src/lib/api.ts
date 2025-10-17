import axios, { AxiosError } from "axios";
import { API_BASE } from "../config/env"; 

function trimSlash(s?: string | null) {
  return (s || "").replace(/\/+$/, "");
}

const expoBase = trimSlash(process.env.EXPO_PUBLIC_API_BASE);
const cfgBase = trimSlash(API_BASE);
const defaultBase = "http://localhost:3000/api";
const baseURL = expoBase || cfgBase || defaultBase;

if (!expoBase) {
  console.warn("[api] EXPO_PUBLIC_API_BASE not set. Using fallback:", baseURL);
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
  password: string
) {
  try {
    const res = await api.post("/auth/register", {
      nombre,
      email,
      password,
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

