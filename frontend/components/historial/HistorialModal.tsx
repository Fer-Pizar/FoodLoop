// components/historial/HistorialModal.tsx
import React from "react";
import { View, Modal, TouchableOpacity } from "react-native";
import T from "../common/T";
import TBold from "../common/TBold";
import { reservasApi } from "../../src/api/reservas";

export default function HistorialModal({ visible, item, onClose, onConfirmed }: any) {
  if (!item) return null;

  async function confirmarReserva() {
    try {
      await reservasApi.confirmarReserva(item.id_reserva);
      onConfirmed();     // 👈 AVISAR AL PADRE
      onClose();         // cerrar modal
    } catch (e:any) {
      console.log(e);
    }
  }

  const isPendiente = item.estado === "pendiente";

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={{
        flex:1, justifyContent:"center",
        backgroundColor:"rgba(0,0,0,0.3)", padding:20
      }}>
        <View style={{ backgroundColor:"#fff", borderRadius:12, padding:16 }}>
          
          <TBold style={{ fontSize:16, marginBottom:10 }}>Detalles del pedido</TBold>

          <T>Código: {item.codigo}</T>
          <T>Fecha: {new Date(item.fecha_reserva).toLocaleString()}</T>

          <TBold style={{ marginTop:10 }}>Productos:</TBold>
          {item.productos.map((p:any,i:number)=>(
            <T key={i}>• {p.nombre} x {p.cantidad}</T>
          ))}

          <TBold style={{ marginTop:10 }}>Total: Bs/ {item.total}</TBold>

          {/* BOTÓN CONFIRMAR SOLO SI ESTÁ PENDIENTE */}
          {isPendiente && (
            <TouchableOpacity
              onPress={confirmarReserva}
              style={{
                backgroundColor: "orange",
                padding: 10,
                borderRadius: 8,
                marginTop: 16,
              }}
            >
              <T style={{ color:"#fff", textAlign:"center" }}>Confirmar</T>
            </TouchableOpacity>
          )}

          <TouchableOpacity
            onPress={onClose}
            style={{
              backgroundColor:"#d11212",
              padding:10,
              borderRadius:8,
              marginTop:10
            }}
          >
            <T style={{ color:"#fff", textAlign:"center" }}>Cerrar</T>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

