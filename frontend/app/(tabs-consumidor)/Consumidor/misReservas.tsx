// (wherever this screen lives, e.g. frontend/app/Consumidor/mis-reservas.tsx)
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useReservas } from "../../../hooks/useReservas";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function MisReservas() {
  const { reservas, loading } = useReservas();
  const router = useRouter();
  const { colors } = useTheme();

  if (loading) {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: colors.bg }}
        edges={["top", "left", "right"]}
      >
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: colors.bg }}
      edges={["top", "left", "right"]}
    >
      <ScrollView style={{ flex: 1, padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            marginBottom: 15,
            color: colors.text,
          }}
        >
          My Reservations
        </Text>

        {reservas.length === 0 && (
          <Text
            style={{
              color: colors.subtext,
              textAlign: "center",
              marginTop: 50,
            }}
          >
            No reservations made yet.
          </Text>
        )}

        {reservas.map((r) => (
          <TouchableOpacity
            key={r.id_reserva}
            onPress={() => router.push(`../Consumidor/reserva/${r.id_reserva}`)}
            style={{
              backgroundColor: colors.card,
              borderRadius: 15,
              padding: 18,
              marginBottom: 12,
              elevation: 2,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 18,
                color: colors.text,
              }}
            >
              Reservation #{r.id_reserva}
            </Text>

            <Text
              style={{
                marginTop: 8,
                color: colors.text,
              }}
            >
              Status:{" "}
              <Text style={{ fontWeight: "bold", color: colors.text }}>
                {r.estado}
              </Text>
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: colors.text,
              }}
            >
              Total: Bs. {r.total}
            </Text>

            <Text
              style={{
                marginTop: 4,
                color: colors.subtext,
                fontSize: 12,
              }}
            >
              Code: {r.codigo_validacion}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
