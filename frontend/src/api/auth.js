import axios from "axios";

const API_URL = import.meta.env?.VITE_API_URL || "http://localhost:3000/api";

export const registerUser = async (firstName, lastName, email, password) => {
  try {
    const response = await axios.post(
      `${API_URL}/auth/register`,
      { nombre: `${firstName} ${lastName}`.trim(), email, password },
      { headers: { "Content-Type": "application/json" } }
    );
    return response.data; 
  } catch (error) {

    const msg =
      error.response?.data?.message ||
      error.response?.data?.error ||
      "Error al registrarse";
    throw new Error(Array.isArray(msg) ? msg.join(", ") : msg);
  }
};
