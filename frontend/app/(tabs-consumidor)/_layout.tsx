import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Stack, router } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { getStoredRole } from "@/src/auth/session";
import { ThemeProvider, useTheme } from "@/src/theme/ThemeProvider";
import ThemedView from "@/components/themed-view"; // default import

function ThemedConsumidorStack() {
  const { colors, isDark } = useTheme();

  return (
    // ✅ Wrapper gives every screen a themed bg without touching each file
    <ThemedView style={{ flex: 1, backgroundColor: colors.bg }}>
      <StatusBar style={isDark ? "light" : "dark"} />
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: "transparent" }, // don't fight the wrapper
        }}
      />
    </ThemedView>
  );
}

export default function ConsumidorTabsLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const role = await getStoredRole();
      if (role !== "consumidor") {
        router.replace(role === "comercio" ? "/(tabs-negocio)" : "/login");
        return;
      }
      setReady(true);
    })();
  }, []);

  // ⏳ Themed loader while we resolve role + theme
  if (!ready) {
    return (
      <ThemeProvider>
        <ThemedView
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StatusBar style="auto" />
          <ActivityIndicator />
        </ThemedView>
      </ThemeProvider>
    );
  }

  // ✅ Normal flow
  return (
    <ThemeProvider>
      <ThemedConsumidorStack />
    </ThemeProvider>
  );
}
