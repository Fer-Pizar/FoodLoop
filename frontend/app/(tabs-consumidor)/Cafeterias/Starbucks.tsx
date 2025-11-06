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
  ActivityIndicator,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useTheme } from "@/src/theme/ThemeProvider"; // 👈 theme
import SandwichImg from "../../../assets/Starbucks/Sandwich.jpg";
import CarrotCakeImg from "../../../assets/Starbucks/Carrot cake.jpg";
import CroissantImg from "../../../assets/Starbucks/Croissant.jpg";
import CinnamonRollImg from "../../../assets/Starbucks/Cinnamon roll.jpg";

const RED = "#D82A2A";
const WHITE = "#FFFFFF";
const GRAY_TEXT = "#b5b5b5";
const DEEP_GREEN = "#163C33"; // ✅ keep this exact green
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
  const { colors, isDark } = useTheme(); // 🟢
  const [query, setQuery] = useState("");
  const [fontsLoaded] = useFonts({ Comfortaa_400Regular, Comfortaa_700Bold });

  const filtered = useMemo(() => {
    if (!query.trim()) return DAILY_DESSERTS;
    const q = query.toLowerCase();
    return DAILY_DESSERTS.filter((p) => p.name.toLowerCase().includes(q) || p.subtitle.toLowerCase().includes(q));
  }, [query]);

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: colors.bg }}>
        <ActivityIndicator color={colors.primary} />
      </View>
    );
  }

  return (
    <>
      <SafeAreaView style={[styles.safe, { backgroundColor: colors.bg }]}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {/* HEADER — keep Starbucks green */}
          <View style={[styles.hero, { backgroundColor: DEEP_GREEN }]}>
            <View style={styles.rowBetween}>
              <View>
                <Text style={[styles.pickupSmall, { color: colors.onPrimary }]}>{`Recoger en local`}</Text>
                <View style={styles.row}>
                  <Text style={[styles.addressText, { color: colors.onPrimary }]}>{`Av. América, Cochabamba`}</Text>
                  <Ionicons name="chevron-down" size={16} color={colors.onPrimary} style={{ marginLeft: 6, opacity: 0.9 }} />
                </View>
              </View>

              <TouchableOpacity onPress={() => router.push("../cart")} accessibilityLabel="Carrito">
                <Ionicons name="cart-outline" size={26} color={colors.onPrimary} />
              </TouchableOpacity>
            </View>

            <Text style={[styles.heroTitle, { color: colors.onPrimary }]}>Starbucks</Text>

            {/* SEARCH BAR */}
            <View style={[styles.searchBox, { backgroundColor: colors.card, borderColor: colors.border }]}>
              <Ionicons name="search" size={20} color={colors.subtext} />
              <TextInput
                placeholder="Buscar un producto"
                placeholderTextColor={colors.subtext}
                style={[styles.searchInput, { color: colors.text }]}
                value={query}
                onChangeText={setQuery}
                returnKeyType="search"
              />
            </View>

            {/* CATEGORIES */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categories}>
              {CATEGORIES.map((c) => (
                <TouchableOpacity
                  key={c.id}
                  style={[
                    styles.chip,
                    { backgroundColor: c.active ? colors.primary : colors.muted },
                  ]}
                >
                  <MaterialCommunityIcons
                    name={c.icon as any}
                    size={18}
                    color={c.active ? colors.onPrimary : colors.icon}
                    style={{ marginRight: 6 }}
                  />
                  <Text style={[styles.chipText, { color: c.active ? colors.onPrimary : colors.text }]}>{c.label}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>

          {/* BODY */}
          <View style={styles.body}>
            <View style={styles.sectionHeader}>
              <Text style={[styles.sectionTitle, { color: colors.text }]}>Postres del día</Text>
              <TouchableOpacity onPress={() => router.push("../products")}>
                <View style={styles.row}>
                  <Text style={[styles.seeAll, { color: colors.subtext }]}>ver todo</Text>
                  <Ionicons name="chevron-forward" size={16} color={colors.subtext} />
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
              renderItem={({ item }) => <ProductCard product={item} colors={colors} isDark={isDark} />}
            />
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* FOOTER (brand red kept) */}
      <View style={[styles.footer, { backgroundColor: RED }]}>
        <Ionicons name="chatbubble-ellipses-outline" size={22} color={WHITE} />
        <View style={styles.sep} />
        <Ionicons name="heart-outline" size={22} color={WHITE} />

        <TouchableOpacity
          activeOpacity={0.8}
          style={[styles.homePill, { backgroundColor: colors.card }]}
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
function ProductCard({ product, colors, isDark }: { product: Product; colors: any; isDark: boolean }) {
  const hasDiscount = product.discountPct && product.oldPrice;

  return (
    <View
      style={[
        styles.card,
        {
          backgroundColor: colors.card,
          borderColor: colors.border,
          shadowColor: isDark ? "transparent" : "#000",
        },
      ]}
    >
      <View style={styles.imageWrap}>
        <Image source={product.image} style={styles.image} />
        {hasDiscount && (
          <View style={[styles.badge, { backgroundColor: RED }]}>
            <Text style={[styles.badgeText, { color: WHITE }]}>
              - {Math.round((product.discountPct ?? 0) * 100)}%
            </Text>
          </View>
        )}
      </View>

      <View style={{ paddingHorizontal: 12, paddingTop: 8, paddingBottom: 12 }}>
        <Text style={[styles.cardTitle, { color: colors.text }]} numberOfLines={1}>
          {product.name}
        </Text>
        <Text style={[styles.cardSubtitle, { color: colors.subtext }]} numberOfLines={2}>
          {product.subtitle}
        </Text>

        <View style={[styles.rowBetween, { marginTop: 10 }]}>
          <View style={styles.row}>
            <Text style={[styles.price, { color: PRICE_GREEN }]}>Bs. {product.price}</Text>
            {product.oldPrice ? <Text style={[styles.oldPrice, { color: GRAY_TEXT }]}> Bs. {product.oldPrice}</Text> : null}
          </View>

          <TouchableOpacity style={[styles.addBtn, { backgroundColor: "#2A6A5A" }]}>
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
  safe: { flex: 1 },
  hero: { paddingHorizontal: 24, paddingTop: 4, paddingBottom: 18 },
  row: { flexDirection: "row", alignItems: "center" },
  rowBetween: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  pickupSmall: { opacity: 0.8, fontFamily: "Comfortaa_400Regular", fontSize: 12 },
  addressText: { fontFamily: "Comfortaa_700Bold", fontSize: 14, marginTop: 2 },
  heroTitle: { fontFamily: "Comfortaa_700Bold", fontSize: 36, marginTop: 18 },

  searchBox: {
    marginTop: 14,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
  },
  searchInput: { flex: 1, marginLeft: 10, fontFamily: "Comfortaa_400Regular", fontSize: 14 },

  categories: { marginTop: 12, paddingVertical: 4 },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 20,
    marginRight: 12,
  },
  chipText: { fontFamily: "Comfortaa_700Bold", fontSize: 14 },

  body: { paddingHorizontal: 24, paddingTop: 18 },
  sectionHeader: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 },
  sectionTitle: { fontFamily: "Comfortaa_700Bold", fontSize: 22 },
  seeAll: { fontFamily: "Comfortaa_400Regular", marginRight: 4 },

  card: {
    width: CARD_W,
    borderRadius: 16,
    borderWidth: StyleSheet.hairlineWidth,
    shadowOpacity: 0.08,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2,
    marginBottom: 16,
  },
  imageWrap: { width: "100%", height: CARD_W * 0.62, borderTopLeftRadius: 16, borderTopRightRadius: 16, overflow: "hidden" },
  image: { width: "100%", height: "100%" },
  badge: { position: "absolute", top: 8, left: 8, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  badgeText: { fontSize: 12, fontFamily: "Comfortaa_700Bold" },
  cardTitle: { fontFamily: "Comfortaa_700Bold", fontSize: 16 },
  cardSubtitle: { fontFamily: "Comfortaa_400Regular", fontSize: 13, marginTop: 4 },
  price: { fontFamily: "Comfortaa_700Bold", fontSize: 14 },
  oldPrice: { fontFamily: "Comfortaa_400Regular", fontSize: 13, textDecorationLine: "line-through", marginLeft: 8 },
  addBtn: { width: 30, height: 30, borderRadius: 8, alignItems: "center", justifyContent: "center" },

  // Footer (brand red kept)
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
