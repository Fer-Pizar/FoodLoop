// FoodLoop/frontend/app/login.tsx
import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform, Alert,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold,} from "@expo-google-fonts/comfortaa";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginUser } from "../src/api/auth";

const { width } = Dimensions.get("window");

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
  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) return null;

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Campos requeridos", "Ingresa correo y contraseña.");
      return;
    }

    try {
      const data = await loginUser(email, password);
      console.log("✅ Login success:", data);

      const userPayload = {
        id: data?.user?.id_usuario ?? data?.user?.id ?? null,
        nombre: data?.user?.nombre ?? "",
        email: data?.user?.email ?? email,
        foto_perfil: data?.user?.foto_perfil ?? null,
        token: data?.token ?? null,
      };
      await AsyncStorage.setItem("user", JSON.stringify(userPayload));

      router.push("/(tabs)/Perfil");
    } catch (error: any) {
      console.error("❌ Login failed:", error?.message || error);
      Alert.alert("Login fallido", error?.message || "Credenciales incorrectas");
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            {/* Back */}
            <TouchableOpacity
              style={[styles.backButton, { top: insets.top + 8 }]}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color={WHITE} />
              <Text style={styles.backText}>Atrás</Text>
            </TouchableOpacity>

            {/* Logo */}
            <View style={styles.topContainer}>
              <Image
                source={require("../assets/images/log.png")}
                style={styles.logo}
              />
            </View>

            {/* Footer rojo curvo */}
            <View
              style={[
                styles.redFooter,
                { paddingBottom: Math.max(insets.bottom, 12) },
              ]}
            >
              <View style={styles.formCard}>
                <View style={styles.inputContainer}>
                  <Ionicons
                    name="mail-outline"
                    size={20}
                    color={GRAY_TEXT}
                    style={styles.icon}
                  />
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
                  <Ionicons
                    name="lock-closed-outline"
                    size={20}
                    color={GRAY_TEXT}
                    style={styles.icon}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Contraseña"
                    placeholderTextColor={GRAY_TEXT}
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                  />
                </View>

                <TouchableOpacity
                  style={styles.loginBtn}
                  activeOpacity={0.9}
                  onPress={handleLogin}
                >
                  <Text style={styles.loginText}>Iniciar Sesión</Text>
                </TouchableOpacity>

                <Text style={styles.registerText}>
                  ¿No tienes una Cuenta?{" "}
                  <Text
                    style={styles.link}
                    onPress={() => router.push("/Registro")}
                  >
                    Crear una Cuenta
                  </Text>
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
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
  },
  backText: {
    color: WHITE,
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Comfortaa_700Bold",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingBottom: 36,
  },
  logo: { width: width * 0.7, height: width * 0.7, resizeMode: "contain" },
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
  formCard: {
    backgroundColor: WHITE,
    width: "86%",
    borderRadius: 20,
    padding: 16,
    alignItems: "center",
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
  link: {
    color: LINK_BLUE,
    textDecorationLine: "underline",
    fontFamily: "Comfortaa_700Bold",
  },
});
