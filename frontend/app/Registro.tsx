import React from "react";
import {View,Text,TouchableOpacity,StyleSheet,Image,Dimensions,SafeAreaView,} from "react-native";
import { useRouter, Href } from "expo-router";
import { useFonts, Comfortaa_400Regular, Comfortaa_700Bold } from "@expo-google-fonts/comfortaa";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const { width, height } = Dimensions.get("window");
const RED = "#d11212ff";
const LIGHT = "#F7F7F7";
const LINK_BLUE = "#4997fdff";


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
      <View style={styles.container}>
        {/* Top content */}
        <View style={styles.topSection}>

          {/* Make the logo */}
          <Image
            source={require("../assets/images/log.png")}
            style={styles.logo}
            resizeMode="contain"
          />

        </View>

        <View
          style={[
            styles.bottomSection,
            { paddingBottom: Math.max(insets.bottom, 12) }, 
          ]}
        >
          <TouchableOpacity
            style={styles.whiteButton}
            activeOpacity={0.9}
            onPress={() => router.push("RegConsumidor" as Href)}
          >
            <Text style={styles.whiteButtonText}>Consumidor</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.redButton}
            activeOpacity={0.9}
            onPress={() => router.push("RegNegocio" as Href)}
          >
            <Text style={styles.redButtonText}>Negocio</Text>
          </TouchableOpacity>

          <Text style={styles.registerText}>
                        ¿Ya tienes una Cuenta?{" "}
                        {/* <Text style={styles.link} onPress={() => router.push("/register")}>Crear una Cuenta</Text> */}
                        <Text style={styles.link}>Inicia Sesión</Text>
                        
                      </Text>
        </View>
      </View>

      <View style={{ height: insets.bottom, backgroundColor: "#d11212ff" }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: LIGHT },
  container: {
    flex: 1,
    backgroundColor: LIGHT,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topSection: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: height * 0.04,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Comfortaa_700Bold",
    fontSize: 48,
    color: RED,
    letterSpacing: 2,
    marginBottom: 12,
  },
  logo: {
    width: width * 0.77,  
    height: width * 0.77,
    marginBottom: 10,
  },
 
  bottomSection: {
    width: "100%",
    backgroundColor: "#d11212ff",
    height: height * 0.33,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    gap: 14,
  },
  whiteButton: {
    backgroundColor: "#FFF",
    width: "80%",
    height: 54,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  whiteButtonText: {
    fontFamily: "Comfortaa_700Bold",
    color: "#d11212ff",
    fontSize: 24,
  },
  redButton: {
    borderWidth: 2,
    borderColor: "#ae0202ff",
    backgroundColor: "#aeaeaeff",
    width: "80%",
    height: 54,
    borderRadius: 17,
    justifyContent: "center",
    alignItems: "center",
  },
  redButtonText: {
    fontFamily: "Comfortaa_700Bold",
    color: "#d11212ff",
    fontSize: 24,
  },
  registerText: {
    color: "#ffffffff",
    marginTop: 12,
    fontSize: 15,
    fontFamily: "Comfortaa_400Regular",
  },
    link: { color: LINK_BLUE, textDecorationLine: "underline", fontFamily: "Comfortaa_700Bold" },

});
