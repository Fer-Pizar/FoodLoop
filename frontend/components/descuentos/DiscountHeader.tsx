// frontend/components/descuentos/DiscountHeader.tsx
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import TBold from "../common/TBold";

const RED = "#d11212ff";

export default function DiscountHeader() {
  const { top } = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: top + 8,
        backgroundColor: RED,
        paddingHorizontal: 16,
        paddingBottom: 14,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.85}
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: "#FFFFFF",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Ionicons name="chevron-back" size={20} color={RED} />
      </TouchableOpacity>

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
          <Ionicons name="pricetags-outline" size={16} color={RED} />
        </View>
        <TBold style={{ color: "#fff", fontSize: 18 }}>Descuentos</TBold>
      </View>

      <View style={{ width: 36, height: 36 }} />
    </View>
  );
}
