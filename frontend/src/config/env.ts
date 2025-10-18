import { Platform } from "react-native";

// 👇 This automatically picks the right URL
// 💻 On Web or Emulator → localhost
// 📱 On a real phone (mobile data or Wi-Fi) → use your ngrok URL
export const BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/api"
    : "https://fergie.ngrok-free.app/api"; 

// ✅ Example final URLs that will be used:
// - Web or simulator → http://localhost:3000/api
// - Real phone → https://fergie.ngrok-free.app/api

  export const API_BASE =
  process.env.EXPO_PUBLIC_API_BASE ||
  process.env.VITE_API_URL ||
  BASE_URL; 