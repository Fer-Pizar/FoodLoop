import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter, Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");
const RED = "#d11212ff";
const LIGHT = "#F7F7F7";
const LINK_BLUE = "#4997fdff";
const WHITE = "#FFFFFF";

export default function IndexScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Comfortaa_700Bold,
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            {/* Back button */}
            <TouchableOpacity
              style={[styles.backButton, { top: insets.top + 8 }]}
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={24} color={WHITE} />
              <Text style={styles.backText}>Atrás</Text>
            </TouchableOpacity>

            {/* Top content: logo */}
            <View style={styles.topSection}>
              <Image
                source={require("../assets/images/log.png")}
                style={styles.logo}
                resizeMode="contain"
              />
            </View>

            {/* Bottom section: botones */}
            <View style={[styles.bottomSection, { paddingBottom: Math.max(insets.bottom, 12) }]}>
              <TouchableOpacity
                style={styles.whiteButton}
                activeOpacity={0.9}
                onPress={() => router.push("/RegConsumidor" as Href)}
              >
                <Text style={styles.whiteButtonText}>Consumidor</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.redButton}
                activeOpacity={0.9}
                onPress={() => router.push("/RegNegocio" as Href)}
              >
                <Text style={styles.redButtonText}>Negocio</Text>
              </TouchableOpacity>

              <Text style={styles.registerText}>
                ¿Ya tienes una Cuenta?{" "}
                <Text style={styles.link} onPress={() => router.push("/login")}>
                  Inicia Sesión
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT },
  container: {
    flex: 1,
    backgroundColor: LIGHT,
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    left: 16,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: RED,
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
  backText: {
    color: WHITE,
    marginLeft: 6,
    fontSize: 14,
    fontFamily: "Comfortaa_700Bold",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  logo: {
    width: width * 0.7,
    height: width * 0.7,
    resizeMode: "contain",
  },
  bottomSection: {
    width: "100%",
    backgroundColor: RED,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24,
    gap: 14,
  },
  whiteButton: {
    backgroundColor: WHITE,
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
    borderColor: WHITE,
    backgroundColor: "#aeaeaeff",
    width: "80%",
    height: 54,
    borderRadius: 27,
    justifyContent: "center",
    alignItems: "center",
  },
  redButtonText: {
    fontFamily: "Comfortaa_700Bold",
    color: WHITE,
    fontSize: 22,
  },
  registerText: {
    color: WHITE,
    marginTop: 12,
    fontSize: 15,
    fontFamily: "Comfortaa_400Regular",
  },
  link: {
    color: LINK_BLUE,
    textDecorationLine: "underline",
    fontFamily: "Comfortaa_700Bold",
  },
});
