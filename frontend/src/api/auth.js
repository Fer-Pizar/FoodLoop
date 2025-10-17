// frontend/src/api/auth.js
import { api } from "../lib/api";

// 🧍‍♀️ Registro de usuario (consumidor)
export const registerUser = async (nombre, email, password, confirmPassword) => {
  try {
    const payload = {
      nombre: (nombre ?? "").trim(),
      email: (email ?? "").trim().toLowerCase(),
      password,
      confirmPassword,
    };

    const { data } = await api.post("/auth/register", payload);
    return data;
  } catch (error) {
    const msg =
      (Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message.join(", ")
        : error.response?.data?.message) ||
      error.response?.data?.error ||
      error.message ||
      "Error al registrarse";
    throw new Error(msg);
  }
};

// 🔐 Login de usuario (consumidor o comercio)
export const loginUser = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", {
      email: (email ?? "").trim().toLowerCase(),
      password,
    });
    return data;
  } catch (error) {
    const msg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      error.message ||
      "Credenciales incorrectas";
    throw new Error(Array.isArray(msg) ? msg.join(", ") : msg);
  }
};

// 🏪 Registro de negocio
export const registerNegocio = async (payload) => {
  try {
    const body = {
      ...payload,
      nombre: (payload?.nombre ?? "").trim(),
      email: (payload?.email ?? "").trim().toLowerCase(),
    };

    const { data } = await api.post("/auth/register-negocio", body);
    return data;
  } catch (error) {
    const msg =
      (Array.isArray(error.response?.data?.message)
        ? error.response?.data?.message.join(", ")
        : error.response?.data?.message) ||
      error.response?.data?.error ||
      error.message ||
      "Error al registrar el negocio";
    throw new Error(msg);
  }
};

// ❤️ Health check del backend
export const health = async () => {
  try {
    const { data } = await api.get("/health");
    return data;
  } catch (error) {
    console.error("❌ Health check failed:", error?.message);
    return { ok: false, error: error?.message || "Health check failed" };
  }
};
