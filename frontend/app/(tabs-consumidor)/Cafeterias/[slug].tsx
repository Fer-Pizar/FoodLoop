import React, { useMemo } from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RED = "#D82A2A";
const GREEN = "#0c3b2e";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";

// --- Mini card UI (para el grid de productos) ---
const Card = ({ title, subtitle, price, oldPrice }: any) => (
  <View style={styles.card}>
    <View style={styles.badge}><Text style={styles.badgeText}>-20%</Text></View>
    <View style={{ height: 96, backgroundColor: "#e9ecef", borderRadius: 12 }} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSub}>{subtitle}</Text>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginTop: 8 }}>
      <Text style={styles.price}>Bs. {price}</Text>
      <Text style={styles.oldPrice}>Bs. {oldPrice}</Text>
      <View style={{ marginLeft: "auto" }}>
        <TouchableOpacity style={styles.addBtn}><Ionicons name="add" size={18} color={WHITE} /></TouchableOpacity>
      </View>
    </View>
  </View>
);

export default function CafeteriaDetail() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const router = useRouter();

  const isStarbucks = (slug ?? "").toLowerCase() === "starbucks";

  const productos = useMemo(
    () => [
      { id: "1", title: "Gingerbread Latte", subtitle: "Bebida de temporada", price: 25, oldPrice: 27 },
      { id: "2", title: "Hot Cocoa", subtitle: "Para días lluviosos", price: 21, oldPrice: 23 },
      { id: "3", title: "Capuccino", subtitle: "Con café amazónico", price: 16, oldPrice: 20 },
      { id: "4", title: "Frapuccino", subtitle: "Sabor navideño", price: 15, oldPrice: 23 },
    ],
    []
  );

  if (!isStarbucks) {
    // Placeholder para Capresso u otros mientras conectamos backend real
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT }}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={RED} />
          </TouchableOpacity>
          <Text style={styles.topTitle}>{slug}</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 16 }}>
            Aquí mostraremos el menú de <Text style={{ fontWeight: "700" }}>{slug}</Text>.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // Starbucks → “Coffee Time!” mock view
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: LIGHT }}>
      <View style={styles.greenHeader}>
        <View style={styles.greenTopRow}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={WHITE} />
          </TouchableOpacity>
          <Ionicons name="cart-outline" size={24} color={WHITE} />
        </View>
        <Text style={styles.hero}>Coffee Time!</Text>
        <View style={styles.searchBar}>
          <Ionicons name="search" size={18} color="#666" />
          <Text style={styles.searchText}>Bebidas</Text>
        </View>
        <View style={styles.pillsRow}>
          {["Hot Coffee", "Iced Coffee", "Matcha"].map((p) => (
            <View key={p} style={styles.pill}><Text style={styles.pillText}>{p}</Text></View>
          ))}
        </View>
      </View>

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        <View style={styles.sectionRow}>
          <Text style={styles.sectionTitle}>Postres del día</Text>
          <TouchableOpacity><Text style={styles.link}>ver todo</Text></TouchableOpacity>
        </View>

        {/* Grid 2 cols */}
        <View style={styles.grid}>
          {productos.map((it) => (
            <Card key={it.id} {...it} />
          ))}
        </View>

        <View style={{ height: 110 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  topBar: {
    paddingHorizontal: 16, paddingVertical: 12,
    flexDirection: "row", alignItems: "center", justifyContent: "space-between",
  },
  topTitle: { fontSize: 18, fontWeight: "700", textTransform: "capitalize" },

  greenHeader: { backgroundColor: GREEN, paddingHorizontal: 16, paddingTop: 10, paddingBottom: 18 },
  greenTopRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  hero: { color: WHITE, fontSize: 32, fontWeight: "800", marginTop: 8, marginBottom: 12 },
  searchBar: { backgroundColor: WHITE, borderRadius: 14, padding: 12, flexDirection: "row", alignItems: "center", gap: 8 },
  searchText: { color: "#666" },
  pillsRow: { flexDirection: "row", gap: 10, marginTop: 12 },
  pill: { backgroundColor: "#e7efe9", paddingVertical: 6, paddingHorizontal: 12, borderRadius: 20 },
  pillText: { color: GREEN, fontWeight: "700" },

  sectionRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: 18, marginBottom: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "800" },
  link: { color: "#6a6a6a" },

  grid: { flexDirection: "row", flexWrap: "wrap", gap: 12 },
  card: { width: "47.7%", backgroundColor: WHITE, borderRadius: 14, padding: 10, position: "relative" },
  badge: { position: "absolute", top: 10, left: 10, backgroundColor: "#e24646", borderRadius: 8, paddingHorizontal: 6, paddingVertical: 2, zIndex: 2 },
  badgeText: { color: WHITE, fontSize: 11, fontWeight: "700" },
  cardTitle: { fontWeight: "700", fontSize: 15, marginTop: 10 },
  cardSub: { color: "#666", fontSize: 12, marginTop: 2 },
  price: { fontWeight: "800" },
  oldPrice: { color: "#8a8a8a", textDecorationLine: "line-through" },
  addBtn: { backgroundColor: GREEN, width: 28, height: 28, alignItems: "center", justifyContent: "center", borderRadius: 8 },
});
