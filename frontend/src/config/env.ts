import { Platform } from "react-native";

// 👇 This will automatically pick the right URL
// 💻 If you’re running on Web or Emulator → localhost
// 📱 If you’re running on a real device → replace with your Mac IP
export const BASE_URL =
  Platform.OS === "web"
    ? "http://localhost:3000/api"
    : "http://192.168.100.16:3000/api"; 

// ✅ Example final URLs that will be used:
//  - Web or simulator → http://localhost:3000/api
//  - Physical device → http://192.168.100.16:3000/api
