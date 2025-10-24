import { Stack } from "expo-router";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { SafeAreaProvider } from "react-native-safe-area-context"; 
import { StatusBar } from "expo-status-bar"; 

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Comfortaa_400Regular, Comfortaa_700Bold });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#d11212ff" />
        <Text style={{ marginTop: 10, fontSize: 16 }}>Cargando estilo...</Text>
      </View>
    );
  }

  // Aplica Comfortaa global a <Text> una sola vez (soporta style objeto/array)
  const T: any = Text;
  if (!T.__comfortaaApplied) {
    T.defaultProps = T.defaultProps || {};
    const prev = T.defaultProps.style;
    T.defaultProps.style = [
      ...(Array.isArray(prev) ? prev : [prev].filter(Boolean)),
      { fontFamily: "Comfortaa_400Regular" },
    ];
    T.__comfortaaApplied = true; // bandera para evitar re-aplicarlo en fast refresh
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "#fff" },
        }}
      >
        {/* Welcome */}
        <Stack.Screen name="index" options={{ headerShown: false }} />
        {/* Auth */}
        <Stack.Screen name="login" options={{ headerShown: false }} />
        <Stack.Screen name="Registro" options={{ headerShown: false }} />
        {/* Tabs (Consumidor) */}
        <Stack.Screen name="(tabs-consumidor)" options={{ headerShown: false }} />
        {/* Tabs (Negocio)  */}
        <Stack.Screen name="(tabs-negocio)" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaProvider>
  );
}


