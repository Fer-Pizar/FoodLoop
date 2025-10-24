import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import T from "../common/T";
import TBold from "../common/TBold"; 


const RED = "#d11212ff";

export default function HeaderSimple({ title }: { title: string }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 14,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#eee",
        shadowColor: "#000",
        shadowOpacity: 0.03,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 1 },
        elevation: 1,
      }}
    >
      {/* Botón Atrás */}
      <TouchableOpacity
        onPress={() => router.back()}
        activeOpacity={0.8}
        style={{
          width: 36,
          height: 36,
          borderRadius: 18,
          backgroundColor: RED,
          alignItems: "center",
          justifyContent: "center",
          marginRight: 10,
        }}
      >
        <Ionicons name="chevron-back" size={20} color="#fff" />
      </TouchableOpacity>

      {/* Título */}
      <TBold
        style={{
          fontSize: 18,
          color: "#000",
        }}
      >
        {title}
      </TBold>
    </View>
  );
}

