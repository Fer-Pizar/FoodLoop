import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { useRouter, Href } from "expo-router";
import {
  useFonts,
  Comfortaa_400Regular,
  Comfortaa_700Bold,
} from "@expo-google-fonts/comfortaa";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const RED = "#D82A2A";
const LIGHT = "#F7F7F7";

export default function IndexScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });
  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={[styles.safe, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor={LIGHT} />

      {/* Top section with logo */}
      <View style={styles.topSection}>
        <Image
          source={require("../assets/images/log.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Bottom red curved area */}
      <View
        style={[
          styles.bottomSection,
          { paddingBottom: Math.max(insets.bottom, 20) },
        ]}
      >
        <TouchableOpacity
          style={styles.whiteButton}
          activeOpacity={0.9}
          onPress={() => router.push("login" as Href)}
        >
          <Text style={styles.whiteButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.redButton}
          activeOpacity={0.9}
          onPress={() => router.push("Registro" as Href)}
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
    color: "#D82A2A",
    fontSize: 18,
    letterSpacing: 2,
    marginTop: 5,
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
