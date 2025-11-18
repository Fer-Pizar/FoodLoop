import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from "react-native";
import { useRouter } from "expo-router";
import { useReservas } from "../../../hooks/useReservas";

export default function MisReservas() {
  const { reservas, loading } = useReservas();
  const router = useRouter();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 15 }}>
        My Reservations
      </Text>

      {reservas.length === 0 && (
        <Text style={{ color: "#888", textAlign: "center", marginTop: 50 }}>
          No reservations made yet.
        </Text>
      )}

      {reservas.map((r) => (
        <TouchableOpacity
          key={r.id_reserva}
          onPress={() => router.push(`../Consumidor/reserva/${r.id_reserva}`)}
          style={{
            backgroundColor: "#fff",
            borderRadius: 15,
            padding: 18,
            marginBottom: 12,
            elevation: 2,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            Reservation #{r.id_reserva}
          </Text>

          <Text style={{ marginTop: 8, color: "#444" }}>
            Status: <Text style={{ fontWeight: "bold" }}>{r.estado}</Text>
          </Text>

          <Text style={{ marginTop: 4, color: "#444" }}>
            Total: Bs. {r.total}
          </Text>

          <Text style={{ marginTop: 4, color: "#888", fontSize: 12 }}>
            Code: {r.codigo_validacion}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
