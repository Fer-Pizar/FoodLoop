import { Stack } from "expo-router";
import React from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { ActionSheetProvider } from "@expo/react-native-action-sheet";

import { ThemeProvider, useTheme } from "@/src/theme/ThemeProvider";

function AppShell() {
  // ✅ read theme here (inside provider)
  const { isDark, colors } = useTheme();

  return (
    <>
      {/* Follow theme automatically */}
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          // ❌ Do NOT force "#fff" here
          // contentStyle: { backgroundColor: "#fff" },
          // ✅ Let screens show through; if you want a baseline, use transparent
          contentStyle: { backgroundColor: "transparent" },
        }}
      />
    </>
  );
}

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

  // Global font injection (your code kept)
  const T: any = Text;
  if (!T.__comfortaaApplied) {
    T.defaultProps = T.defaultProps || {};
    const prev = T.defaultProps.style;
    T.defaultProps.style = [
      ...(Array.isArray(prev) ? prev : [prev].filter(Boolean)),
      { fontFamily: "Comfortaa_400Regular" },
    ];
    T.__comfortaaApplied = true;
  }

  return (
    <ThemeProvider>
      <ActionSheetProvider>
        <SafeAreaProvider>
          {/* ✅ AppShell reads theme and configures StatusBar/Stack */}
          <AppShell />
        </SafeAreaProvider>
      </ActionSheetProvider>
    </ThemeProvider>
  );
}
