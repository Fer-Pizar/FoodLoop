import React, { useMemo } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert, Switch,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { useActionSheet } from "@expo/react-native-action-sheet";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useConsumidor } from "@/hooks/useConsumidor";
import { useTheme } from "@/src/theme/ThemeProvider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function PerfilConsumidorScreen() {
  const router = useRouter();
  const { showActionSheetWithOptions } = useActionSheet();
  const { mode, setMode, isDark, colors } = useTheme();
  const switchValue = isDark;
  const toggleDark = () => setMode(isDark ? "light" : "dark");

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

  const photo = useMemo(() => {
  const raw = me?.foto_perfil;
    if (!raw) return undefined;
    if (raw.startsWith("http://") || raw.startsWith("https://")) {
      return raw;
    }

    return avatarUrl(raw);
  }, [me?.foto_perfil, avatarUrl]);


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

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(["user", "token"]);
    } catch {}
    finally {
      router.replace("/login");
    }
  };

  const confirmLogout = () => {
    Alert.alert(
      "Cerrar sesión",
      "¿Seguro que deseas cerrar sesión?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Sí, salir", style: "destructive", onPress: handleLogout },
      ],
      { cancelable: true }
    );
  };

  if (loading && !me) {
    return (
      <View style={[styles.container, styles.center, { backgroundColor: colors.bg }]}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={{ marginTop: 8, color: colors.text }}>Cargando perfil…</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.center, { gap: 10, backgroundColor: colors.bg }]}>
        <Text style={{ color: colors.text }}>{error}</Text>
        <TouchableOpacity onPress={refresh} style={[styles.retry, { backgroundColor: colors.muted }]}>
          <Text style={{ color: colors.text }}>Reintentar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <>
      <View style={[styles.container, { backgroundColor: colors.bg }]}>
        {/* ======= TOP BAR ======= */}
        <View style={[styles.topbar, { backgroundColor: colors.primary }]}>
          <TouchableOpacity onPress={() => router.back()} style={styles.iconBtn}>
            <Ionicons name="arrow-back" size={22} color="#fff" />
          </TouchableOpacity>
          <Text style={[styles.topbarTitle, { color: "#fff" }]}>Profile</Text>

          {/* 🔁 Reemplazado: icono de compartir -> icono de salir */}
          <TouchableOpacity onPress={confirmLogout} style={styles.iconBtn} accessibilityLabel="Cerrar sesión">
            {/* Puedes usar "exit-outline" o "log-out-outline" según tu set de Ionicons */}
            <Ionicons name="exit-outline" size={22} color="#fff" />
          </TouchableOpacity>
        </View>

        {/* ======= HEADER con avatar + nombre + email ======= */}
        <View style={[styles.headerCard, { backgroundColor: colors.card }]}>
          <View style={styles.avatarWrap}>
            {photo ? (
              <Image source={{ uri: photo }} style={[styles.avatar, { borderColor: colors.border }]} />
            ) : (
              <View
                style={[
                  styles.avatar,
                  {
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: colors.muted,
                    borderColor: colors.border,
                  },
                ]}
              >
                <Ionicons name="person" size={40} color={colors.icon} />
              </View>
            )}

            {/* Lápiz flotante */}
            <TouchableOpacity
              style={[styles.fab, { backgroundColor: colors.primary }]}
              onPress={openPhotoMenu}
              accessibilityRole="button"
              accessibilityLabel="Editar foto de perfil"
            >
              <MaterialIcons name="edit" size={16} color="#fff" />
            </TouchableOpacity>
          </View>

          <Text style={[styles.name, { color: colors.text }]}>{me?.nombre ?? "Usuario"}</Text>
          <Text style={[styles.email, { color: colors.subtext }]}>{me?.email ?? "—"}</Text>
        </View>

        {/* ======= Sección: General Settings ======= */}
        <View style={[styles.sectionHeader, { backgroundColor: colors.muted }]}>
          <Text style={[styles.sectionHeaderText, { color: colors.subtext }]}>General Settings</Text>
        </View>

        {/* Row: Mode */}
        <View
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="contrast-outline" size={20} color={colors.icon} />
            <View style={{ marginLeft: 12 }}>
              <Text style={[styles.rowTitle, { color: colors.text }]}>Mode</Text>
              <Text style={{ fontSize: 12, color: colors.subtext }}>Dark & Light</Text>
            </View>
          </View>
          <Switch value={switchValue} onValueChange={toggleDark} />
        </View>

        {/* Row: Editar perfil -> navega al form */}
        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
          onPress={() => router.push("/(tabs-consumidor)/Consumidor/EditProfile")}
          accessibilityRole="button"
          accessibilityLabel="Editar perfil"
        >
          <View style={styles.rowLeft}>
            <Ionicons name="create-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Editar perfil
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
          onPress={() => router.push("/RegNegocio")}
          accessibilityRole="button"
          accessibilityLabel="Registrar negocio"
        >
          <View style={styles.rowLeft}>
            <Ionicons name="storefront-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Registrar negocio
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        {/* ======= Sección: Information ======= */}
        <View style={[styles.sectionHeader, { backgroundColor: colors.muted }]}>
          <Text style={[styles.sectionHeaderText, { color: colors.subtext }]}>Information</Text>
        </View>

        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="phone-portrait-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Acerca de FoodLoop
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="document-text-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Términos & Condiciones
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="shield-checkmark-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Privacy Policy
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.row,
            { borderBottomColor: colors.border, backgroundColor: colors.card },
          ]}
        >
          <View style={styles.rowLeft}>
            <Ionicons name="share-social-outline" size={20} color={colors.icon} />
            <Text style={[styles.rowTitle, { marginLeft: 12, color: colors.text }]}>
              Share This App
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color={colors.chevron} />
        </TouchableOpacity>

        {/* 🔻 Se eliminó la sección "Cuenta" con el botón inferior de Cerrar sesión */}
      </View>

      <ConsumidorFooter />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 90,
  },
  center: { justifyContent: "center", alignItems: "center" },
  retry: { padding: 10, borderRadius: 10 },

  topbar: {
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
    fontSize: 20,
    fontWeight: "700",
  },

  headerCard: {
    alignItems: "center",
    paddingVertical: 18,
  },
  avatarWrap: { width: 95, height: 95, position: "relative" },
  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    borderWidth: 2,
  },
  fab: {
    position: "absolute",
    right: -2,
    bottom: -2,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
  },
  name: { marginTop: 10, fontSize: 18, fontWeight: "800" },
  email: { marginTop: 2, fontSize: 13 },

  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 8,
  },
  sectionHeaderText: {
    fontSize: 14,
    fontWeight: "700",
  },

  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  rowLeft: { flexDirection: "row", alignItems: "center" },
  rowTitle: { fontSize: 15, fontWeight: "600" },
  rowSubtitle: { fontSize: 12, marginTop: 2 },
});
