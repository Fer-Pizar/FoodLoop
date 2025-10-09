import axios from "axios";
import { BASE_URL } from "../config/env";

export const api = axios.create({
  baseURL: BASE_URL || "http://localhost:3000/api", 
  timeout: 10000,
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
    const res = await api.post("auth/register", {
      nombre,
      email,
      password,
      confirmPassword, 
    });
    return res.data; 
  } catch (error: any) {
    
    if (error.response?.data?.message) {
      throw new Error(
        Array.isArray(error.response.data.message)
          ? error.response.data.message.join(", ")
          : error.response.data.message
      );
    }
    throw new Error("Error al registrar el usuario");
  }
}
