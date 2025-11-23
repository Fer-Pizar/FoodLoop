import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from "@/src/theme/ThemeProvider";
import ConsumidorFooter from "@/components/ConsumidorFooter";

export default function Categories() {
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");
  const { colors, isDark } = useTheme();

  const handleOpenCategory = (categoria: string) => {
    router.push({
      pathname: "/(tabs-consumidor)/Cafeterias",
      params: { categoria },
    } as any);
  };

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
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.row,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          shadowColor: isDark ? "transparent" : "#000",
        },
      ]}
    >
      <View style={[styles.iconWrap, { backgroundColor: colors.primary }]}>
        {icon}
      </View>
      <Text style={[styles.rowText, { color: colors.text }]}>{label}</Text>
      <Ionicons name="arrow-forward" size={22} color={colors.primary} style={{ marginLeft: "auto" }} />
    </TouchableOpacity>
  );

  return (
    <>
      {/* Main Content */}
      <SafeAreaView style={[styles.container, { backgroundColor: colors.bg }]}>
        {/* Header */}
        <View style={{ paddingHorizontal: 24, paddingTop: 8 }}>
          <Text style={[styles.h1, { color: colors.primary }]}>¡Bienvenido, {userName}!</Text>
          <Text style={[styles.p, { color: colors.subtext }]}>
            Estamos listos para servirte con un genuino deseo de hacer tu día mejor..{"\n"}
            ¿Qué vas a pedir hoy?
          </Text>
        </View>

        {/* Options */}
        <View style={{ gap: 18, paddingHorizontal: 16, marginTop: 14 }}>
          <Item
            icon={<MaterialCommunityIcons name="cupcake" size={28} color={colors.onPrimary} />}
            label="Pastelería"
            onPress={() => handleOpenCategory("Pastelería")}
          />
          <Item
            icon={<MaterialCommunityIcons name="coffee" size={28} color={colors.onPrimary} />}
            label="Cafetería"
            onPress={() => handleOpenCategory("Cafetería")}
          />
          <Item
            icon={<MaterialCommunityIcons name="shopping-outline" size={28} color={colors.onPrimary} />}
            label="Supermercado"
            onPress={() => handleOpenCategory("Supermercado")}
          />
          <Item
            icon={<MaterialCommunityIcons name="silverware-fork-knife" size={28} color={colors.onPrimary} />}
            label="Restaurante"
            onPress={() => handleOpenCategory("Restaurante")}
          />
        </View>

        {/* Bottom spacing so footer floats */}
        <View style={{ height: 90 }} />
      </SafeAreaView>

      {/* Shared Footer */}
      <ConsumidorFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },

  h1: {
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  p: { fontSize: 15, lineHeight: 22 },

  row: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 18,
    padding: 14,
    borderWidth: StyleSheet.hairlineWidth,
    shadowOpacity: 0.06,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 2,
  },
  iconWrap: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 16,
  },
  rowText: { fontSize: 20 },
});
