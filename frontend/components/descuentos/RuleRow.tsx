// frontend/components/descuentos/RuleRow.tsx
import React from "react";
import { View } from "react-native";
import TBold from "../common/TBold";
import T from "../common/T";

export default function RuleRow({
  color,
  percent,
  subtitle,
  chipText,
  chipColor,
}: {
  color: string;
  percent: string;
  subtitle: string;
  chipText: string;
  chipColor: string;
}) {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: 12,
        padding: 12,
        marginBottom: 10,
        borderColor: "#F3F4F6",
        borderWidth: 1,
      }}
    >
      <View
        style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View
            style={{
              width: 26,
              height: 26,
              borderRadius: 13,
              backgroundColor: color,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <TBold style={{ color: "#fff" }}>%</TBold>
          </View>
          <View>
            <TBold>{percent}</TBold>
            <T style={{ opacity: 0.7 }}>{subtitle}</T>
          </View>
        </View>
        <View
          style={{
            backgroundColor: chipColor,
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 999,
          }}
        >
          <TBold style={{ color: "#fff", fontSize: 12 }}>{chipText}</TBold>
        </View>
      </View>
    </View>
  );
}
