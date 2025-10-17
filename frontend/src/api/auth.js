// frontend/src/api/auth.js
import { api } from "../lib/api";

export const registerUser = async (nombre, email, password, confirmPassword) => {
  try {
    const payload = {
      nombre: (nombre ?? "").trim(),
      email,
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
      "Error al registrarse";
    throw new Error(msg);
  }
};

/**
 * Login user
 */
export const loginUser = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", { email, password });
    return data;
  } catch (error) {
    const msg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Error al iniciar sesión";
    throw new Error(Array.isArray(msg) ? msg.join(", ") : msg);
  }
};

export const health = async () => {
  try {
    const { data } = await api.get("/health");
    return data; // { ok: true }
  } catch (error) {
    console.error("❌ Health check failed:", error?.message);
    return { ok: false, error: error?.message || "Health check failed" };
  }
};
