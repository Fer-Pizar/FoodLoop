import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList,} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter, useLocalSearchParams } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useTheme } from "@/src/theme/ThemeProvider";
import { useComerciosByCategoria } from "@/hooks/useComercio";

const RED = "#D82A2A";

export default function CafeteriasList() {
  const router = useRouter();
  const { colors } = useTheme();

  const { categoria } = useLocalSearchParams<{ categoria?: string }>();
  const categoriaFinal = (categoria as string) || "Cafetería";

  const { comercios, loading, error } =
    useComerciosByCategoria(categoriaFinal);

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
        {/* Header */}
        <View style={[styles.header, { backgroundColor: "transparent" }]}>
          
          {/* ⬅️ FIXED BACK BUTTON */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs-consumidor)/Categories")}
          >
            <Ionicons name="arrow-back" size={24} color={RED} />
          </TouchableOpacity>

          <Text style={[styles.title, { color: colors.text }]}>
            {categoriaFinal}
          </Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={{ padding: 16, gap: 12, flex: 1 }}>
          {loading && <ActivityIndicator style={{ marginTop: 8 }} />}

          {error && (
            <Text style={{ marginTop: 8, color: "red" }}>
              Oops, could not load {categoriaFinal}
            </Text>
          )}

          {!loading && !error && (
            <FlatList
              data={comercios}
              keyExtractor={(item) => String(item.idComercio)}
              ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={[
                    styles.item,
                    {
                      backgroundColor: colors.card,
                      borderColor: colors.border,
                      borderWidth: StyleSheet.hairlineWidth,
                    },
                  ]}
                  activeOpacity={0.9}
                  onPress={() =>
                    router.push({
                      pathname:
                        "/(tabs-consumidor)/Consumidor/productos/[id]",
                      params: {
                        id: String(item.idComercio),
                        nombre: item.nombreNegocio,
                        categoria: categoriaFinal,
                      },
                    })
                  }
                >
                  <Text style={[styles.itemText, { color: colors.text }]}>
                    {item.nombreNegocio}
                  </Text>
                </TouchableOpacity>
              )}
            />
          )}

          {!loading && !error && comercios.length === 0 && (
            <Text style={{ marginTop: 8, color: colors.subtext }}>
              No hay comercios en esta categoría todavía...
            </Text>
          )}
        </View>

        <View style={{ height: 90 }} />
      </SafeAreaView>

      <ConsumidorFooter />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
  },
  item: {
    padding: 16,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: {
    fontSize: 18,
    flex: 1,
  },
});
