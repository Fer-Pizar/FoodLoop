import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import T from "../common/T";
import TBold from "../common/TBold";

const GRAY_ICON = "#444"; // 👈 nuevo color neutro

export function Atajos({
  onInfo,
  onProductos,
  onHistorial,
}: {
  onInfo: () => void;
  onProductos: () => void;
  onHistorial: () => void;
}) {
  const Btn = ({ icon, label, onPress }: any) => (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: 90,
        gap: 6,
      }}
    >
      <View
        style={{
          width: 60,
          height: 60,
          borderRadius: 30,
          backgroundColor: "#f4f4f4",
          alignItems: "center",
          justifyContent: "center",
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 2,
          shadowOffset: { width: 0, height: 1 },
          elevation: 2,
        }}
      >
        <Ionicons name={icon} size={26} color={GRAY_ICON} />
      </View>
      <T style={{ textAlign: "center", fontSize: 12 }}>{label}</T>
    </TouchableOpacity>
  );

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingVertical: 16,
        backgroundColor: "#fff",
      }}
    >
      <Btn icon="person-outline" label={"Información\nPersonal"} onPress={onInfo} />
      <Btn icon="cart-outline" label={"Mis\nProductos"} onPress={onProductos} />
      <Btn icon="lock-closed-outline" label={"Historial\nVentas"} onPress={onHistorial} />
    </View>
  );
}

