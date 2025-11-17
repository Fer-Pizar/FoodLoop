import { View, Text, Image, FlatList, ActivityIndicator, TouchableOpacity,} from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { NEGOCIO_THEMES } from "@/constants/negocioThemes";
import { useProductos } from "@/hooks/useProductos";
import ConsumidorFooter from "@/components/ConsumidorFooter";

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

  if (loading)
    return (
      <ActivityIndicator
        style={{ marginTop: 60 }}
        size="large"
        color={theme.primary}
      />
    );

  if (error)
    return (
      <Text style={{ marginTop: 60, color: "red" }}>
        {error}
      </Text>
    );

  return (
    <>
      {/* MAIN CONTENT */}
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

          {/* LOGO DEL NEGOCIO */}
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

          {/* TÍTULO DEL NEGOCIO */}
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

          {/* LISTA DE PRODUCTOS */}
          <FlatList
            data={productos}
            keyExtractor={(item) => item.id_producto.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 90 }} 
            renderItem={({ item }) => {
              // precios
              const currentPrice = item.precio_actual ?? item.precio;
              const basePrice =
                item.precio_base && item.precio_base !== currentPrice
                  ? item.precio_base
                  : null;

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

                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "600",
                      color: theme.primary,
                    }}
                  >
                    {item.nombre}
                  </Text>

                  <Text style={{ marginTop: 6, color: "#444" }}>
                    {item.descripcion}
                  </Text>

                  {/* PRECIOS */}
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

                    {currentPrice && (
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 18,
                          color: theme.accent ?? theme.primary,
                        }}
                      >
                        Bs. {currentPrice}
                      </Text>
                    )}
                  </View>

                  {/* STOCK */}
                  {item.cantidad_disponible != null && (
                    <Text style={{ marginTop: 6, color: "#666" }}>
                      Stock: {item.cantidad_disponible} unidades
                    </Text>
                  )}
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>

      {/* SHARED FOOTER */}
      <ConsumidorFooter />
    </>
  );
}
