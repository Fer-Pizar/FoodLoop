import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useConsumidor } from "@/hooks/useConsumidor";

export default function ProfileScreen() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();

  const {
    me,
    loading,
    error,
    refresh,
    takePhoto,
    pickFromGallery,
    removeAvatar,
    avatarUrl,
  } = useConsumidor();

  const photo = useMemo(
    () => (me?.foto_perfil ? avatarUrl(me.foto_perfil) : undefined),
    [me?.foto_perfil, avatarUrl]
  );

  const openPhotoMenu = () => {
    const options = ["Tomar una foto", "Elegir de la galería", "Eliminar foto", "Cancelar"];
    const destructiveButtonIndex = 2;
    const cancelButtonIndex = 3;

    showActionSheetWithOptions(
      { options, cancelButtonIndex, destructiveButtonIndex },
      async (i?: number) => {
        try {
          if (i === 0) {
            await takePhoto();
          } else if (i === 1) {
            await pickFromGallery();
          } else if (i === 2) {
            await removeAvatar();
          }
        } catch (e: any) {
          Alert.alert("Error", e?.message ?? "No se pudo actualizar la foto");
        }
      }
    );
  };

  if (loading && !me) {
    return (
      <View style={[styles.container, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 8 }}>Cargando perfil…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center", gap: 10 },
        ]}
      >
        <Text style={{ color: "red" }}>{error}</Text>
        <TouchableOpacity
          onPress={refresh}
          style={{ padding: 10, backgroundColor: "#eee", borderRadius: 10 }}
        >
          <Text>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          {/* Botón de retroceso */}
          <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </TouchableOpacity>

          {/* Saludo */}
          <Text style={styles.greeting}>¡Hola, {me?.nombre || "Usuario"}!</Text>

          {/* Foto de perfil (abre ActionSheet) */}
          <TouchableOpacity onPress={openPhotoMenu}>
            <Image
              source={photo ? { uri: photo } : require("@/assets/images/icon.png")}
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>

        {/* Línea separadora */}
        <View style={styles.separator} />

        {/* Información personal */}
        <View style={styles.section}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => router.push("./EditProfile")}
          >
            <Ionicons name="person-outline" size={20} color="#777" />
            <Text style={styles.optionText}>Información Personal</Text>
          </TouchableOpacity>
        </View>

        {/* Configuración */}
        <Text style={styles.subtitle}>Configuración</Text>
        <View style={styles.section}>
          <TouchableOpacity style={styles.option}>
            <Ionicons name="business-outline" size={20} color="#777" />
            <Text style={styles.optionText}>Registrar mi Negocio</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => router.push("/login")}>
            <Ionicons name="exit-outline" size={20} color="#777" />
            <Text style={styles.optionText}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ConsumidorFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingBottom: 90,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingBottom: 10,
  },
  backButton: {
    backgroundColor: "#ef0505",
    padding: 8,
    borderRadius: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: "#ccc",
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 25,
  },
  section: { backgroundColor: "#fff", marginBottom: 20 },
  subtitle: { fontWeight: "bold", fontSize: 16, marginBottom: 10, color: "#555" },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: { marginLeft: 10, fontSize: 15, color: "#333" },
});
