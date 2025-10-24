import { Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getStoredRole } from "@/src/auth/session";

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
      <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
        <ActivityIndicator />
      </View>
    );
  }

  return <Stack screenOptions={{ headerShown:false }} />;
}

