// frontend/app/(tabs-consumidor)/productos-negocio-view.tsx
import {
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  TextInput,
} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect, useMemo } from "react";
import { NEGOCIO_THEMES } from "@/constants/negocioThemes";
import { useProductos } from "@/hooks/useProductos";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useCart } from "@/hooks/useCart";
import { toAbsoluteUrl } from "../../../../src/api/client";
import TBold from "@/components/common/TBold";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function ProductosNegocioView() {
  const { id, nombre } = useLocalSearchParams();
  const idComercio = Number(id);
  const negocioName = String(nombre ?? "");

  const negocioTheme =
    (NEGOCIO_THEMES as Record<string, any>)[negocioName] ?? {
      bg: "#FFFFFF",
      primary: "#222222",
      accent: "#444444",
    };

  const { colors } = useTheme();

  const { productos, loading, error } = useProductos(idComercio);
  const { items, add, update } = useCart();

  const [localProductos, setLocalProductos] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLocalProductos(productos);
  }, [productos]);

  const filteredProductos = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return localProductos;
    return localProductos.filter((p) =>
      String(p.nombre ?? "").toLowerCase().includes(term)
    );
  }, [localProductos, searchTerm]);

  if (loading)
    return (
      <ActivityIndicator
        style={{ marginTop: 60 }}
        size="large"
        color={negocioTheme.primary}
      />
    );

  if (error)
    return (
      <Text style={{ marginTop: 60, color: "red", fontFamily: "Comfortaa" }}>
        {error}
      </Text>
    );

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
        {/* TOP COLORED HEADER (like Starbucks mockup) */}
        <View style={{ flex: 1, backgroundColor: negocioTheme.primary }}>
          {/* Header content */}
          <View
            style={{
              paddingHorizontal: 20,
              paddingTop: 8,
              paddingBottom: 16,
            }}
          >
            {/* Back button + optional favorites icon area */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 16,
              }}
            >
              <TouchableOpacity
                onPress={() => router.back()}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.15)",
                }}
              >
                <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
              </TouchableOpacity>

              {/* Favorites icon instead of cart */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255,255,255,0.08)",
                }}
              >
                <Ionicons name="heart-outline" size={22} color="#FFFFFF" />
              </View>
            </View>

            {/* Logo + negocio name */}
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {negocioTheme.logo && (
                <Image
                  source={negocioTheme.logo}
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: 32,
                    marginRight: 12,
                  }}
                  resizeMode="contain"
                />
              )}

              <View style={{ flex: 1 }}>
                <TBold
                  style={{
                    fontSize: 24,
                    color: "#FFFFFF",
                    marginBottom: 4,
                    fontFamily: "Comfortaa",
                  }}
                >
                  {negocioName || "Negocio"}
                </TBold>

                <Text
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.8)",
                    fontFamily: "Comfortaa",
                  }}
                  numberOfLines={1}
                >
                  Recoger en local • Ver ofertas del día
                </Text>
              </View>
            </View>

            {/* Search bar */}
            <View
              style={{
                marginTop: 18,
                borderRadius: 16,
                paddingHorizontal: 12,
                paddingVertical: 8,
                backgroundColor: colors.card,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Ionicons name="search" size={18} color="#9CA3AF" />
              <TextInput
                placeholder="Buscar un producto"
                placeholderTextColor="#9CA3AF"
                value={searchTerm}
                onChangeText={setSearchTerm}
                style={{
                  flex: 1,
                  marginLeft: 8,
                  fontSize: 14,
                  fontFamily: "Comfortaa",
                  color: colors.text,
                }}
              />
            </View>

            {/* Static category pills – visual only (like Horneados/Postres/Snacks) */}
            <View
              style={{
                marginTop: 14,
                flexDirection: "row",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              {["Horneados", "Postres", "Snacks", "Bebidas"].map((label, idx) => (
                <View
                  key={label}
                  style={{
                    paddingHorizontal: 14,
                    paddingVertical: 6,
                    borderRadius: 999,
                    backgroundColor:
                      idx === 0
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.15)", // first one highlighted
                    borderWidth: idx === 0 ? 0 : 1,
                    borderColor: "rgba(255,255,255,0.35)",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "Comfortaa",
                      color: idx === 0 ? negocioTheme.primary : "#FFFFFF",
                    }}
                  >
                    {label}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* White rounded container with product grid */}
          <View
            style={{
              flex: 1,
              backgroundColor: colors.bg,
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              paddingTop: 18,
              paddingHorizontal: 12,
            }}
          >
            {/* Section title like "Postres del día" */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 8,
                marginBottom: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontFamily: "Comfortaa",
                  fontWeight: "600",
                  color: colors.text,
                }}
              >
                Productos del día
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontFamily: "Comfortaa",
                  color: colors.subtext,
                }}
              >
                {filteredProductos.length} resultados
              </Text>
            </View>

            {/* PRODUCT GRID */}
            <FlatList
              data={filteredProductos}
              numColumns={2}
              keyExtractor={(item) => item.id_producto.toString()}
              columnWrapperStyle={{
                justifyContent: "space-between",
                paddingHorizontal: 8,
              }}
              contentContainerStyle={{ paddingBottom: 90 }}
              renderItem={({ item }) => {
                const currentPrice = item.precio_actual ?? item.precio;
                const basePrice =
                  item.precio_base && item.precio_base !== currentPrice
                    ? item.precio_base
                    : null;

                const precioMostrar = currentPrice;
                const hasDiscount =
                  basePrice != null &&
                  Number(precioMostrar) < Number(basePrice);

                const pct = hasDiscount
                  ? Math.round(
                      ((Number(basePrice) - Number(precioMostrar)) /
                        Number(basePrice)) *
                        100
                    )
                  : 0;

                const badgeColor =
                  pct >= 50
                    ? "#d11212"
                    : pct >= 40
                    ? "#f59e0b"
                    : pct >= 30
                    ? "#facc15"
                    : pct >= 20
                    ? "#16a34a"
                    : "#9ca3af";

                const cartItem = items.find(
                  (c: any) => c.id_producto === item.id_producto
                );
                const qtyInCart = cartItem?.cantidad ?? 0;

                return (
                  <View style={{ width: "48%", marginBottom: 16 }}>
                    <View
                      style={{
                        backgroundColor: colors.card,
                        padding: 10,
                        borderRadius: 18,
                        shadowColor: "#000",
                        shadowOpacity: 0.08,
                        shadowRadius: 10,
                        elevation: 2,
                      }}
                    >
                      {/* IMAGE */}
                      {item.imagen_url && (
                        <Image
                          source={{
                            uri: toAbsoluteUrl(item.imagen_url) ?? undefined,
                          }}
                          style={{
                            width: "100%",
                            height: 110,
                            borderRadius: 12,
                            marginBottom: 8,
                          }}
                          resizeMode="cover"
                        />
                      )}

                      {/* NAME */}
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "600",
                          color: negocioTheme.primary,
                          fontFamily: "Comfortaa",
                        }}
                        numberOfLines={2}
                      >
                        {item.nombre}
                      </Text>

                      {/* DESCRIPTION */}
                      <Text
                        style={{
                          marginTop: 4,
                          color: colors.subtext,
                          fontFamily: "Comfortaa",
                          fontSize: 11,
                        }}
                        numberOfLines={2}
                      >
                        {item.descripcion}
                      </Text>

                      {/* PRICES + DISCOUNT BADGE */}
                      <View
                        style={{
                          marginTop: 8,
                          flexDirection: "row",
                          alignItems: "center",
                          flexWrap: "wrap",
                        }}
                      >
                        {basePrice && (
                          <Text
                            style={{
                              fontSize: 12,
                              textDecorationLine: "line-through",
                              color: colors.subtext,
                              marginRight: 4,
                              fontFamily: "Comfortaa",
                            }}
                          >
                            Bs. {basePrice}
                          </Text>
                        )}

                        <Text
                          style={{
                            fontWeight: "bold",
                            fontSize: 14,
                            color: negocioTheme.accent ?? negocioTheme.primary,
                            fontFamily: "Comfortaa",
                          }}
                        >
                          Bs. {precioMostrar}
                        </Text>

                        {hasDiscount && (
                          <View
                            style={{
                              marginLeft: 4,
                              backgroundColor: badgeColor,
                              paddingHorizontal: 6,
                              paddingVertical: 2,
                              borderRadius: 6,
                            }}
                          >
                            <Text
                              style={{
                                color: "#fff",
                                fontSize: 10,
                                fontFamily: "Comfortaa",
                                fontWeight: "600",
                              }}
                            >
                              -{pct}%
                            </Text>
                          </View>
                        )}
                      </View>

                      {/* STOCK */}
                      {item.cantidad_disponible != null && (
                        <Text
                          style={{
                            marginTop: 4,
                            color: colors.subtext,
                            fontFamily: "Comfortaa",
                            fontSize: 11,
                          }}
                        >
                          Stock: {item.cantidad_disponible} unidades
                        </Text>
                      )}

                      {/* CART CONTROLS – logic unchanged */}
                      {qtyInCart === 0 ? (
                        <TouchableOpacity
                          activeOpacity={0.9}
                          style={{
                            marginTop: 8,
                            backgroundColor:
                              item.cantidad_disponible > 0
                                ? negocioTheme.accent ?? negocioTheme.primary
                                : "#CCCCCC",
                            paddingVertical: 8,
                            borderRadius: 20,
                            alignItems: "center",
                          }}
                          disabled={item.cantidad_disponible <= 0}
                          onPress={async () => {
                            try {
                              const productId = Number(item.id_producto);
                              if (
                                !Number.isInteger(productId) ||
                                productId < 1
                              )
                                return Alert.alert("Ups 😢", "Id inválido");

                              const res = await add(productId, 1);

                              setLocalProductos((prev) =>
                                prev.map((p) =>
                                  p.id_producto === item.id_producto
                                    ? {
                                        ...p,
                                        cantidad_disponible:
                                          p.cantidad_disponible - 1,
                                      }
                                    : p
                                )
                              );

                              Alert.alert(
                                "Listo ✅",
                                res?.message ??
                                  "Producto agregado al carrito"
                              );
                            } catch (err: any) {
                              Alert.alert(
                                "Oops 😥",
                                err?.response?.data?.message ||
                                  err?.message ||
                                  "No se pudo agregar al carrito"
                              );
                            }
                          }}
                        >
                          <Text
                            style={{
                              color: "#FFFFFF",
                              fontWeight: "bold",
                              fontSize: 13,
                              fontFamily: "Comfortaa",
                            }}
                          >
                            Agregar al carrito
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <View
                          style={{
                            marginTop: 8,
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            backgroundColor: colors.card,
                            paddingVertical: 6,
                            paddingHorizontal: 10,
                            borderRadius: 12,
                          }}
                        >
                          {/* MINUS */}
                          <TouchableOpacity
                            onPress={() => {
                              const newQty = qtyInCart - 1;
                              update(item.id_producto, newQty);

                              if (newQty === 0) {
                                setLocalProductos((prev) =>
                                  prev.map((p) =>
                                    p.id_producto === item.id_producto
                                      ? {
                                          ...p,
                                          cantidad_disponible:
                                            p.cantidad_disponible + qtyInCart,
                                        }
                                      : p
                                  )
                                );
                              } else {
                                setLocalProductos((prev) =>
                                  prev.map((p) =>
                                    p.id_producto === item.id_producto
                                      ? {
                                          ...p,
                                          cantidad_disponible:
                                            p.cantidad_disponible + 1,
                                        }
                                      : p
                                  )
                                );
                              }
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 18,
                                fontFamily: "Comfortaa",
                              }}
                            >
                              −
                            </Text>
                          </TouchableOpacity>

                          {/* QTY */}
                          <Text
                            style={{
                              fontSize: 15,
                              fontWeight: "600",
                              fontFamily: "Comfortaa",
                            }}
                          >
                            {qtyInCart}
                          </Text>

                          {/* PLUS */}
                          <TouchableOpacity
                            onPress={() => {
                              const newQty = qtyInCart + 1;
                              update(item.id_producto, newQty);

                              setLocalProductos((prev) =>
                                prev.map((p) =>
                                  p.id_producto === item.id_producto
                                    ? {
                                        ...p,
                                        cantidad_disponible:
                                          p.cantidad_disponible - 1,
                                        }
                                      : p
                                )
                              );
                            }}
                          >
                            <Text
                              style={{
                                fontSize: 18,
                                fontFamily: "Comfortaa",
                              }}
                            >
                              +
                            </Text>
                          </TouchableOpacity>
                        </View>
                      )}

                      {qtyInCart > 0 && (
                        <Text
                          style={{
                            marginTop: 4,
                            color: "#0c3b2e",
                            fontWeight: "600",
                            fontFamily: "Comfortaa",
                            fontSize: 11,
                          }}
                        >
                          En carrito: {qtyInCart}
                        </Text>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>

      <ConsumidorFooter />
    </>
  );
}
