// components/negocio/NegocioFooter.tsx 
import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RED = "#D82A2A";
const WHITE = "#FFFFFF";

export default function NegocioFooter() {
  const router = useRouter();

  const goValidar = () => router.replace("/(tabs-negocio)/Negocio/ValidarRetiro");
  const goProductos = () => router.replace("/(tabs-negocio)/Negocio/MisProductos");
  const goHome = () => router.replace("/(tabs-negocio)/Negocio/PerfilNegocioHome");
  const goVentas = () => router.replace("/(tabs-negocio)/Negocio/HistorialVentas");
  const goPerfil = () => router.replace("/(tabs-negocio)/Negocio/InformacionPersonal");

  return (
    <View style={styles.wrap}>
      {/* VALIDAR RETIRO */}
      <TouchableOpacity onPress={goValidar} activeOpacity={0.7}>
        <Ionicons name="qr-code-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      <View style={styles.sep} />

      {/* PRODUCTOS */}
      <TouchableOpacity onPress={goProductos} activeOpacity={0.7}>
        <Ionicons name="cube-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      {/* HOME CENTRAL */}
      <TouchableOpacity onPress={goHome} style={styles.homePill} activeOpacity={0.85}>
        <Ionicons name="home" size={26} color={WHITE} />
      </TouchableOpacity>

      {/* VENTAS */}
      <TouchableOpacity onPress={goVentas} activeOpacity={0.7}>
        <Ionicons name="receipt-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      <View style={styles.sep} />

      {/* PERFIL */}
      <TouchableOpacity onPress={goPerfil} activeOpacity={0.7}>
        <Ionicons name="person-circle-outline" size={22} color={WHITE} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: RED,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 18,
  },
  sep: {
    width: 1,
    height: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  homePill: {
    backgroundColor: RED,
    width: 68,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: WHITE,
  },
});
