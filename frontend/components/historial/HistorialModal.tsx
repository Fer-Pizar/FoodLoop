import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import T from "../common/T";
import TBold from "../common/TBold";

export default function HistorialModal({ visible, item, onClose }: any) {
  if (!item) return null;

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.3)",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <View
          style={{ backgroundColor: "#fff", borderRadius: 12, padding: 16 }}
        >
          <TBold style={{ fontSize: 16, marginBottom: 10 }}>
            Detalles del pedido
          </TBold>

          <T>Código: {item.codigo}</T>
          <T>Fecha: {new Date(item.fecha_reserva).toLocaleString()}</T>
          <TBold style={{ marginTop: 8 }}>Productos:</TBold>

          {item.productos.map((p: any, i: number) => (
            <T key={i}>
              • {p.nombre} x {p.cantidad}
            </T>
          ))}

          <TBold style={{ marginTop: 10 }}>
            Total: Bs/ {item.total}
          </TBold>

          <TouchableOpacity
            onPress={onClose}
            style={{
              marginTop: 16,
              backgroundColor: "#d11212",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <T style={{ color: "#fff", textAlign: "center" }}>Cerrar</T>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
