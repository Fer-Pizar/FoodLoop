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
        <Text style={{ fontSize: 18, color: "#888", fontFamily: "Comfortaa" }}>
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
              fontFamily: "Comfortaa",
            }}
          >
            Reserva #{reserva.id_reserva}
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text, fontFamily: "Comfortaa" }}
          >
            Estado: <Text style={{ fontWeight: "bold", fontFamily: "Comfortaa" }}>{reserva.estado}</Text>
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text, fontFamily: "Comfortaa" }}
          >
            Total: Bs. {reserva.total}
          </Text>

          <Text
            style={{ fontSize: 18, marginBottom: 10, color: colors.text, fontFamily: "Comfortaa" }}
          >
            Gracias por tu preferencia! Te notificaremos cuando tu pedido esté listo.
          </Text>

          
        </ScrollView>
      </SafeAreaView>

      {/* Footer */}
      <ConsumidorFooter />
    </>
  );
}
