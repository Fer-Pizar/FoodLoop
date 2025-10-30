// components/productos/EditProductModal.tsx
import React, { useEffect, useMemo, useState } from "react";
import { View, TextInput, TouchableOpacity, ScrollView, Platform, Image, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import T from "../common/T";
import TBold from "../common/TBold";
import { toAbsoluteUrl } from "../../src/api/client";
import { type Producto } from "../../src/api/producto";

const RED = "#d11212ff";

type SaveOptions = {
  /** si pasas un string => reemplazar con esa imagen  */
  replaceImageUri?: string;
  /** si true => quitar imagen en el backend */
  removeImage?: boolean;
};

export default function EditProductModal({
  producto,
  onCancel,
  onSave,
}: {
  producto: Producto;
  onCancel: () => void;
  onSave: (
    payload: {
      nombre: string;
      descripcion?: string | null;
      precio_base: number;
      precio_actual?: number | null;
      cantidad_disponible?: number;
      fecha_vencimiento?: string | null;
      estado?: boolean;
    },
    options?: SaveOptions
  ) => Promise<void> | void;
}) {
  const { top } = useSafeAreaInsets();
  const [saving, setSaving] = useState(false);

  // Imagen actual absoluta (si existe en DB)
  const currentImageAbs = useMemo(() => toAbsoluteUrl(producto.imagen_url) ?? undefined, [producto.imagen_url]);

  // Estado de imagen en edición
  // - undefined => conservar
  // - string (uri) => reemplazar
  // - null => quitar
  const [imageState, setImageState] = useState<string | null | undefined>(undefined);

  const [form, setForm] = useState({
    nombre: "",
    descripcion: "",
    precio_base: "",
    precio_actual: "",
    cantidad_disponible: "",
    fecha_vencimiento: "",
    estado: true,
  });

  useEffect(() => {
    setForm({
      nombre: producto.nombre ?? "",
      descripcion: producto.descripcion ?? "",
      precio_base: String(producto.precio_base ?? ""),
      precio_actual: producto.precio_actual != null ? String(producto.precio_actual) : "",
      cantidad_disponible: producto.cantidad_disponible != null ? String(producto.cantidad_disponible) : "",
      fecha_vencimiento: producto.fecha_vencimiento ? new Date(producto.fecha_vencimiento).toISOString().slice(0, 10) : "",
      estado: producto.estado !== false,
    });
    setImageState(undefined); // por defecto conservar
  }, [producto]);

  const pickImage = async () => {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== "granted") {
      alert("Activa el permiso de galería para elegir una imagen 📷");
      return;
    }
    const r = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
    });
    if (!r.canceled && r.assets?.[0]?.uri) {
      setImageState(r.assets[0].uri); // reemplazar
    }
  };

  const keepImage = () => setImageState(undefined);
  const removeImage = () => setImageState(null);
  const clearPicked = () => setImageState(undefined);

  const submit = async () => {
    const nombre = form.nombre.trim();
    const precio_base = Number(form.precio_base);
    const precio_actual = form.precio_actual ? Number(form.precio_actual) : null;
    const cantidad_disponible = form.cantidad_disponible ? Number(form.cantidad_disponible) : 0;

    if (!nombre) return alert("Ingresa el nombre");
    if (isNaN(precio_base) || precio_base < 0) return alert("Precio base inválido (≥ 0)");
    if (precio_actual !== null && (isNaN(precio_actual) || precio_actual < 0)) return alert("Precio actual inválido (≥ 0 o vacío)");
    if (precio_actual !== null && precio_actual > precio_base) return alert("El precio actual no puede ser mayor al base");
    if (isNaN(cantidad_disponible) || cantidad_disponible < 0) return alert("Stock inválido (≥ 0)");

    const fecha_vencimiento = form.fecha_vencimiento ? new Date(form.fecha_vencimiento).toISOString() : null;

    try {
      setSaving(true);
      const options: SaveOptions = {};
      if (imageState === null) options.removeImage = true;          // quitar
      if (typeof imageState === "string") options.replaceImageUri = imageState; // reemplazar

      await onSave(
        {
          nombre,
          descripcion: form.descripcion?.trim() ? form.descripcion.trim() : null,
          precio_base,
          precio_actual,
          cantidad_disponible,
          fecha_vencimiento,
          estado: form.estado,
        },
        options
      );
    } finally {
      setSaving(false);
    }
  };

  // ¿Qué imagen mostramos en el preview?
  const previewUri =
    imageState === null
      ? undefined // el usuario pidió quitar
      : typeof imageState === "string"
      ? imageState // nueva elegida
      : currentImageAbs; // conservar la actual

  return (
    <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)", paddingTop: top + 30 }}>
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={{ flexGrow: 1, justifyContent: "center", padding: 16 }}>
        <View style={{ backgroundColor: "#fff", borderRadius: 14, padding: 16, shadowColor: "#000", shadowOpacity: 0.2, shadowRadius: 5, elevation: 5 }}>
          {/* Header */}
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
            <TBold style={{ fontSize: 16 }}>Editar producto</TBold>
            <TouchableOpacity onPress={onCancel}>
              <Ionicons name="close" size={22} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Imagen */}
          <View style={{ marginBottom: 12 }}>
            <T style={{ marginBottom: 6, opacity: 0.8 }}>Imagen</T>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
              <TouchableOpacity
                onPress={pickImage}
                activeOpacity={0.85}
                style={{ backgroundColor: "#f6f7f9", borderWidth: 1, borderColor: "#e5e7eb", borderRadius: 10, paddingVertical: 10, paddingHorizontal: 12 }}
              >
                <TBold style={{ fontSize: 14, color: RED }}>Cambiar</TBold>
              </TouchableOpacity>

              {previewUri ? (
                <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
                  <Image source={{ uri: previewUri }} style={{ width: 64, height: 64, borderRadius: 8, backgroundColor: "#eee" }} />
                  {/* Botones imagen */}
                  {typeof imageState === "string" ? (
                    <TouchableOpacity onPress={clearPicked} style={{ padding: 6 }}>
                      <T style={{ color: "#ef4444" }}>Descartar nueva</T>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity onPress={removeImage} style={{ padding: 6 }}>
                      <T style={{ color: "#ef4444" }}>Quitar</T>
                    </TouchableOpacity>
                  )}
                </View>
              ) : (
                <T style={{ opacity: 0.6 }}>Sin imagen</T>
              )}
            </View>

            {/* Mostrar “Conservar actual” si el usuario marcó quitar o eligió una nueva */}
            {(imageState === null || typeof imageState === "string") && currentImageAbs ? (
              <TouchableOpacity onPress={keepImage} style={{ marginTop: 8 }}>
                <T style={{ color: "#2563eb" }}>Conservar imagen actual</T>
              </TouchableOpacity>
            ) : null}
          </View>

          {/* Campos */}
          <Field label="Nombre del producto" value={form.nombre} onChangeText={(v) => setForm((s) => ({ ...s, nombre: v }))} />
          <Field label="Descripción (opcional)" value={form.descripcion} onChangeText={(v) => setForm((s) => ({ ...s, descripcion: v }))} multiline />
          <Field label="Precio base (Bs) *" keyboardType="numeric" value={form.precio_base} onChangeText={(v) => setForm((s) => ({ ...s, precio_base: v }))} />
          <Field label="Precio actual (Bs) — opcional (≤ base)" keyboardType="numeric" value={form.precio_actual} onChangeText={(v) => setForm((s) => ({ ...s, precio_actual: v }))} />
          <Field label="Stock disponible" keyboardType="numeric" value={form.cantidad_disponible} onChangeText={(v) => setForm((s) => ({ ...s, cantidad_disponible: v }))} />
          <Field label="Fecha de vencimiento (yyyy-mm-dd)" placeholder="2025-12-31" value={form.fecha_vencimiento} onChangeText={(v) => setForm((s) => ({ ...s, fecha_vencimiento: v }))} />

          {/* Estado */}
          <View style={{ marginBottom: 12, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <T style={{ opacity: 0.8 }}>Estado</T>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
              <T style={{ opacity: 0.7 }}>{form.estado ? "Activo" : "Inactivo"}</T>
              <Switch value={form.estado} onValueChange={(v) => setForm((s) => ({ ...s, estado: v }))} />
            </View>
          </View>

          <TouchableOpacity
            disabled={saving}
            onPress={submit}
            style={{ backgroundColor: RED, paddingVertical: 10, borderRadius: 10, alignItems: "center", marginTop: 8, opacity: saving ? 0.7 : 1 }}
          >
            <TBold style={{ color: "#fff" }}>{saving ? "Guardando…" : "Guardar cambios"}</TBold>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChangeText: (t: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "numeric";
  multiline?: boolean;
}) {
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
