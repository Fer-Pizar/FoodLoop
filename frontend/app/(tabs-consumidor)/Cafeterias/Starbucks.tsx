import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import SandwichImg from "../../../assets/Starbucks/Sandwich.jpg";
import CarrotCakeImg from "../../../assets/Starbucks/Carrot cake.jpg";
import CroissantImg from "../../../assets/Starbucks/Croissant.jpg";
import CinnamonRollImg from "../../../assets/Starbucks/Cinnamon roll.jpg";

const RED = "#D82A2A";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const GRAY_TEXT = "#b5b5b5";
const INPUT_BG = "#F5F5F5";
const DEEP_GREEN = "#163C33";
const CHIP_BG = "#E9EFEA";
const PRICE_GREEN = "#2F8F46";

const { width } = Dimensions.get("window");
const CARD_W = (width - 48 - 12) / 2;

type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  oldPrice?: number;
  discountPct?: number;
  image: any;
  tag?: string;
};

const DAILY_DESSERTS: Product[] = [
  { id: "p1", name: "Sandwich", subtitle: "Jamón y pan crujiente", price: 15, oldPrice: 23, discountPct: 0.35, image: SandwichImg },
  { id: "p2", name: "Torta de zanahoria", subtitle: "Salud en cada capa", price: 23, oldPrice: 33, discountPct: 0.3, image: CarrotCakeImg },
  { id: "p3", name: "Croissant", subtitle: "Crocante en cada bocado", price: 10, oldPrice: 20, discountPct: 0.5, image: CroissantImg },
  { id: "p4", name: "Rollo de Canela", subtitle: "Frosting como ningún otro", price: 27, oldPrice: 37, discountPct: 0.27, image: CinnamonRollImg },
];

const CATEGORIES = [
  { id: "cat1", label: "Horneados", icon: "bread-slice", active: true },
  { id: "cat2", label: "Postres", icon: "ice-cream" },
  { id: "cat3", label: "Snacks", icon: "cookie" },
];

