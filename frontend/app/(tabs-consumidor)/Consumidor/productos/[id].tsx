import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity, Alert,} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import { NEGOCIO_THEMES } from "@/constants/negocioThemes";
import { useProductos } from "@/hooks/useProductos";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useCart } from "@/hooks/useCart";

export default function ProductosNegocioView() {
  const { id, nombre } = useLocalSearchParams();
  const idComercio = Number(id);

  const negocioName = String(nombre);

  const theme =
    (NEGOCIO_THEMES as Record<string, any>)[negocioName] ?? {
      bg: "#FFFFFF",
      primary: "#222222",
      accent: "#444444",
    };

  const { productos, loading, error } = useProductos(idComercio);
  const { items, add, update } = useCart();
  const [localProductos, setLocalProductos] = useState<any[]>([]);

  useEffect(() => {
    setLocalProductos(productos);
  }, [productos]);

  if (loading)
    return (
      <ActivityIndicator
        style={{ marginTop: 60 }}
        size="large"
        color={theme.primary}
      />
    );

  if (error)
    return <Text style={{ marginTop: 60, color: "red" }}>{error}</Text>;

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: theme.bg }}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          
          {/* BACK BUTTON */}
          <TouchableOpacity
            onPress={() => router.push("/(tabs-consumidor)/Cafeterias")}
            style={{
              width: 40,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Ionicons name="arrow-back" size={26} color={theme.primary} />
          </TouchableOpacity>

          {/* LOGO */}
          {theme.logo && (
            <Image
              source={theme.logo}
              style={{
                width: 140,
                height: 140,
                alignSelf: "center",
                marginBottom: 10,
                borderRadius: 70,
              }}
              resizeMode="contain"
            />
          )}

          {/* NEGOCIO TITLE */}
          <Text
            style={{
              fontSize: 32,
              fontWeight: "700",
              color: theme.primary,
              textAlign: "center",
              marginBottom: 20,
              marginTop: 10,
            }}
          >
            {nombre}
          </Text>

          {/* LISTA */}
          <FlatList
            data={localProductos}
            keyExtractor={(item) => item.id_producto.toString()}
            contentContainerStyle={{ paddingBottom: 90 }}
            renderItem={({ item }) => {
              const currentPrice = item.precio_actual ?? item.precio;
              const basePrice =
                item.precio_base && item.precio_base !== currentPrice
                  ? item.precio_base
                  : null;

              const cartItem = items.find(
                (c: any) => c.id_producto === item.id_producto
              );
              const qtyInCart = cartItem?.cantidad ?? 0;

              return (
                <View
                  style={{
                    backgroundColor: "#FFFFFF",
                    padding: 16,
                    marginBottom: 16,
                    borderRadius: 16,
                    shadowColor: "#000",
                    shadowOpacity: 0.1,
                    shadowRadius: 8,
                  }}
                >
                  {/* IMAGE */}
                  {item.imagen_url && (
                    <Image
                      source={{ uri: item.imagen_url }}
                      style={{
                        width: "100%",
                        height: 180,
                        borderRadius: 12,
                        marginBottom: 10,
                      }}
                    />
                  )}

                  {/* NAME */}
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: theme.primary,
                    }}
                  >
                    {item.nombre}
                  </Text>

                  {/* DESCRIPTION */}
                  <Text style={{ marginTop: 6, color: "#444" }}>
                    {item.descripcion}
                  </Text>

                  {/* PRICES */}
                  <View
                    style={{
                      marginTop: 12,
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 8,
                    }}
                  >
                    {basePrice && (
                      <Text
                        style={{
                          fontSize: 16,
                          textDecorationLine: "line-through",
                          color: "#777",
                        }}
                      >
                        Bs. {basePrice}
                      </Text>
                    )}

                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        color: theme.accent ?? theme.primary,
                      }}
                    >
                      Bs. {currentPrice}
                    </Text>
                  </View>

                  {/* STOCK */}
                  {item.cantidad_disponible != null && (
                    <Text style={{ marginTop: 6, color: "#666" }}>
                      Stock: {item.cantidad_disponible} unidades
                    </Text>
                  )}

                  {/* ============ 🛒 CART CONTROLS ============ */}
                  {qtyInCart === 0 ? (
                    <TouchableOpacity
                      activeOpacity={0.9}
                      style={{
                        marginTop: 12,
                        backgroundColor:
                          item.cantidad_disponible > 0
                            ? theme.accent ?? theme.primary
                            : "#CCCCCC",
                        paddingVertical: 10,
                        borderRadius: 24,
                        alignItems: "center",
                      }}
                      disabled={item.cantidad_disponible <= 0}
                      onPress={async () => {
                        try {
                          const productId = Number(item.id_producto);
                          if (!Number.isInteger(productId) || productId < 1)
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
                            res?.message ?? "Producto agregado al carrito"
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
                          fontSize: 16,
                        }}
                      >
                        Agregar al carrito
                      </Text>
                    </TouchableOpacity>
                  ) : (
                    <View
                      style={{
                        marginTop: 12,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        backgroundColor: "#F4F4F4",
                        padding: 10,
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
                        <Text style={{ fontSize: 22 }}>−</Text>
                      </TouchableOpacity>

                      {/* QTY */}
                      <Text style={{ fontSize: 18, fontWeight: "600" }}>
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
                        <Text style={{ fontSize: 22 }}>+</Text>
                      </TouchableOpacity>
                    </View>
                  )}

                  {/* small tag */}
                  {qtyInCart > 0 && (
                    <Text
                      style={{
                        marginTop: 4,
                        color: "#0c3b2e",
                        fontWeight: "600",
                      }}
                    >
                      En carrito: {qtyInCart}
                    </Text>
                  )}
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>

      <ConsumidorFooter />
    </>
  );
}
