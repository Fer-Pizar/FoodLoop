import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Dimensions, SafeAreaView, Platform, StatusBar, ActivityIndicator,} from "react-native";
import { router } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import AsyncStorage from "@react-native-async-storage/async-storage";

const { width } = Dimensions.get("window");
const RED = "#d11212ff";
const LIGHT = "#F7F7F7";

export default function IndexScreen() {
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });

  // Modo “decido si redirijo o muestro bienvenida”
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem("user");
        const user = raw ? JSON.parse(raw) : null;
        const role = (user?.role ?? user?.rol ?? "").toString().toLowerCase();

        if (role === "comercio" || role === "negocio") {
          router.replace("/(tabs-negocio)/Negocio/PerfilNegocioHome");
          return;
        }
        if (role) {
          router.replace("/(tabs-consumidor)/Consumidor/Perfil");
          return;
        }
      } finally {
        setCheckingSession(false);
      }
    })();
  }, []);

  if (!fontsLoaded || checkingSession) {
    return (
      <SafeAreaView style={[styles.safe, { paddingTop: insets.top }]}>
        <StatusBar barStyle="dark-content" backgroundColor={LIGHT} />
        <View style={styles.loader}>
          <ActivityIndicator size="large" color={RED} />
          <Text style={[styles.subtitle, { marginTop: 8 }]}>Cargando…</Text>
        </View>
      </SafeAreaView>
    );
  }

  // Pantalla de bienvenida (sin sesión)
  return (
    <SafeAreaView style={[styles.safe, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={LIGHT} />

      {/* Logo */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/log.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Footer rojo curvo */}
      <View
        style={[
          styles.bottomSection,
          { paddingBottom: Math.max(insets.bottom, 20) },
        ]}
      >
        <TouchableOpacity
          style={styles.whiteButton}
          activeOpacity={0.9}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.whiteButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.redButton}
          activeOpacity={0.9}
          onPress={() => router.push("/Registro")}
        >
          <Text style={styles.redButtonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: LIGHT,
  },
  loader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 10 : 30,
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: "Comfortaa_400Regular",
    color: RED,
    fontSize: 18,
    letterSpacing: 0.5,
  },
  bottomSection: {
    width: "100%",
    backgroundColor: RED,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
    gap: 14,
  },
  whiteButton: {
    backgroundColor: "#FFF",
    width: "80%",
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center", 
  },
  whiteButtonText: {
    fontFamily: "Comfortaa_700Bold",
    color: RED,
    fontSize: 22,
  },
  redButton: {
    borderWidth: 2,
    borderColor: "#FFF",
    width: "80%",
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  redButtonText: {
    fontFamily: "Comfortaa_700Bold",
    color: "#FFF",
    fontSize: 22,
  },
});
