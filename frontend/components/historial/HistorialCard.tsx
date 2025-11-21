import React from "react";
import { View, TouchableOpacity } from "react-native";
import T from "../common/T";
import TBold from "../common/TBold";

const COLORS: any = {
  pendiente: "#E5C100",
  confirmada: "#FF8A00",
  entregada: "#28B463",
  cancelada: "#D11212",
};

export default function HistorialCard({ item, onOpen }: any) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 14,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.05,
        shadowRadius: 3,
      }}
    >
      <TBold style={{ fontSize: 14 }}>{item.codigo}</TBold>

      <T style={{ opacity: 0.6, marginBottom: 4 }}>
        {new Date(item.fecha_reserva).toLocaleDateString()}
      </T>

      <T style={{ color: COLORS[item.estado], fontWeight: "bold" }}>
        {item.estado.toUpperCase()}
      </T>

      <TBold style={{ marginTop: 6, color: "#000" }}>
        Bs/ {item.total}
      </TBold>

      <TouchableOpacity
        onPress={onOpen}
        style={{
          marginTop: 10,
          paddingVertical: 8,
          backgroundColor: "#f6f6f6",
          borderRadius: 6,
        }}
      >
        <T style={{ textAlign: "center", color: "#444" }}>Ver detalles</T>
      </TouchableOpacity>
    </View>
  );
}
