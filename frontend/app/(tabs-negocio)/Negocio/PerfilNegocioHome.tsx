import { useState } from "react";
import { View, Text, Modal, Pressable, Alert, ActivityIndicator, ScrollView, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { HeaderPerfil } from "../../../components/negocio/HeaderPerfil";
import { Atajos } from "../../../components/negocio/Atajos";
import { RowItem } from "../../../components/common/RowItem";
import { useComercioMe } from "../../../hooks/useComercio";
import { negocioApi } from "../../../src/api/negocio";
import { logout, toAbsoluteUrl } from "../../../src/api/client";

export default function PerfilNegocioHome() {
  const { data, loading, error, refetch } = useComercioMe();
  const [sheetOpen, setSheetOpen] = useState(false);
  const [uploading, setUploading] = useState(false);

  async function uploadAvatarFromUri(uri: string) {
    try {
      setUploading(true);
      await negocioApi.uploadAvatar(uri);
      await refetch();
      setSheetOpen(false);
      Alert.alert("Listo", "Foto actualizada");
    } catch (e: any) {
      Alert.alert("Error subiendo foto", e?.message ?? "Intenta de nuevo");
    } finally {
      setUploading(false);
    }
  }

  async function onPickFromCamera() {
    const perm = await ImagePicker.requestCameraPermissionsAsync();
    if (perm.status !== "granted") return Alert.alert("Permisos", "Activa el permiso de cámara.");
    const r = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
    });
    if (!r.canceled && r.assets?.[0]?.uri) await uploadAvatarFromUri(r.assets[0].uri);
  }

  async function onPickFromLibrary() {
    const perm = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (perm.status !== "granted") return Alert.alert("Permisos", "Activa el permiso de galería.");
    const r = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 0.9,
    });
    if (!r.canceled && r.assets?.[0]?.uri) await uploadAvatarFromUri(r.assets[0].uri);
  }

  async function onDeleteAvatar() {
    Alert.alert("Eliminar foto", "¿Seguro que quieres eliminar tu foto?", [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          try {
            setUploading(true);
            await negocioApi.deleteAvatar();
            await refetch();
            setSheetOpen(false);
            Alert.alert("Listo", "Foto eliminada");
          } catch (e: any) {
            Alert.alert("Error", e?.message ?? "No se pudo eliminar");
          } finally {
            setUploading(false);
          }
        },
      },
    ]);
  }

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
        <Text style={{ fontFamily: "Comfortaa_400Regular", marginTop: 8 }}>Cargando…</Text>
      </View>
    );

  if (error || !data)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 16 }}>
        <Text style={{ fontFamily: "Comfortaa_700Bold", marginBottom: 8, fontSize: 16 }}>
          No se pudo cargar el perfil 😵
        </Text>
        <Text style={{ fontFamily: "Comfortaa_400Regular", opacity: 0.7, marginBottom: 16 }}>
          {error ?? "Sin datos"}
        </Text>
        <TouchableOpacity
          onPress={() => router.replace("/login")}
          style={{
            backgroundColor: "#d11212ff",
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
        >
          <Text style={{ color: "#fff", fontFamily: "Comfortaa_700Bold" }}>Ir al inicio de sesión</Text>
        </TouchableOpacity>
      </View>
    );

  console.log("avatar->", toAbsoluteUrl(data.usuario?.fotoPerfil));

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderPerfil
        saludo="¡Hola"
        nombre={data.nombreNegocio}
        avatarUrl={toAbsoluteUrl(data.usuario?.fotoPerfil)}
        onBack={() => router.back()}
        onAvatarPress={() => setSheetOpen(true)}
      />

      <ScrollView>
        <Atajos
  onInfo={() => router.push("/Negocio/InformacionPersonal")}
  onProductos={() => router.push("/Negocio/MisProductos")}
  onHistorial={() => router.push("/Negocio/HistorialVentas")}
  onValidarRetiro={() => router.push("/Negocio/ValidarRetiro" as any)}
/>


        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <Text style={{ fontSize: 16, fontFamily: "Comfortaa_700Bold", marginVertical: 8 }}>Configuración</Text>
        </View>
        <RowItem
          icon="pricetags-outline"
          title="Reglas de Descuento"
          onPress={() => router.push("/Negocio/ReglasDescuento")}
        />
        
        <RowItem
          icon="exit-outline"
          title="Cerrar Sesión"
          onPress={async () => {
            await logout();
            router.replace("/login");
          }}
        />

      </ScrollView>

      <Modal visible={sheetOpen} transparent animationType="slide" onRequestClose={() => setSheetOpen(false)}>
        <Pressable
          style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}
          onPress={() => setSheetOpen(false)}
        >
          <View />
        </Pressable>

        <View
          style={{
            backgroundColor: "#fff",
            padding: 16,
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        >
          <View style={{ alignItems: "center", marginBottom: 8 }}>
            <View style={{ width: 40, height: 4, backgroundColor: "#ddd", borderRadius: 2 }} />
          </View>

          <Text style={{ fontFamily: "Comfortaa_700Bold", fontSize: 16, marginBottom: 8 }}>
            {uploading ? "Procesando…" : "Editar Foto"}
          </Text>

          <RowItem icon="camera-outline" title="Tomar una foto" onPress={uploading ? undefined : onPickFromCamera} />
          <RowItem icon="images-outline" title="Elegir de la galería" onPress={uploading ? undefined : onPickFromLibrary} />
          <RowItem icon="trash-outline" title="Eliminar foto" onPress={uploading ? undefined : onDeleteAvatar} />
          <View style={{ height: 16 }} />
        </View>
      </Modal>
    </View>
  );
}