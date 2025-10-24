import React, { useMemo } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter, Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RED = "#D82A2A";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";

const useCafeterias = () =>
  useMemo(
    () => [
      { id: 5, slug: "capresso", nombre: "Capresso" },
      { id: 6, slug: "starbucks", nombre: "Starbucks" },
    ],
    []
  );

export default function CafeteriasList() {
  const router = useRouter();
  const items = useCafeterias();

  const handlePress = (slug: string) => {
    if (slug.toLowerCase() === "starbucks") {
      router.push("/(tabs-consumidor)/Cafeterias/Starbucks" as Href); 
      return;
    }

    router.push({
      pathname: "/(tabs-consumidor)/Cafeterias/[slug]",
      params: { slug },
    } as Href);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color={RED} />
        </TouchableOpacity>
        <Text style={styles.title}>Cafeterías</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={{ padding: 16, gap: 12 }}>
        {items.map((c) => (
          <TouchableOpacity
            key={c.id}
            style={styles.item}
            onPress={() => handlePress(c.slug)}
          >
            <Text style={styles.itemText}>{c.nombre}</Text>
            <Ionicons name="chevron-forward" size={22} color={RED} />
          </TouchableOpacity>
        ))}
      </View>

      <View style={{ height: 90 }} />
    </SafeAreaView>
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
  title: { fontSize: 22, fontWeight: "700", color: "#222" },
  item: {
    padding: 16,
    backgroundColor: WHITE,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 5,
    elevation: 2,
  },
  itemText: { fontSize: 18, color: "#222", flex: 1 },
});
