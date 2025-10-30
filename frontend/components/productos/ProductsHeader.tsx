import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const RED = "#d11212ff";

export default function ProductsHeader({
  title,
  subtitle,
  count,
  onNew,
}: {
  title: string;
  subtitle: string;
  count: number;
  onNew: () => void;
}) {
  const { top } = useSafeAreaInsets(); // 🧠 espacio seguro (notch, status bar)

  return (
    <View
      style={{
        backgroundColor: RED,
        paddingTop: top + 8, // espacio arriba
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        marginBottom: 8,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 3,
        shadowOffset: { width: 0, height: 2 },
        elevation: 3,
      }}
    >
      {/* 🔙 Línea principal con botón atrás y título */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 14,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          {/* Botón atrás */}
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.8}
            style={{
              width: 32,
              height: 32,
              borderRadius: 16,
              backgroundColor: "#fff",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Ionicons name="chevron-back" size={20} color={RED} />
          </TouchableOpacity>

          {/* Icono bolsa + título */}
          <View
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
          >
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor: "#fff",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="bag-handle-outline" size={16} color={RED} />
            </View>
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {title}
            </Text>
          </View>
        </View>

        {/* Botón + Nuevo */}
        <TouchableOpacity
          onPress={onNew}
          style={{
            backgroundColor: "#fff",
            paddingVertical: 6,
            paddingHorizontal: 10,
            borderRadius: 10,
          }}
        >
          <Text style={{ color: RED, fontWeight: "700" }}>+ Nuevo</Text>
        </TouchableOpacity>
      </View>

      {/* 📦 Subtítulo y contador */}
      <View
        style={{
          paddingHorizontal: 16,
          paddingBottom: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "700", color: "#fff" }}>
          {subtitle}
        </Text>
        <Text style={{ color: "#fff", opacity: 0.9 }}>
          {count} productos
        </Text>
      </View>
    </View>
  );
}
