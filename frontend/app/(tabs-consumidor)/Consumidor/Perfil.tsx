import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
  Switch,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useConsumidor } from "@/hooks/useConsumidor";

export default function PerfilConsumidorScreen() {
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
          if (i === 0) await takePhoto();
          else if (i === 1) await pickFromGallery();
          else if (i === 2) await removeAvatar();
        } catch (e: any) {
          Alert.alert("Error", e?.message ?? "No se pudo actualizar la foto");
        }
      }
    );
  };

  if (loading && !me) {
    return (
      <View style={[styles.container, styles.center]}>
        <ActivityIndicator size="large" />
        <Text style={{ marginTop: 8 }}>Cargando perfil…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center, { gap: 10 }]}>
        <Text style={{ color: "red" }}>{error}</Text>
        <TouchableOpacity onPress={refresh} style={styles.retry}>
          <Text>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={styles.container}>
        {/* ======= TOP BAR (roja) ======= */}
        <View style={styles.topbar}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.topbarTitle}>Profile</Text>
          <TouchableOpacity onPress={() => router.push("../share")} style={styles.iconBtn}>
            <Ionicons name="share-social-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ======= HEADER con avatar + nombre + email ======= */}
        <View style={styles.headerCard}>
          <View style={styles.avatarWrap}>
            {photo ? (
              <Image source={{ uri: photo }} style={styles.avatar} />
            ) : (
              <View style={[styles.avatar, { alignItems: "center", justifyContent: "center", backgroundColor: "#e6e6e6" }]}>
                <Ionicons name="person" size={40} color="#9a9a9a" />
              </View>
            )}

            {/* Lápiz flotante */}
            <TouchableOpacity style={styles.fab} onPress={openPhotoMenu}>
              <MaterialIcons name="edit" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={styles.name}>{me?.nombre ?? "Usuario"}</Text>
          <Text style={styles.email}>{me?.email ?? "—"}</Text>
        </View>

        {/* ======= Sección: General Settings ======= */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>General Settings</Text>
        </View>

        {/* Row: Mode (switch dummy por ahora) */}
        <View style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="contrast-outline" size={20} color="#4a4a4a" />
            <View style={{ marginLeft: 12 }}>
              <Text style={styles.rowTitle}>Mode</Text>
              <Text style={styles.rowSubtitle}>Dark & Light</Text>
            </View>
          </View>
          <Switch value={false} onValueChange={() => { /* TODO: theme */ }} />
        </View>

        {/* Row: Editar perfil -> navega al form */}
        <TouchableOpacity
          style={styles.row}
          onPress={() =>
            router.push("/(tabs-consumidor)/Consumidor/EditProfile")
          }
        >
          <View style={styles.rowLeft}>
            <Ionicons name="create-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Editar perfil</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>

        {/* Row: Registrar negocio (placeholder) */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("../(tabs-negocio)/Negocio/Registro")}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="storefront-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Registrar negocio</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>

        {/* ======= Sección: Information (placeholder) ======= */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionHeaderText}>Information</Text>
        </View>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="phone-portrait-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Acerca de FoodLoop</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="document-text-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Términos & Condiciones</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="shield-checkmark-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Privacy Policy</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.row}>
          <View style={styles.rowLeft}>
            <Ionicons name="share-social-outline" size={20} color="#4a4a4a" />
            <Text style={[styles.rowTitle, { marginLeft: 12 }]}>Share This App</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#9b9b9b" />
        </TouchableOpacity>
      </View>

      <ConsumidorFooter />
    </>
  );
}

const RED = "#d72626";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingBottom: 90,
  },
  center: { justifyContent: "center", alignItems: "center" },
  retry: { padding: 10, backgroundColor: "#eee", borderRadius: 10 },

  topbar: {
    backgroundColor: RED,
    paddingTop: 52,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  iconBtn: {
    padding: 8,
    borderRadius: 20,
  },
  topbarTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  headerCard: {
    alignItems: "center",
    paddingVertical: 18,
    backgroundColor: "#fff",
  },
  avatarWrap: { width: 95, height: 95, position: "relative" },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    borderWidth: 2,
    borderColor: "#e5e5e5",
  },
  fab: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: RED,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  name: { marginTop: 10, fontSize: 18, fontWeight: "800", color: "#222" },
  email: { marginTop: 2, fontSize: 13, color: "#666" },

  sectionHeader: {
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
  },
  sectionHeaderText: { color: "#8a8a8a", fontSize: 14, fontWeight: "700" },

  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#ececec",
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowTitle: { fontSize: 15, color: "#222", fontWeight: "600" },
  rowSubtitle: { fontSize: 12, color: "#9b9b9b", marginTop: 2 },
});
