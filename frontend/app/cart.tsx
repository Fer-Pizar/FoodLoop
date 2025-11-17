import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useCart } from "@/hooks/useCart";
import ConsumidorFooter from "@/components/ConsumidorFooter";

const RED = "#D82A2A";

const toNumber = (value: any): number => {
  const num = Number(value);
  return Number.isNaN(num) ? 0 : num;
};

export default function CartScreen() {
  const router = useRouter();
  const { items, total, loading, update, remove, clear } = useCart();

  const hasItems = items.length > 0;

  const goToProducts = () => {
    router.replace("/(tabs-consumidor)/Categories");
  };

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F8F8F8" }}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={RED} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Mi Carrito</Text>

          <View style={{ width: 24 }} />
        </View>

        {/* Content */}
        <View style={{ flex: 1, paddingHorizontal: 16, paddingBottom: 90 }}>
          {loading && (
            <ActivityIndicator style={{ marginTop: 24 }} color={RED} />
          )}

          {!loading && !hasItems && (
            <View style={styles.emptyState}>
              <Ionicons
                name="cart-outline"
                size={120}
                color="rgba(0,0,0,0.18)"
              />
              <Text style={styles.emptyText}>Tu carrito está vacío</Text>
              <TouchableOpacity
                style={styles.primaryButton}
                onPress={goToProducts}
              >
                <Text style={styles.primaryButtonText}>Ver productos</Text>
              </TouchableOpacity>
            </View>
          )}

          {!loading && hasItems && (
            <>
              <FlatList
                data={items}
                keyExtractor={(item) => String(item.id_producto)}
                ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                renderItem={({ item }) => {
                  const unitPrice = toNumber(item.precio_actual);
                  const subtotal = toNumber(item.subtotal);

                  return (
                    <View style={styles.card}>
                      <View style={{ flexDirection: "row", marginBottom: 6 }}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.productName}>{item.nombre}</Text>
                          <Text style={styles.productPrice}>
                            Bs. {unitPrice.toFixed(2)}
                          </Text>
                        </View>

                        {/* Eliminar */}
                        <TouchableOpacity
                          onPress={() => remove(item.id_producto)}
                        >
                          <Text style={styles.removeText}>Eliminar</Text>
                        </TouchableOpacity>
                      </View>

                      {/* Controles cantidad – CA5 */}
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <View style={styles.qtyContainer}>
                          <TouchableOpacity
                            style={styles.qtyButton}
                            onPress={() =>
                              update(item.id_producto, item.cantidad - 1)
                            }
                          >
                            <Text style={styles.qtyButtonText}>-</Text>
                          </TouchableOpacity>

                          <Text style={styles.qtyValue}>{item.cantidad}</Text>

                          <TouchableOpacity
                            style={styles.qtyButton}
                            onPress={() =>
                              update(item.id_producto, item.cantidad + 1)
                            }
                          >
                            <Text style={styles.qtyButtonText}>+</Text>
                          </TouchableOpacity>
                        </View>

                        <View>
                          <Text style={styles.subtotalLabel}>Subtotal</Text>
                          <Text style={styles.subtotalValue}>
                            Bs. {subtotal.toFixed(2)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  );
                }}
              />

              {/* Total – CA6 */}
              <View style={styles.totalBox}>
                <View>
                  <Text style={styles.totalLabel}>Total general</Text>
                  <Text style={styles.totalValue}>
                    Bs. {toNumber(total).toFixed(2)}
                  </Text>
                </View>

                <View style={{ flexDirection: "row", gap: 8 }}>
                  <TouchableOpacity
                    style={[styles.secondaryButton, { flex: 1 }]}
                    onPress={goToProducts}
                  >
                    <Text style={styles.secondaryButtonText}>
                      Seguir comprando
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[styles.primaryButton, { flex: 1 }]}
                    onPress={() => {
                    }}
                  >
                    <Text style={styles.primaryButtonText}>Reservar</Text>
                  </TouchableOpacity>
                </View>

                {/* Vaciar carrito */}
                <TouchableOpacity
                  style={{ marginTop: 8, alignSelf: "flex-end" }}
                  onPress={() => clear()}
                >
                  <Text style={{ color: "#999" }}>Vaciar carrito</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
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
    backgroundColor: "#FFFFFF",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#EEE",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#333",
  },
  emptyState: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  emptyText: {
    fontSize: 18,
    color: "#777",
    marginBottom: 12,
  },
  primaryButton: {
    backgroundColor: RED,
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 10,
  },
  primaryButtonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },
  productPrice: {
    marginTop: 4,
    fontSize: 15,
    fontWeight: "bold",
    color: "#2E7D32",
  },
  removeText: {
    color: "#D32F2F",
    fontSize: 14,
  },
  qtyContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  qtyButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#F0F0F0",
    alignItems: "center",
    justifyContent: "center",
  },
  qtyButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  qtyValue: {
    minWidth: 24,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  subtotalLabel: {
    fontSize: 12,
    color: "#777",
    textAlign: "right",
  },
  subtotalValue: {
    fontSize: 16,
    fontWeight: "700",
    color: "#333",
    textAlign: "right",
  },
  totalBox: {
    marginTop: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FFECEC",
    gap: 12,
  },
  totalLabel: {
    fontSize: 14,
    color: "#444",
  },
  totalValue: {
    fontSize: 20,
    fontWeight: "700",
    color: RED,
  },
  secondaryButton: {
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: RED,
    backgroundColor: "#FFFFFF",
  },
  secondaryButtonText: {
    textAlign: "center",
    color: RED,
    fontWeight: "600",
    fontSize: 14,
  },
});
