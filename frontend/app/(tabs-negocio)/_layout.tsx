// app/(tabs-negocio)/_layout.tsx
import { Slot, router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { getStoredRole } from "@/src/auth/session";
import NegocioFooter from "@/components/negocio/NegocioFooter";

const RED = "#D82A2A";

export default function NegocioLayout() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    (async () => {
      const role = await getStoredRole();
      if (role !== "comercio") {
        router.replace(
          role === "consumidor"
            ? "/(tabs-consumidor)/Consumidor/Perfil"
            : "/login"
        );
        return;
      }
      setReady(true);
    })();
  }, []);

  if (!ready) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={RED} />
      </View>
    );
  }

  return (
    <>
      <Slot />
      <NegocioFooter />
    </>
  );
}