export default function Starbucks() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [fontsLoaded] = useFonts({ Comfortaa_400Regular, Comfortaa_700Bold });

  const filtered = useMemo(() => {
    if (!query.trim()) return DAILY_DESSERTS;
    const q = query.toLowerCase();
    return DAILY_DESSERTS.filter((p) => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  }, [query]);

  if (!fontsLoaded) return null;

  return (
    <>
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* HEADER */}
          <View style={styles.hero}>
            <View style={styles.rowBetween}>
              <View>
                <Text style={styles.pickupSmall}>Recoger en local</Text>
                <View style={styles.row}>
                  <Text style={styles.addressText}>Av. América, Cochabamba</Text>
                  <Ionicons name="chevron-down" size={16} color={WHITE} style={{ marginLeft: 6, opacity: 0.9 }} />
                </View>
              </View>

              <TouchableOpacity onPress={() => router.push("../cart")} accessibilityLabel="Carrito">
                <Ionicons name="cart-outline" size={26} color={WHITE} />
              </TouchableOpacity>
            </View>

            <Text style={styles.heroTitle}>Starbucks</Text>

            {/* SEARCH BAR */}
            <View style={styles.searchBox}>
              <Ionicons name="search" size={20} color="#6B7280" />
              <TextInput
                placeholder="Buscar un producto"
                placeholderTextColor="#95a2ad"
                style={styles.searchInput}
                value={query}
                onChangeText={setQuery}
                returnKeyType="search"
              />
            </View>

            {/* CATEGORIES */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
              {CATEGORIES.map((c) => (
                <TouchableOpacity key={c.id} style={[styles.chip, c.active && styles.chipActive]}>
                  <MaterialCommunityIcons
                    name={c.icon as any}
                    size={18}
                    color={c.active ? WHITE : DEEP_GREEN}
                    style={{ marginRight: 6 }}
                  />
                  <Text style={[styles.chipText, c.active && styles.chipTextActive]}>{c.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Postres del día</Text>
              <TouchableOpacity onPress={() => router.push("../products")}>
                <View style={styles.row}>
                  <Text style={styles.seeAll}>ver todo</Text>
                  <Ionicons name="chevron-forward" size={16} color="#6B7280" />
                </View>
              </TouchableOpacity>
            </View>

            <FlatList
              data={filtered}
              keyExtractor={(item) => item.id}
              numColumns={2}
              columnWrapperStyle={{ justifyContent: "space-between" }}
              contentContainerStyle={{ paddingBottom: 24 }}
              scrollEnabled={false}
              renderItem={({ item }) => <ProductCard product={item} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* 👇 FOOTER */}
      <View style={styles.footer}>
        <Ionicons name="chatbubble-ellipses-outline" size={22} color={WHITE} />
        <View style={styles.sep} />
        <Ionicons name="heart-outline" size={22} color={WHITE} />

        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.homePill}
          onPress={() => router.replace("/(tabs-consumidor)/Categories")}
        >
          <Ionicons name="home" size={26} color={RED} />
        </TouchableOpacity>

        <Ionicons name="bag-handle-outline" size={22} color={WHITE} />
        <View style={styles.sep} />
        <TouchableOpacity onPress={() => router.push("/(tabs-consumidor)/Consumidor/Perfil")}>
          <Ionicons name="person-circle-outline" size={24} color={WHITE} />
        </TouchableOpacity>
      </View>
    </>
  );
}

/* =========================
   PRODUCT CARD
========================= */
function ProductCard({ product }: { product: Product }) {
  const hasDiscount = product.discountPct && product.oldPrice;

  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={product.image} style={styles.image} />
        {hasDiscount && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>- {Math.round((product.discountPct ?? 0) * 100)}%</Text>
          </View>
        )}
      </View>

      <View style={{ paddingHorizontal: 12, paddingTop: 8, paddingBottom: 12 }}>
        <Text style={styles.cardTitle} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={styles.cardSubtitle} numberOfLines={2}>
          {product.subtitle}
        </Text>

        <View style={[styles.rowBetween, { marginTop: 10 }]}>
          <View style={styles.row}>
            <Text style={styles.price}>Bs. {product.price}</Text>
            {product.oldPrice ? <Text style={styles.oldPrice}> Bs. {product.oldPrice}</Text> : null}
          </View>

          <TouchableOpacity style={styles.addBtn}>
            <Ionicons name="add" size={18} color={WHITE} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

/* =========================
   STYLES
========================= */
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT },
  hero: { backgroundColor: DEEP_GREEN, paddingHorizontal: 24, paddingTop: 4, paddingBottom: 18 },
  row: { flexDirection: "row", alignItems: "center" },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  pickupSmall: { color: WHITE, opacity: 0.8, fontFamily: "Comfortaa_400Regular", fontSize: 12 },
  addressText: { color: WHITE, fontFamily: "Comfortaa_700Bold", fontSize: 14, marginTop: 2 },
  heroTitle: { color: WHITE, fontFamily: "Comfortaa_700Bold", fontSize: 36, marginTop: 18 },
  searchBox: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: WHITE,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: "Comfortaa_400Regular", fontSize: 14, color: "#1f2937" },
  categories: { marginTop: 12, paddingVertical: 4 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: CHIP_BG,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  chipActive: { backgroundColor: "#2A6A5A" },
  chipText: { fontFamily: "Comfortaa_700Bold", color: DEEP_GREEN, fontSize: 14 },
  chipTextActive: { color: WHITE },
  body: { paddingHorizontal: 24, paddingTop: 18 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  sectionTitle: { fontFamily: "Comfortaa_700Bold", fontSize: 22, color: "#0f172a" },
  seeAll: { fontFamily: "Comfortaa_400Regular", color: "#6B7280", marginRight: 4 },
  card: {
    width: CARD_W,
    backgroundColor: WHITE,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 16,
  },
  imageWrap: { width: "100%", height: CARD_W * 0.62, borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden" },
  image: { width: "100%", height: "100%" },
  badge: { position: "absolute", top: 8, left: 8, backgroundColor: RED, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  badgeText: { color: WHITE, fontSize: 12, fontFamily: "Comfortaa_700Bold" },
  cardTitle: { fontFamily: "Comfortaa_700Bold", color: "#0b1220", fontSize: 16 },
  cardSubtitle: { fontFamily: "Comfortaa_400Regular", color: "#6B7280", fontSize: 13, marginTop: 4 },
  price: { fontFamily: "Comfortaa_700Bold", fontSize: 14, color: PRICE_GREEN },
  oldPrice: { fontFamily: "Comfortaa_400Regular", fontSize: 13, color: GRAY_TEXT, textDecorationLine: "line-through", marginLeft: 8 },
  addBtn: { width: 30, height: 30, borderRadius: 8, backgroundColor: "#2A6A5A", alignItems: "center", justifyContent: "center" },

  // === Footer ===
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    backgroundColor: RED,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 18,
  },
  sep: { width: 1, height: 20, backgroundColor: "rgba(255,255,255,0.6)" },
  homePill: {
    backgroundColor: WHITE,
    width: 68,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 10,
  },
});
