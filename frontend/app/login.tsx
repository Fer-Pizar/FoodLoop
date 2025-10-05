import { useState } from "react";
import {View,Text,TextInput,TouchableOpacity,StyleSheet,Image,Dimensions,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <View style={styles.container}>
      {/* Botón de retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={22} color="#fff" />
        <Text style={styles.backText}>Atrás</Text>
      </TouchableOpacity>

      <View style={styles.topContainer}>
        <Image source={require("../assets/images/log.png")} style={styles.logo} />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#b5b5b5" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Correo"
            placeholderTextColor="#b5b5b5"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#b5b5b5" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#b5b5b5"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <Text style={styles.registerText}>
          ¿No tienes una Cuenta?{" "}
          {/* Pendiente hasta crear pantalla de registro
          <Text style={styles.link} onPress={() => router.push("/register")}>
            Crear una Cuenta
          </Text> 
          */}
          <Text style={styles.link}>Crear una Cuenta</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    justifyContent: "center",
  },

  // 🔙 Botón de retroceso
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    backgroundColor: "#ef0505",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    elevation: 3,
  },
  backText: {
    color: "#fff",
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "600",
  },

  topContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  logo: {
    width: width * 0.5,
    height: width * 0.5,
    resizeMode: "contain",
  },
  slogan: {
    fontSize: 13,
    color: "#a9a9a9",
    letterSpacing: 1,
    marginTop: -10,
  },
  formContainer: {
    backgroundColor: "#fff",
    width: width * 0.85,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: "100%",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 14,
    color: "#333",
  },
  loginBtn: {
    backgroundColor: "#ef0505",
    borderRadius: 10,
    paddingVertical: 12,
    width: "100%",
    marginTop: 5,
  },
  loginText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  registerText: {
    color: "#555",
    marginTop: 15,
    fontSize: 13,
  },
  link: {
    color: "#007bff",
    textDecorationLine: "underline",
  },
});