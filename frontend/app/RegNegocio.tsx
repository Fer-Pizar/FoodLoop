import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Modal, Pressable, Alert,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold,} from "@expo-google-fonts/comfortaa";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerNegocio } from "../src/api/auth";

const { width } = Dimensions.get("window");

const RED = "#D82A2A";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const PANEL_GRAY = "#BDBDBD";
const INPUT_BG = "#F2F2F2";
const BORDER_RED = "#cc2424ff";
const LINK_BLUE = "#2F80ED";

const CATEGORIES = [
  "Panadería",
  "Restaurante",
  "Cafetería",
  "Supermercado",
  "Comida Rápida",
];

export default function RegNegocio() {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState<string>("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [catOpen, setCatOpen] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [fontsLoaded] = useFonts({ Comfortaa_400Regular, Comfortaa_700Bold });
  if (!fontsLoaded) return null;

  const canSubmit =
    !!name.trim() &&
    !!email.trim() &&
    !!phone.trim() &&
    !!address.trim() &&
    !!category.trim() &&
    !!pass.trim() &&
    !!confirm.trim() &&
    pass === confirm;

  const handleRegister = async () => {
    try {
      if (!canSubmit) return;

      const resp = await registerNegocio({
        nombre: name,
        email,
        password: pass,
        telefono: phone || undefined,
        direccion: address || undefined,
        categoria: category || undefined,
      });

      if (resp?.access_token) {
        await AsyncStorage.setItem("foodloop_token", resp.access_token);
      }

      setSuccessVisible(true);

      setTimeout(() => {
        setSuccessVisible(false);
        router.replace("/");
      }, 2000);
    } catch (e: any) {
      Alert.alert(
        "Error",
        e?.message || "No se pudo registrar el negocio. Inténtalo de nuevo."
      );
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
          <TouchableOpacity
            style={styles.back}
            onPress={() => router.back()}
            activeOpacity={0.9}
          >
            <Ionicons name="arrow-back" size={20} color={WHITE} />
            <Text style={styles.backText}>Atrás</Text>
          </TouchableOpacity>

          <ScrollView
            contentContainerStyle={{ paddingBottom: 28 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.grayPanel}>
              <Text style={styles.title}>
                Registra tu{"\n"}negocio
              </Text>

              {/* Nombre */}
              <Text style={styles.label}>NOMBRE</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  style={styles.input}
                />
              </View>

              {/* Email */}
              <Text style={styles.label}>EMAIL</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  style={styles.input}
                  autoCapitalize="none"
                  keyboardType="email-address"
                />
              </View>

              {/* Teléfono */}
              <Text style={styles.label}>TELÉFONO</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={phone}
                  onChangeText={setPhone}
                  style={styles.input}
                  keyboardType="phone-pad"
                />
              </View>

              {/* Dirección */}
              <Text style={styles.label}>DIRECCIÓN</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={address}
                  onChangeText={setAddress}
                  style={styles.input}
                />
              </View>

              {/* Categoría */}
              <Text style={styles.label}>CATEGORÍA</Text>
              <TouchableOpacity
                activeOpacity={0.9}
                style={styles.selectTrigger}
                onPress={() => setCatOpen(true)}
              >
                <Text
                  style={[
                    styles.selectText,
                    { color: category ? "#333" : "#6E6E6E" },
                  ]}
                >
                  {category || "Selecciona una categoría"}
                </Text>
                <Ionicons name="chevron-down" size={18} color="#6E6E6E" />
              </TouchableOpacity>

              <Text style={styles.label}>CONTRASEÑA</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={pass}
                  onChangeText={setPass}
                  style={[styles.input, { flex: 1 }]}
                  secureTextEntry={!showPass} 
                />
                <TouchableOpacity
                  onPress={() => setShowPass(!showPass)}
                  style={styles.eyeBtn}
                >
                  <Ionicons
                    name={showPass ? "eye" : "eye-off"} 
                    size={22}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>

              <Text style={styles.label}>CONFIRMAR CONTRASEÑA</Text>
              <View style={styles.inputOutline}>
                <TextInput
                  value={confirm}
                  onChangeText={setConfirm}
                  style={[styles.input, { flex: 1 }]}
                  secureTextEntry={!showConfirm} 
                />
                <TouchableOpacity
                  onPress={() => setShowConfirm(!showConfirm)}
                  style={styles.eyeBtn}
                >
                  <Ionicons
                    name={showConfirm ? "eye" : "eye-off"} 
                    size={22}
                    color="#777"
                  />
                </TouchableOpacity>
              </View>

              {/* CTA */}
              <TouchableOpacity
                style={[styles.primaryBtn, { opacity: canSubmit ? 1 : 0.6 }]}
                activeOpacity={0.9}
                onPress={handleRegister}
                disabled={!canSubmit}
              >
                <Text style={styles.primaryText}>Registrarse</Text>
              </TouchableOpacity>

              {/* Link a Login */}
              <Text style={styles.helper}>
                Ya tienes cuenta?{" "}
                <Text style={styles.link} onPress={() => router.push("/login")}>
                  Inicia Sesión
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>

      <Modal
        visible={catOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setCatOpen(false)}
      >
        <Pressable
          style={styles.modalBackdrop}
          onPress={() => setCatOpen(false)}
        >
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Selecciona una categoría</Text>
            <ScrollView
              contentContainerStyle={{ paddingBottom: 8 }}
              showsVerticalScrollIndicator={false}
              style={{ maxHeight: 360 }}
            >
              {CATEGORIES.map((c) => (
                <TouchableOpacity
                  key={c}
                  style={styles.option}
                  activeOpacity={0.85}
                  onPress={() => {
                    setCategory(c);
                    setCatOpen(false);
                  }}
                >
                  <Text style={styles.optionText}>{c}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setCatOpen(false)}
            >
              <Text style={styles.modalCloseText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>

      <Modal
        visible={successVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setSuccessVisible(false)}
      >
        <View style={styles.successBackdrop}>
          <View style={styles.successCard}>
            <Ionicons name="checkmark-circle" size={64} color="#4BB543" />
            <Text style={styles.successTitle}>
              Cuenta registrada exitosamente!
            </Text>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const RADIUS = 26;
const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT },
  container: { flex: 1, backgroundColor: LIGHT, paddingHorizontal: 16 },
  back: {
    alignSelf: "flex-start",
    backgroundColor: RED,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 22,
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  backText: {
    color: WHITE,
    fontSize: 14,
    fontFamily: "Comfortaa_700Bold",
  },
  grayPanel: {
    backgroundColor: PANEL_GRAY,
    width: width - 24,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    padding: 20,
  },
  title: {
    fontFamily: "Comfortaa_700Bold",
    fontSize: 31,
    lineHeight: 32,
    color: WHITE,
    textAlign: "center",
    marginBottom: 14,
  },
  label: {
    marginTop: 10,
    marginBottom: 6,
    color: WHITE,
    opacity: 0.95,
    letterSpacing: 1.2,
    fontSize: 12,
    fontFamily: "Comfortaa_700Bold",
  },
  inputOutline: {
    width: "100%",
    height: 48,
    backgroundColor: INPUT_BG,
    borderRadius: RADIUS,
    borderWidth: 2,
    borderColor: BORDER_RED,
    paddingHorizontal: 14,
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row", 
    alignItems: "center",
  },
  input: {
    color: "#333",
    fontSize: 17,
    fontFamily: "Comfortaa_400Regular",
    textAlign: "left", 
    flex: 1,           
    paddingLeft: 2,
  },
  eyeBtn: {
    padding: 4,
  },
  selectTrigger: {
    width: "100%",
    height: 48,
    backgroundColor: INPUT_BG,
    borderRadius: RADIUS,
    borderWidth: 2,
    borderColor: BORDER_RED,
    paddingHorizontal: 14,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  selectText: {
    fontFamily: "Comfortaa_400Regular",
    fontSize: 17,
  },
  primaryBtn: {
    marginTop: 12,
    width: "100%",
    height: 52,
    borderRadius: 26,
    backgroundColor: RED,
    alignItems: "center",
    justifyContent: "center",
  },
  primaryText: {
    color: WHITE,
    fontSize: 16,
    fontFamily: "Comfortaa_700Bold",
  },
  helper: {
    textAlign: "center",
    marginTop: 12,
    color: WHITE,
    opacity: 0.95,
    fontSize: 13,
    fontFamily: "Comfortaa_400Regular",
  },
  link: {
    color: LINK_BLUE,
    textDecorationLine: "underline",
    fontFamily: "Comfortaa_700Bold",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalCard: {
    width: "100%",
    backgroundColor: WHITE,
    borderRadius: 16,
    padding: 16,
  },
  modalTitle: {
    fontFamily: "Comfortaa_700Bold",
    fontSize: 16,
    color: "#333",
    marginBottom: 10,
    textAlign: "center",
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  optionText: {
    fontFamily: "Comfortaa_400Regular",
    fontSize: 15,
    color: "#333",
  },
  modalClose: {
    alignSelf: "center",
    marginTop: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 18,
    backgroundColor: LIGHT,
  },
  modalCloseText: {
    fontFamily: "Comfortaa_700Bold",
    color: "#555",
  },
  successBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },
  successCard: {
    width: "80%",
    backgroundColor: WHITE,
    borderRadius: 20,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  successTitle: {
    marginTop: 12,
    fontFamily: "Comfortaa_700Bold",
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
});
