// frontend/components/historial/HistorialHeader.tsx
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";

// TIPOGRAFÍA
import TBold from "../common/TBold";

const RED = "#d11212ff";

interface Props {
  title: string;
}

export default function HistorialHeader({ title }: Props) {
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
      {/* línea principal */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 16,
          paddingVertical: 14,
          gap: 10,
        }}
      >
        {/* back */}
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

        {/* icono + título */}
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
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
            <Ionicons name="bag-check-outline" size={16} color={RED} />
          </View>

          <TBold style={{ color: "#fff", fontSize: 18 }}>
            {title}
          </TBold>
        </View>
      </View>
    </View>
  );
}
