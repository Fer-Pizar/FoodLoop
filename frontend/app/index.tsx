import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions } from "react-native";
import { useRouter, Href } from "expo-router";

const { width } = Dimensions.get("window"); 

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require("../assets/images/log.png")} style={styles.logo} />
      </View>

      <View style={styles.buttons}>
        <TouchableOpacity
          style={styles.btnPrimary}
          onPress={() => router.push("login" as Href)}
        >
          <Text style={styles.btnText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSecondary}
          onPress={() => router.push("register" as Href)}
        >
          <Text style={styles.btnTextSecondary}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  
  logoContainer: { 
    flex: 2, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  
  logo: { 
    width: width * 0.6,  // 60% del ancho de la pantalla
    height: width * 0.6, // mantiene proporción cuadrada
    resizeMode: "contain",
  },
  
  buttons: {
    flex: 1,
    backgroundColor: "#ef0505ff",
    padding: 30,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  
  btnPrimary: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  
  btnText: { 
    textAlign: "center", 
    color: "#000", 
    fontWeight: "bold" 
  },
  
  btnSecondary: {
    borderWidth: 1,
    borderColor: "#fff",
    padding: 15,
    borderRadius: 10,
  },
  
  btnTextSecondary: { 
    textAlign: "center", 
    color: "#fff", 
    fontWeight: "bold" 
  },
});


