import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// === Brand palette ===
const RED = "#D82A2A";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const GRAY_TEXT = "#b5b5b5";

export default function Categories() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");

  // 🧠 Cargar el nombre del usuario desde AsyncStorage
  useEffect(() => {
    const loadUser = async () => {
      try {
        const json = await AsyncStorage.getItem("user");
        if (json) {
          const userData = JSON.parse(json);
          setUserName(userData?.nombre || "Usuario");
        }
      } catch (error) {
        console.error("Error al cargar usuario:", error);
      }
    };
    loadUser();
  }, []);

  const Item = ({
    icon,
    label,
    onPress,
  }: {
    icon: React.ReactNode;
    label: string;
    onPress?: () => void;
  }) => (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress} style={styles.row}>
      <View style={styles.iconWrap}>{icon}</View>
      <Text style={styles.rowText}>{label}</Text>
      <Ionicons name="arrow-forward" size={22} color={RED} style={{ marginLeft: "auto" }} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={{ paddingHorizontal: 24, paddingTop: 8 }}>
        <Text style={styles.h1}>¡Bienvenido, {userName}!</Text>
        <Text style={styles.p}>
          Estamos listos para servirte con un genuino deseo de hacer tu día mejor..{"\n"}
          ¿Qué vas a pedir hoy?
        </Text>
      </View>

      {/* Options */}
      <View style={{ gap: 18, paddingHorizontal: 16, marginTop: 14 }}>
        <Item
          icon={<MaterialCommunityIcons name="cupcake" size={28} color={WHITE} />}
          label="Pastelería"
          onPress={() => {}}
        />
        <Item
          icon={<MaterialCommunityIcons name="coffee" size={28} color={WHITE} />}
          label="Cafetería"
          onPress={() => router.push("/(tabs-consumidor)/Cafeterias" as any)}
        />
        <Item
          icon={<MaterialCommunityIcons name="shopping-outline" size={28} color={WHITE} />}
          label="Supermercado"
          onPress={() => {}}
        />
        <Item
          icon={<MaterialCommunityIcons name="silverware-fork-knife" size={28} color={WHITE} />}
          label="Restaurante"
          onPress={() => {}}
        />
      </View>

      {/* Bottom spacing to avoid home pill overlap */}
      <View style={{ height: 90 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: LIGHT },
  h1: {
    fontSize: 28,
    fontWeight: "700",
    color: RED,
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  p: { fontSize: 15, color: "#3a3a3a", lineHeight: 22 },
  row: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eeeef0",
    borderRadius: 18,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  iconWrap: {
    width: 64,
    height: 64,
    backgroundColor: RED,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  rowText: { fontSize: 20, color: "#222" },
});
