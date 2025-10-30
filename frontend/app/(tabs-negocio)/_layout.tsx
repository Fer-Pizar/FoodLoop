// app/(tabs-negocio)/_layout.tsx
import { Tabs, router } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getStoredRole } from "@/src/auth/session";
import T from "@/components/common/T";

const RED = "#d11212ff";

export default function NegocioTabsLayout() {
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
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={RED} />
      </View>
    );
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 64,
          borderTopColor: "#eee",
          backgroundColor: "#fff",
          paddingBottom: 8,
        },
        tabBarActiveTintColor: RED,
        tabBarInactiveTintColor: "#999",
      }}
    >
      {/* ❌ Ocultamos las rutas que no deben ser tabs */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="explore" options={{ href: null }} />

      {/* 🏪 Inicio / Panel del negocio */}
      <Tabs.Screen
        name="Negocio/PerfilNegocioHome"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="storefront-outline"
              size={size ?? 28}
              color={color}
            />
          ),
        }}
      />

      {/* 📦 Productos */}
      <Tabs.Screen
        name="Negocio/MisProductos"
        options={{
          title: "Productos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="cube-outline" size={size ?? 26} color={color} />
          ),
        }}
      />

      {/* 🧾 Ventas */}
      <Tabs.Screen
        name="Negocio/HistorialVentas"
        options={{
          title: "Ventas",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size ?? 26} color={color} />
          ),
        }}
      />

      {/* 👤 Perfil / Configuración del negocio */}
      <Tabs.Screen
        name="Negocio/PerfilNegocioConfig"
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              size={size ?? 26}
              color={color}
            />
          ),
        }}
      />

      {/* 🔒 Rutas internas que no deben verse en el tab bar */}
      <Tabs.Screen name="Negocio/InformacionPersonal" options={{ href: null }} />
      <Tabs.Screen name="Negocio/MisDatosPersonales" options={{ href: null }} />
      <Tabs.Screen name="Negocio/ReglasDescuento" options={{ href: null }} />
    </Tabs>
  );
}

