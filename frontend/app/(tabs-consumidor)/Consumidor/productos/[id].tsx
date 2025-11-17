import { View, Text, Image, FlatList, ActivityIndicator } from "react-native";
import { useLocalSearchParams } from "expo-router";

import { NEGOCIO_THEMES } from "@/constants/negocioThemes";
import { useProductos } from "@/hooks/useProductos";

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
    <View style={{ flex: 1, backgroundColor: theme.bg, padding: 20 }}>
      {/* Logo del negocio si existe en el theme */}
      {theme.logo && (
        <Image
          source={theme.logo}
          style={{
            width: 140,
            height: 140,
            alignSelf: "center",
            marginBottom: 20,
            borderRadius: 70,
          }}
          resizeMode="contain"
        />
      )}

      {/* Nombre del negocio */}
      <Text
        style={{
          fontSize: 32,
          fontWeight: "700",
          color: theme.primary,
          textAlign: "center",
          marginBottom: 25,
        }}
      >
        {nombre}
      </Text>

      {/* Lista de productos */}
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id_producto.toString()}
        renderItem={({ item }) => (
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

            {item.precio && (
              <Text
                style={{
                  marginTop: 12,
                  fontWeight: "bold",
                  fontSize: 18,
                  color: theme.accent ?? theme.primary,
                }}
              >
                Bs. {item.precio}
              </Text>
            )}
          </View>
        )}
      />
    </View>
  );
}
