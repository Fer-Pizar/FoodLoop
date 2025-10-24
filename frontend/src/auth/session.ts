import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getStoredRole(): Promise<"comercio"|"consumidor"|null> {
  try {
    const raw = await AsyncStorage.getItem("user");
    if (!raw) return null;
    const u = JSON.parse(raw);
    const role = (u?.role ?? u?.rol ?? "").toString().toLowerCase();
    if (role === "comercio" || role === "consumidor") return role;
    return null;
  } catch {
    return null;
  }
}

export async function logout() {
  await AsyncStorage.multiRemove(["foodloop_token", "user"]);
}
