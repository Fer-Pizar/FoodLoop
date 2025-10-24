import { useEffect, useMemo, useState } from "react";
import { View, TextInput, TouchableOpacity, Alert, KeyboardAvoidingView, Platform, ActivityIndicator } from "react-native";
import { router } from "expo-router";
import { useComercioMe } from "../../../hooks/useComercio";
import HeaderSimple from "../../../components/common/HeaderSimple";
import T from "../../../components/common/T";
import TBold from "../../../components/common/TBold";

const FONT_REG = "Comfortaa_400Regular";
const FONT_BOLD = "Comfortaa_700Bold";
const RED = "#d11212ff";

export default function MisDatosPersonales() {
  const { data, loading, error, update } = useComercioMe();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!data) return;
    setNombre(data.nombreNegocio ?? "");
    setTelefono(data.telefono ?? "");
    setDireccion(data.direccion ?? "");
  }, [data]);

  const hasChanges = useMemo(() => {
    if (!data) return false;
    return (
      (nombre ?? "") !== (data.nombreNegocio ?? "") ||
      (telefono ?? "") !== (data.telefono ?? "") ||
      (direccion ?? "") !== (data.direccion ?? "")
    );
  }, [nombre, telefono, direccion, data]);

  const onGuardar = async () => {
    try {
      if (!nombre.trim()) return Alert.alert("Validación", "El nombre es obligatorio");
      if (!hasChanges) return Alert.alert("Sin cambios", "No hay cambios para guardar 🙂");
      setSaving(true);
      await update({
        nombreNegocio: nombre.trim(),
        telefono: telefono?.trim() || null,
        direccion: direccion?.trim() || null,
      });
      Alert.alert("Éxito", "Datos guardados ✅", [{ text: "OK", onPress: () => router.back() }]);
    } catch (e: any) {
      Alert.alert("Error", e?.message ?? "No se pudo guardar");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <T style={{ marginTop: 8 }}>Cargando datos…</T>
      </View>
    );
  }

  if (error || !data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <TBold style={{ marginBottom: 8 }}>No se pudo cargar el perfil 😵</TBold>
        <T style={{ opacity: 0.7, textAlign: "center" }}>{error ?? "Sin datos"}</T>
      </View>
    );
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: "padding", android: undefined })}
      style={{ flex: 1, backgroundColor: "#fff" }}
    >
      <HeaderSimple title="Mis Datos Personales" />

      <View style={{ padding: 16, gap: 14 }}>
        <TBold style={{ fontSize: 12 }}>NOMBRE</TBold>
        <TextInput
          value={nombre}
          onChangeText={setNombre}
          placeholder="Nombre del negocio"
          autoCapitalize="sentences"
          style={{ backgroundColor: "#f4f4f4", borderRadius: 8, padding: 12, fontFamily: FONT_REG }}
          placeholderTextColor="#9a9a9a"
        />

        <TBold style={{ fontSize: 12, marginTop: 8 }}>TELÉFONO</TBold>
        <TextInput
          value={telefono}
          onChangeText={setTelefono}
          keyboardType="phone-pad"
          placeholder="Teléfono"
          style={{ backgroundColor: "#f4f4f4", borderRadius: 8, padding: 12, fontFamily: FONT_REG }}
          placeholderTextColor="#9a9a9a"
        />

        <TBold style={{ fontSize: 12, marginTop: 8 }}>DIRECCIÓN</TBold>
        <TextInput
          value={direccion}
          onChangeText={setDireccion}
          placeholder="Dirección"
          style={{ backgroundColor: "#f4f4f4", borderRadius: 8, padding: 12, fontFamily: FONT_REG }}
          placeholderTextColor="#9a9a9a"
        />
      </View>

      <View style={{ flex: 1 }} />
      <View style={{ padding: 16 }}>
        <TouchableOpacity
          onPress={onGuardar}
          activeOpacity={0.8}
          disabled={!hasChanges || saving}
          style={{
            backgroundColor: !hasChanges || saving ? "#d6a" : RED,
            padding: 14,
            borderRadius: 16,
            alignItems: "center",
            opacity: !hasChanges || saving ? 0.7 : 1,
          }}
        >
          <TBold style={{ color: "#fff" }}>{saving ? "Guardando…" : "Guardar Datos"}</TBold>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
