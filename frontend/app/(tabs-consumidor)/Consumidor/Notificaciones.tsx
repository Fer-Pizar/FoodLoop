import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  View,
  Text,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useNotificaciones } from "../../../hooks/useNotificaciones";
import ThemedView from "@/components/themed-view";
import { useTheme } from "@/src/theme/ThemeProvider";
import ConsumidorFooter from "@/components/ConsumidorFooter";

export default function NotificacionesScreen() {
  const router = useRouter();
  const { colors } = useTheme();
  const { items, loading, error, reload } = useNotificaciones();

  // ⭐ LOCAL STATE to allow clearing UI notifs
  const [localItems, setLocalItems] = useState(items);

  // keep sync with backend reload
  useEffect(() => {
    setLocalItems(items);
  }, [items]);

  const clearLocalNotifs = () => {
    setLocalItems([]); // just clears UI
  };

  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          backgroundColor: colors.bg,
          paddingBottom: 90, // space for footer
        }}
      >
        {/* ===== HEADER ===== */}
        <View
          style={{
            paddingTop: 50,
            paddingHorizontal: 20,
            paddingBottom: 16,
            backgroundColor: "#d11212",
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",
              fontFamily: "Comfortaa",
            }}
          >
            Notificaciones
          </Text>
          <Text
            style={{
              color: "#ffe5e5",
              marginTop: 4,
              fontSize: 13,
              fontFamily: "Comfortaa",
            }}
          >
            Aquí verás los cambios importantes de tus reservas 🛎️
          </Text>

          {/* 🧹 CLEAR BUTTON (UI ONLY) */}
          <TouchableOpacity
            onPress={clearLocalNotifs}
            style={{
              marginTop: 14,
              alignSelf: "flex-start",
              backgroundColor: "#ffffff33",
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 8,
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 13,
                fontFamily: "Comfortaa",
                fontWeight: "600",
              }}
            >
              Limpiar notificaciones
            </Text>
          </TouchableOpacity>
        </View>

        {/* ===== LOADING ===== */}
        {loading && localItems.length === 0 ? (
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ActivityIndicator />
            <Text style={{ marginTop: 8, fontFamily: "Comfortaa" }}>
              Cargando notificaciones...
            </Text>
          </View>
        ) : (
          <FlatList
            data={localItems}
            keyExtractor={(n) => String(n.id_notificacion)}
            style={{ flex: 1, paddingHorizontal: 16, paddingTop: 12 }}
            refreshControl={
              <RefreshControl refreshing={loading} onRefresh={reload} />
            }
            ListEmptyComponent={
              <View
                style={{
                  marginTop: 60,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#777",
                    fontSize: 14,
                    textAlign: "center",
                    fontFamily: "Comfortaa",
                  }}
                >
                  Aún no tienes notificaciones.
                </Text>
              </View>
            }
            renderItem={({ item }) => (
              <View
                style={{
                  backgroundColor: "#fff",
                  borderRadius: 14,
                  padding: 14,
                  marginBottom: 10,
                  shadowColor: "#000",
                  shadowOpacity: 0.06,
                  shadowRadius: 4,
                  shadowOffset: { width: 0, height: 2 },
                  elevation: 2,
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                {/* unread dot */}
                <View
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginTop: 6,
                    backgroundColor: item.leido ? "#ccc" : "#00b518ff",
                  }}
                />
                <View style={{ flex: 1 }}>
                  <Text
                    style={{
                      fontWeight: "bold",
                      marginBottom: 4,
                      fontFamily: "Comfortaa",
                    }}
                  >
                    {item.titulo}
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      color: "#444",
                      fontFamily: "Comfortaa",
                    }}
                  >
                    {item.mensaje}
                  </Text>
                  <View
                    style={{
                      marginTop: 6,
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#999",
                        fontFamily: "Comfortaa",
                      }}
                    >
                      {new Date(item.fecha_envio).toLocaleString()}
                    </Text>
                    <Text
                      style={{
                        fontSize: 11,
                        color: "#00b518ff",
                        fontWeight: "600",
                        fontFamily: "Comfortaa",
                      }}
                    >
                      {item.tipo.toUpperCase()}
                    </Text>
                  </View>
                </View>
              </View>
            )}
          />
        )}
      </ThemedView>

      {/* FOOTER */}
      <ConsumidorFooter />
    </>
  );
}
