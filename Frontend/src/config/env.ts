import { Platform } from 'react-native';

// For testing Expo Go with your Mac IP
export const BASE_URL =
  Platform.OS === 'web'
    ? 'http://localhost:3000'
    : 'http://192.168.100.16:3000'
