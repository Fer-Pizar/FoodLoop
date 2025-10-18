// File: FoodLoop/frontend/app/RegConsumidor.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";

// <-- IMPORTANT: this is the auth helper that posts to /auth/register
import { registerUser } from "../src/api/auth";

const { width } = Dimensions.get("window");

const RED = "#d11212ff";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const INPUT_RED = "rgba(237, 234, 234, 0.67)";
const GRAY_TEXT = "#EEEEEE";
const DISABLED_BTN = "#CFCFCF";
const LINK_BLUE = "#2F80ED";

export default function RegConsumidor() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");

  // default: passwords are hidden → show slash icon (eye-off)
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) return null;

  const canSubmit =
    !!name.trim() &&
    !!email.trim() &&
    !!pass.trim() &&
    !!confirm.trim() &&
    pass === confirm;

  const handleRegister = async () => {
    if (!canSubmit || loading) return;
    setMsg("");
    try {
      setLoading(true);
      // Pass confirm password too (trimmed)
      const res = await registerUser(
        name.trim(),
        email.trim(),
        pass.trim(),
        confirm.trim()
      );
      if (res?.ok) {
        setMsg("¡Cuenta creada! Redirigiendo…");
        setTimeout(() => router.push("/login"), 1000);
      } else {
        setMsg("No se pudo crear la cuenta.");
      }
    } catch (err: any) {
      const text =
        err?.response?.data?.message || err?.message || "Error al registrarse";
      setMsg(Array.isArray(text) ? text.join(", ") : text);
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.select({ ios: "padding", android: undefined })}
      >
        <View style={[styles.container, { paddingTop: insets.top + 8 }]}>
          {/* 🔙 Back */}
          <TouchableOpacity
            style={styles.back}
            onPress={() => router.back()}
            activeOpacity={0.9}
          >
            <Ionicons name="arrow-back" size={20} color={WHITE} />
            <Text style={styles.backText}>Atrás</Text>
          </TouchableOpacity>

          <ScrollView
            contentContainerStyle={{ alignItems: "center", paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.redPanel}>
              <Text style={styles.title}>Crear una{"\n"}cuenta</Text>

              {!!msg && (
                <Text
                  style={{
                    color: WHITE,
                    marginBottom: 8,
                    textAlign: "center",
                    fontFamily: "Comfortaa_700Bold",
                  }}
                >
                  {msg}
                </Text>
              )}

              {/* Nombre */}
              <Text style={styles.label}>NOMBRE</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  value={name}
                  onChangeText={setName}
                  placeholder=""
                  placeholderTextColor={GRAY_TEXT}
                  style={styles.input}
                  autoCapitalize="words"
                />
              </View>

              {/* Email */}
              <Text style={styles.label}>EMAIL</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  value={email}
                  onChangeText={setEmail}
                  placeholder=""
                  placeholderTextColor={GRAY_TEXT}
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                />
              </View>

              {/* Contraseña */}
              <Text style={styles.label}>CONTRASEÑA</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  value={pass}
                  onChangeText={setPass}
                  placeholder=""
                  placeholderTextColor={GRAY_TEXT}
                  style={styles.input}
                  secureTextEntry={!showPw} // hidden by default
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={() => setShowPw((s) => !s)}
                  activeOpacity={0.7}
                  accessibilityLabel="Mostrar u ocultar contraseña"
                >
                  {/* show slash (eye-off) when hidden; open eye when visible */}
                  <Ionicons
                    name={showPw ? "eye" : "eye-off"}
                    size={20}
                    color="#7A7A7A"
                  />
                </TouchableOpacity>
              </View>

              {/* Confirmar */}
              <Text style={styles.label}>CONFIRMAR CONTRASEÑA</Text>
              <View style={styles.inputWrap}>
                <TextInput
                  value={confirm}
                  onChangeText={setConfirm}
                  placeholder=""
                  placeholderTextColor={GRAY_TEXT}
                  style={styles.input}
                  secureTextEntry={!showPw2}
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.eyeBtn}
                  onPress={() => setShowPw2((s) => !s)}
                  activeOpacity={0.7}
                  accessibilityLabel="Mostrar u ocultar confirmación de contraseña"
                >
                  <Ionicons
                    name={showPw2 ? "eye" : "eye-off"}
                    size={20}
                    color="#7A7A7A"
                  />
                </TouchableOpacity>
              </View>

              {/* Botón */}
              <TouchableOpacity
                style={[
                  styles.primaryBtn,
                  { backgroundColor: canSubmit ? WHITE : DISABLED_BTN },
                ]}
                activeOpacity={0.9}
                onPress={handleRegister}
                disabled={!canSubmit || loading}
              >
                <Text
                  style={[
                    styles.primaryText,
                    { color: canSubmit ? RED : "#7A7A7A" },
                  ]}
                >
                  {loading ? "Creando…" : "Registrarse"}
                </Text>
              </TouchableOpacity>

              {/* Link Login */}
              <Text style={styles.helper}>
                ¿Ya tienes cuenta?{" "}
                <Text style={styles.link} onPress={() => router.push("/login")}>
                  Inicia Sesión
                </Text>
              </Text>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: -3,
  },
  backText: {
    color: WHITE,
    fontSize: 14,
    fontFamily: "Comfortaa_700Bold",
  },

  redPanel: {
    width: width - 24,
    backgroundColor: RED,
    borderRadius: 28,
    padding: 20,
  },

  title: {
    fontFamily: "Comfortaa_700Bold",
    fontSize: 37,
    lineHeight: 36,
    color: WHITE,
    textAlign: "center",
    marginBottom: 12,
  },

  label: {
    marginTop: 10,
    marginBottom: 6,
    color: WHITE,
    opacity: 0.9,
    letterSpacing: 1.2,
    fontSize: 12,
    fontFamily: "Comfortaa_700Bold",
  },

  inputWrap: {
    width: "100%",
    height: 50,
    backgroundColor: INPUT_RED,
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 14,
    marginBottom: 6,
    position: "relative",
  },
  input: {
    color: "#030000ff",
    fontSize: 17,
    fontFamily: "Comfortaa_400Regular",
    paddingRight: 40, 
  },
  eyeBtn: {
    position: "absolute",
    right: 12,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  primaryBtn: {
    width: "100%",
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },
  primaryText: {
    fontFamily: "Comfortaa_700Bold",
    fontSize: 16,
  },

  helper: {
    textAlign: "center",
    marginTop: 14,
    color: WHITE,
    opacity: 0.9,
    fontSize: 13,
    fontFamily: "Comfortaa_400Regular",
  },
  link: {
    color: LINK_BLUE,
    textDecorationLine: "underline",
    fontFamily: "Comfortaa_700Bold",
  },
});
