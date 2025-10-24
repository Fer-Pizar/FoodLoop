import { useProductos } from "../../../hooks/useProductos";
import { View, Text, FlatList, RefreshControl, ActivityIndicator } from "react-native";

export default function MisProductos() {
  const { items, loading, error, refetch } = useProductos();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text>Cargando productos...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "red" }}>Error: {error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => String(item.id_producto)}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={refetch} />}
      renderItem={({ item }) => (
        <View style={{ padding: 16, borderBottomWidth: 1, borderColor: "#eee" }}>
          <Text style={{ fontWeight: "700" }}>{item.nombre}</Text>
          <Text style={{ opacity: 0.7 }}>{item.descripcion ?? "Sin descripción"}</Text>
          <Text style={{ marginTop: 4 }}>
            💰 {item.precio_actual ?? item.precio_base} Bs.
          </Text>
        </View>
      )}
      ListEmptyComponent={<Text style={{ textAlign: "center", marginTop: 20 }}>No hay productos publicados 😅</Text>}
    />
  );
}
