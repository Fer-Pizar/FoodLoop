import React, { useEffect, useState } from "react";
import { Stack, router } from "expo-router";
import { ActivityIndicator, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { getStoredRole } from "@/src/auth/session";
import { ThemeProvider } from "@/src/theme/ThemeProvider";

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

  if (!ready) {
    return (
      <ThemeProvider>
        <StatusBar style="auto" />
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
          <ActivityIndicator />
        </View>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      {/* StatusBar follows theme */}
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
}
