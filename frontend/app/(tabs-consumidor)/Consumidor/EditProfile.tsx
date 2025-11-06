import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useConsumidor } from "@/hooks/useConsumidor";
import ConsumidorFooter from "@/components/ConsumidorFooter"; 

export default function EditProfile() {
  const router = useRouter();
  const { me, loading, saving, error, refresh, saveProfile } = useConsumidor();

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
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
        </View>
        <ConsumidorFooter /> 
      </>
    );
  }

  return (
    <>
      <View style={{ flex: 1, padding: 16, gap: 12, paddingBottom: 90 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>Editar Perfil</Text>

        {error ? (
          <View style={{ gap: 8 }}>
            <Text style={{ color: "red" }}>{error}</Text>
            <TouchableOpacity
              onPress={refresh}
              style={{ alignSelf: "flex-start", backgroundColor: "#eee", paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10 }}
            >
              <Text>Reintentar</Text>
            </TouchableOpacity>
          </View>
        ) : null}

        <Text style={{ fontSize: 14, color: "#666" }}>Nombre</Text>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder="Tu nombre"
          style={{ borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 12 }}
          autoCapitalize="words"
        />

        <Text style={{ fontSize: 14, color: "#666", marginTop: 8 }}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="tu@email.com"
          style={{ borderWidth: 1, borderColor: "#ddd", padding: 12, borderRadius: 12 }}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        <TouchableOpacity
          onPress={onSave}
          disabled={saving}
          style={{
            backgroundColor: saving ? "#ef9a9a" : "#e53935",
            padding: 14,
            borderRadius: 14,
            alignItems: "center",
            marginTop: 16,
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
