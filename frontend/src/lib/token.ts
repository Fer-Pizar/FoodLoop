import AsyncStorage from "@react-native-async-storage/async-storage";
const KEY = "foodloop_token";
export const saveToken = (t: string) => AsyncStorage.setItem(KEY, t);
export const getToken  = () => AsyncStorage.getItem(KEY);
export const clearToken = () => AsyncStorage.removeItem(KEY);
