import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

const RED = "#d11212ff";

export default function ValidarHeader() {
  const { top } = useSafeAreaInsets();

  return (
    <View
      style={{
        backgroundColor: RED,
        paddingTop: top + 8,
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
      {/* 🔙 Línea principal */}
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

          {/* Icono + título */}
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
              {/* Icono de "package" o "cube" porque se trata de retiros */}
              <Ionicons name="cube-outline" size={18} color={RED} />
            </View>

            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              Validar Retiro
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
