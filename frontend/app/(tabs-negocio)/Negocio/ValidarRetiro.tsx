// app/(tabs-negocio)/Negocio/ValidarRetiro.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import ValidarHeader from "../../../components/reservas/ValidarHeader";
import { useValidarRetiro } from "../../../hooks/useValidarRetiro";

const RED = "#d11212ff";

export default function ValidarRetiro() {
  const [codigo, setCodigo] = useState("");
  const { estado, reserva, mensaje, loading, validar, confirmar, reset } =
    useValidarRetiro();

  const showError =
    estado === "invalid" || estado === "used" || estado === "expired";

  const tituloError =
    estado === "used"
      ? "Código ya usado"
      : estado === "expired"
      ? "Código expirado"
      : "Código inválido";

  const onValidar = () => {
    reset();
    validar(codigo);
  };

  const onConfirmar = () => {
    confirmar(codigo);
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {/*Header creado en componentes */}
      <ValidarHeader />

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ padding: 16, paddingBottom: 32 }}
      >
        {/* Input de código */}
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Comfortaa_700Bold",
            marginBottom: 8,
          }}
        >
          Código de retiro
        </Text>

        <TextInput
          placeholder="Ej. FL-ABC123"
          placeholderTextColor="#9ca3af"
          value={codigo}
          onChangeText={setCodigo}
          autoCapitalize="characters"
          style={{
            borderWidth: 1,
            borderColor: "#d1d5db",
            borderRadius: 999,
            paddingHorizontal: 16,
            paddingVertical: 10,
            marginBottom: 12,
            fontFamily: "Comfortaa_400Regular",
          }}
        />

        {/* Botón validar */}
        <TouchableOpacity
          disabled={loading || !codigo.trim()}
          onPress={onValidar}
          style={{
            backgroundColor:
              loading || !codigo.trim() ? "#f28b8b" : RED,
            paddingVertical: 12,
            borderRadius: 999,
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text
              style={{
                color: "#fff",
                fontFamily: "Comfortaa_700Bold",
                fontSize: 14,
              }}
            >
              Validar código
            </Text>
          )}
        </TouchableOpacity>

        {/* Error */}
        {showError && (
          <View
            style={{
              backgroundColor: "#ffe5e5",
              borderRadius: 8,
              padding: 12,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "Comfortaa_700Bold",
                color: "#b00020",
                marginBottom: 4,
              }}
            >
              {tituloError}
            </Text>
            <Text
              style={{
                color: "#b00020",
                fontFamily: "Comfortaa_400Regular",
              }}
            >
              {mensaje ??
                "El código ingresado no existe, ya fue utilizado o no es válido."}
            </Text>
          </View>
        )}

        {/* Detalle de la reserva */}
        {(estado === "valid" || estado === "confirmed") && reserva && (
          <View
            style={{
              borderWidth: 1,
              borderColor: "#e5e7eb",
              borderRadius: 8,
              padding: 16,
            }}
          >
            <Text
              style={{
                fontFamily: "Comfortaa_700Bold",
                fontSize: 16,
                marginBottom: 8,
              }}
            >
              Detalles del pedido
            </Text>

            <Text style={{ fontFamily: "Comfortaa_400Regular", marginBottom: 2 }}>
              <Text style={{ fontFamily: "Comfortaa_700Bold" }}>Código: </Text>
              {reserva.codigo}
            </Text>

            <Text style={{ fontFamily: "Comfortaa_400Regular", marginBottom: 2 }}>
              <Text style={{ fontFamily: "Comfortaa_700Bold" }}>Cliente: </Text>
              {reserva.cliente.nombre}
            </Text>

            <Text style={{ fontFamily: "Comfortaa_400Regular", marginBottom: 2 }}>
              <Text style={{ fontFamily: "Comfortaa_700Bold" }}>Total: </Text>
              Bs {reserva.total}
            </Text>

            <Text
              style={{
                fontFamily: "Comfortaa_700Bold",
                marginTop: 8,
                marginBottom: 4,
              }}
            >
              Productos
            </Text>
            <Text style={{ fontFamily: "Comfortaa_400Regular" }}>
              {reserva.producto.nombre}
            </Text>

            <TouchableOpacity
              disabled={loading || estado === "confirmed"}
              onPress={onConfirmar}
              style={{
                backgroundColor:
                  loading || estado === "confirmed" ? "#9ca3af" : RED,
                paddingVertical: 12,
                borderRadius: 999,
                alignItems: "center",
                marginTop: 16,
              }}
            >
              {loading ? (
                <ActivityIndicator color="#fff" />
              ) : (
                <Text
                  style={{
                    color: "#fff",
                    fontFamily: "Comfortaa_700Bold",
                    fontSize: 14,
                  }}
                >
                  {estado === "confirmed"
                    ? "Retiro confirmado"
                    : "Confirmar retiro"}
                </Text>
              )}
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

