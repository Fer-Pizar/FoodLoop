import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useConsumidor } from "@/hooks/useConsumidor";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useTheme } from "@/src/theme/ThemeProvider";

export default function EditProfile() {
  const router = useRouter();
  const { me, loading, saving, error, refresh, saveProfile } = useConsumidor();

  const { colors } = useTheme();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (me) {
      setNombre(me.nombre ?? "");
      setEmail(me.email ?? "");
    }
  }, [me]);

  const onSave = async () => {
    try {
      await saveProfile({ nombre, email });
      Alert.alert("Éxito", "Datos actualizados");
      router.back();
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "No se pudo guardar");
    }
  };

  if (loading && !me) {
    return (
      <>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: colors.bg }}>
          <ActivityIndicator color={colors.primary} />
        </View>
        <ConsumidorFooter />
      </>
    );
  }

  return (
    <>
      <View style={{ flex: 1, padding: 16, gap: 12, paddingBottom: 90, backgroundColor: colors.bg }}>
        <Text style={{ fontSize: 22, fontWeight: "700", color: colors.text }}>Editar Perfil</Text>

        {error ? (
          <View style={{ gap: 8 }}>
            <Text style={{ color: colors.text }}>{error}</Text>
            <TouchableOpacity
              onPress={refresh}
              style={{
                alignSelf: "flex-start",
                backgroundColor: colors.muted,
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 10,
                borderWidth: 1,
                borderColor: colors.border,
              }}
            >
              <Text style={{ color: colors.text }}>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <Text style={{ fontSize: 14, color: colors.subtext }}>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre"
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            color: colors.text,
            padding: 12,
            borderRadius: 12,
          }}
          placeholderTextColor={colors.subtext}
          autoCapitalize="words"
        />

        <Text style={{ fontSize: 14, color: colors.subtext, marginTop: 8 }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="tu@email.com"
          style={{
            borderWidth: 1,
            borderColor: colors.border,
            backgroundColor: colors.card,
            color: colors.text,
            padding: 12,
            borderRadius: 12,
          }}
          placeholderTextColor={colors.subtext}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity
          onPress={onSave}
          disabled={saving}
          style={{
            backgroundColor: colors.primary,
            padding: 14,
            borderRadius: 14,
            alignItems: "center",
            marginTop: 16,
            opacity: saving ? 0.7 : 1,
          }}
        >
          {saving ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text style={{ color: "#fff", fontSize: 16, fontWeight: "700" }}>Guardar</Text>
          )}
        </TouchableOpacity>
      </View>

      <ConsumidorFooter />
    </>
  );
}
