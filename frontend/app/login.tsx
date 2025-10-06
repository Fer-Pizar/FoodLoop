import { useState } from "react";
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";

const { width, height } = Dimensions.get("window");

const RED = "#d11212ff";
const LIGHT = "#F7F7F7";
const WHITE = "#FFFFFF";
const GRAY_TEXT = "#b5b5b5";
const INPUT_BG = "#F5F5F5";
const LINK_BLUE = "#2F80ED";

export default function LoginScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fontsLoaded] = useFonts({ Comfortaa_400Regular, Comfortaa_700Bold });
  if (!fontsLoaded) return null;

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!response.ok) throw new Error("Error al iniciar sesión");
      const data = await response.json();
      console.log("Login success:", data);
      router.push("/(tabs)");
    } catch (error) {
      console.error(error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* 🔙 Back */}
        <TouchableOpacity style={[styles.backButton, { top: insets.top - 37 }]} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={30} color={WHITE} />
          <Text style={styles.backText}>Atrás</Text>
        </TouchableOpacity>

        {/* Parte superior clara: logo grande */}
        <View style={styles.topContainer}>
          <Image source={require("../assets/images/log.png")} style={styles.logo} />
        </View>

        {/* Footer rojo curvo que cubre todo el fondo inferior */}
        <View style={[styles.redFooter, { paddingBottom: Math.max(insets.bottom, 12) }]}>
          {/* Tarjeta blanca flotante */}
          <View style={styles.formCard}>
            <View style={styles.inputContainer}>
              <Ionicons name="mail-outline" size={20} color={GRAY_TEXT} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Correo"
                placeholderTextColor={GRAY_TEXT}
                autoCapitalize="none"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputContainer}>
              <Ionicons name="lock-closed-outline" size={20} color={GRAY_TEXT} style={styles.icon} />
              <TextInput
                style={styles.input}
                placeholder="Contraseña"
                placeholderTextColor={GRAY_TEXT}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
              />
            </View>

            <TouchableOpacity style={styles.loginBtn} activeOpacity={0.9} onPress={handleLogin}>
              <Text style={styles.loginText}>Iniciar Sesión</Text>
            </TouchableOpacity>

            <Text style={styles.registerText}>
              ¿No tienes una Cuenta?{" "}
              {/* Cuando exista pantalla de registro, activa el push */}
              {/* <Text style={styles.link} onPress={() => router.push("/register")}>Crear una Cuenta</Text> */}
              <Text style={styles.link}>Crear una Cuenta</Text>
            </Text>
          </View>
        </View>

        {/* Extra: pinta el área del home-indicator en iOS por si acaso */}
         <View style={{ height: insets.bottom, backgroundColor: "#d11212ff" }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT },
  container: { flex: 1, backgroundColor: LIGHT, alignItems: "center" },

  backButton: {
    position: "absolute",
    left: 16,
    backgroundColor: RED,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    zIndex: 10,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  backText: { color: WHITE, marginLeft: 6, fontSize: 14, fontFamily: "Comfortaa_700Bold" },

  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 36,
  },
  logo: { width: width * 0.77, height: width * 0.77, resizeMode: "contain" },
  slogan: {
    marginTop: 7,
    fontSize: 13,
    color: RED,
    letterSpacing: 1.2,
    fontFamily: "Comfortaa_700Bold",
  },

  // 🔻 Footer rojo curvo
  redFooter: {
    width: "100%",
    backgroundColor: RED,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
    paddingTop: 37,
  },

  // 🃏 Tarjeta blanca flotante dentro del footer
  formCard: {
    backgroundColor: WHITE,
    width: width * 0.86,
    height: height * 0.27,
    borderRadius: 20,
    padding: 9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 7,
    elevation: 4,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: INPUT_BG,
    borderRadius: 14,
    marginBottom: 12,
    paddingHorizontal: 10,
    width: "100%",
    height: 48,
  },
  icon: { marginRight: 8 },
  input: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    color: "#333",
    fontFamily: "Comfortaa_400Regular",
  },

  loginBtn: {
    backgroundColor: RED,
    borderRadius: 26,
    paddingVertical: 12,
    width: "100%",
    marginTop: 6,
  },
  loginText: {
    color: WHITE,
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Comfortaa_700Bold",
  },

  registerText: {
    color: "#666",
    marginTop: 12,
    fontSize: 13,
    fontFamily: "Comfortaa_400Regular",
  },
  link: { color: LINK_BLUE, textDecorationLine: "underline", fontFamily: "Comfortaa_700Bold" },
});
