import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView, Platform, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import T from "../common/T";
import TBold from "../common/TBold";

const RED = "#d11212ff";

export default function NewProductModal({
  onCancel,
  onSave,
}: {
  onCancel: () => void;
  onSave: (
    payload: {
      nombre: string;
      descripcion?: string | null;
      precio_base: number;
      cantidad_disponible?: number;
      fecha_vencimiento?: string | null;
      estado?: boolean;
    },
    imageUri?: string
  ) => Promise<void> | void;
}) {
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio_base: "",
    cantidad_disponible: "",
    fecha_vencimiento: "",
    estado: true,
  });

  // ✅ SOLO UNA IMAGEN
  const [imageUri, setImageUri] = useState<string | undefined>(undefined);

  const pickFromGallery = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== "granted") return alert("Activa el permiso de galería para elegir una imagen 📷");
    const r = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.9 });
    if (!r.canceled && r.assets?.[0]?.uri) setImageUri(r.assets[0].uri); // reemplaza la anterior
  };

  const pickFromCamera = async () => {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (perm.status !== "granted") return alert("Activa el permiso de cámara para tomar una foto 📸");
    const r = await ImagePicker.launchCameraAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.9 });
    if (!r.canceled && r.assets?.[0]?.uri) setImageUri(r.assets[0].uri);
  };

  const clearImage = () => setImageUri(undefined);

  const submit = async () => {
    const nombre = form.nombre.trim();
    const precio_base = Number(form.precio_base);
    const cantidad_disponible = form.cantidad_disponible ? Number(form.cantidad_disponible) : 0;

    // ✅ Validaciones (sin precio_actual)
    if (!nombre) return alert("Ingresa el nombre");
    if (isNaN(precio_base) || precio_base < 0) return alert("Precio base inválido (debe ser ≥ 0)");
    if (isNaN(cantidad_disponible) || cantidad_disponible < 0) return alert("Stock inválido (debe ser ≥ 0)");

    const fecha_vencimiento = form.fecha_vencimiento ? new Date(form.fecha_vencimiento).toISOString() : null;

    try {
      setSaving(true);
      await onSave(
        {
          nombre,
          descripcion: form.descripcion?.trim() ? form.descripcion.trim() : null,
          precio_base,
          cantidad_disponible,
          fecha_vencimiento,
          estado: form.estado,
        },
        imageUri
      );
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.35)", justifyContent: "center", padding: 16 }}>
      <View style={{ backgroundColor: "#fff", borderRadius: 14, padding: 16, maxHeight: "88%" }}>
        {/* Header modal */}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
          <TBold style={{ fontSize: 16 }}>Nuevo Producto</TBold>
          <TouchableOpacity onPress={onCancel} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
            <Ionicons name="close" size={20} color="#6b7280" />
          </TouchableOpacity>
        </View>

        <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ paddingBottom: 8 }}>
          {/* Imagen (UNA SOLA) */}
          <View style={{ marginBottom: 12 }}>
            <T style={{ marginBottom: 6, opacity: 0.8 }}>Imagen (opcional)</T>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
              <TouchableOpacity onPress={pickFromCamera} activeOpacity={0.85} style={{ backgroundColor: "#f6f7f9", borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 }}>
                <TBold style={{ fontSize: 14, color: RED }}>Tomar foto</TBold>
              </TouchableOpacity>
              <TouchableOpacity onPress={pickFromGallery} activeOpacity={0.85} style={{ backgroundColor: "#f6f7f9", borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 }}>
                <TBold style={{ fontSize: 14, color: RED }}>{imageUri ? "Cambiar imagen" : "Elegir de la galería"}</TBold>
              </TouchableOpacity>

              {imageUri ? (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Image source={{ uri: imageUri }} style={{ width: 64, height: 64, borderRadius: 8, backgroundColor: "#eee" }} />
                  <TouchableOpacity onPress={clearImage} style={{ padding: 6 }}>
                    <T style={{ color: "#ef4444" }}>Quitar</T>
                  </TouchableOpacity>
                </View>
              ) : (
                <T style={{ opacity: 0.6 }}>Sin imagen</T>
              )}
            </View>
          </View>

          {/* Campos */}
          <Field label="Nombre del producto" value={form.nombre} onChangeText={(v) => setForm((s) => ({ ...s, nombre: v }))} />

          {/* Descripción multilinea */}
          <Field label="Descripción (opcional)" value={form.descripcion} onChangeText={(v) => setForm((s) => ({ ...s, descripcion: v }))} multiline />

          <Field label="Precio base (Bs) *" keyboardType="numeric" value={form.precio_base} onChangeText={(v) => setForm((s) => ({ ...s, precio_base: v }))} />

          <Field label="Stock disponible" keyboardType="numeric" value={form.cantidad_disponible} onChangeText={(v) => setForm((s) => ({ ...s, cantidad_disponible: v }))} />

          <Field label="Fecha de vencimiento (yyyy-mm-dd)" placeholder="2025-12-31" value={form.fecha_vencimiento} onChangeText={(v) => setForm((s) => ({ ...s, fecha_vencimiento: v }))} />

          {/* Aviso: descuento automático por días */}
          <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-start", backgroundColor: "#f5faff", borderWidth: 1, borderColor: "#e6f0ff", padding: 10, borderRadius: 10, marginTop: 4 }}>
            <Ionicons name="information-circle-outline" size={18} color="#2563eb" style={{ marginTop: 1 }} />
            <T style={{ fontSize: 12, lineHeight: 16, color: "#1e3a8a" }}>
              Los descuentos se calculan automáticamente según los días restantes para la fecha de vencimiento. No necesitas ingresar un precio con descuento. 💡
            </T>
          </View>

          {/* Estado */}
          <View style={{ marginTop: 12, marginBottom: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <T style={{ opacity: 0.8 }}>Estado</T>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <T style={{ opacity: 0.7 }}>{form.estado ? "Activo" : "Inactivo"}</T>
              <Switch value={form.estado} onValueChange={(v) => setForm((s) => ({ ...s, estado: v }))} />
            </View>
          </View>
        </ScrollView>

        <TouchableOpacity disabled={saving} onPress={submit} style={{ backgroundColor: RED, paddingVertical: 10, borderRadius: 10, alignItems: "center", marginTop: 8, opacity: saving ? 0.7 : 1 }}>
          <TBold style={{ color: "#fff" }}>{saving ? "Guardando…" : "Guardar"}</TBold>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Field(props: { label: string; value: string; onChangeText: (t: string) => void; placeholder?: string; keyboardType?: "default" | "numeric"; multiline?: boolean; }) {
  return (
    <View style={{ marginBottom: 12 }}>
      <T style={{ marginBottom: 6, opacity: 0.8 }}>{props.label}</T>
      <TextInput
        value={props.value}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        keyboardType={props.keyboardType ?? "default"}
        placeholderTextColor="#bdbdbd"
        multiline={props.multiline}
        style={{
          borderWidth: 1,
          borderColor: "#e5e7eb",
          backgroundColor: "#f6f7f9",
          borderRadius: 10,
          paddingHorizontal: 12,
          paddingVertical: Platform.select({ ios: 12, android: props.multiline ? 12 : 8 }),
          fontSize: 14,
          fontFamily: "Comfortaa_400Regular",
          minHeight: props.multiline ? 90 : undefined,
          textAlignVertical: props.multiline ? "top" : "auto",
        }}
      />
    </View>
  );
}