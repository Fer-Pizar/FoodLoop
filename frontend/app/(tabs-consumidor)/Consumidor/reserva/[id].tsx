import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, ActivityIndicator, ScrollView,} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { api } from "@/src/api/client";
import { Reserva } from "@/src/api/types";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function ReservaDetalle() {
  const { id } = useLocalSearchParams();
  const { colors } = useTheme();

  const [reserva, setReserva] = useState<Reserva | null>(null);
  const [loading, setLoading] = useState(true);

  const loadReserva = async () => {
    try {
      const res = (await api.get("/reservas/mias")) as { reservas: Reserva[] };

      const all: Reserva[] = res.reservas || [];
      const found = all.find((r) => r.id_reserva === Number(id));

      setReserva(found ?? null);
    } catch (error) {
      console.error("Error loading reserva:", error);
      setReserva(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReserva();
  }, []);

  if (loading) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!reserva) {
    return (
      <View
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <Text style={{ fontSize: 18, color: "#888" }}>
          Reservation not found 😢
        </Text>
      </View>
    );
  }

  return (
    <>
      {/* Screen */}
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg }}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 24, 
            paddingTop: 20,
            paddingBottom: 120,
          }}
        >
          <Text
            style={{
              fontSize: 28,
              fontWeight: "bold",
              marginBottom: 20,
              color: colors.text,
            }}
          >
            Reserva #{reserva.id_reserva}
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text }}
          >
            Estado: <Text style={{ fontWeight: "bold" }}>{reserva.estado}</Text>
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text }}
          >
            Total: Bs. {reserva.total}
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text }}
          >
            Código de validación:
          </Text>

          {/* "code box" */}
          <View
            style={{
              marginTop: 10,
              borderRadius: 10,
              padding: 15,
              backgroundColor: '#d9d9d9ff',
              minHeight: 60, 
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 26,
                fontWeight: "bold",
                textAlign: "center",
                color: colors.text,
              }}
            >
              {reserva.codigo_validacion || ""} 
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Footer */}
      <ConsumidorFooter />
    </>
  );
}
