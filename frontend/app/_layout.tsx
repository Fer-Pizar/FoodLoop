import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      {/* Welcome */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Auth */}
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />

      {/* Tabs (Home) */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}


