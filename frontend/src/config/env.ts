import Constants from "expo-constants";

export const API_BASE =
  Constants.expoConfig?.extra?.BACKEND_URL || "http://localhost:3000/api";

