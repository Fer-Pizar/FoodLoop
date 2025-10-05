import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window"); // Obtener ancho de la pantalla

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

      router.push("/(tabs)"); // Va a las tabs
    } catch (error) {
      console.error(error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
        <Text style={styles.backText}>← Atrás</Text>
      </TouchableOpacity>

      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/log.png")} style={styles.logo} />
        <Text style={styles.instructions}>Inicie sesión para continuar.</Text>
      </View>

      <View style={styles.form}>
        <Text>CORREO</Text>
        <TextInput
          style={styles.input}
          placeholder="correo@example.com"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text>CONTRASEÑA</Text>
        <TextInput
          style={styles.input}
          placeholder="******"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  backBtn: { marginTop: 30 },
  backText: { color: "#ef0505ff", fontSize: 16 },

  logoContainer: { alignItems: "center", marginVertical: 20 },
  
  // Logo responsivo
  logo: { 
    width: width * 0.5,   // 50% del ancho de la pantalla
    height: width * 0.5,  // mantiene proporción cuadrada
    resizeMode: "contain" 
  },

  instructions: { marginTop: 10, color: "#555" },

  form: { marginTop: 30 },
  input: { borderWidth: 1, borderColor: "#ccc", borderRadius: 8, padding: 10, marginBottom: 15 },
  loginBtn: { backgroundColor: "#ef0505ff", padding: 15, borderRadius: 10 },
  loginText: { color: "#fff", textAlign: "center", fontWeight: "bold" }
});


