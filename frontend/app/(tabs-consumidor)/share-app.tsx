// frontend/app/(tabs-consumidor)/share-app.tsx
import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useTheme } from "@/src/theme/ThemeProvider";

// 👉 URL pública de tu app (cámbiala cuando tengas el link real)
const APP_URL = "https://foodloop.app";

export default function ShareAppScreen() {
  const { colors } = useTheme();

  const handleOpenLink = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Oops 😅", "No se pudo abrir esta opción en tu dispositivo.");
      }
    } catch (err) {
      Alert.alert("Oops 😅", "Ocurrió un error al intentar compartir.");
    }
  };

  const shareOnFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      APP_URL
    )}`;
    handleOpenLink(url);
  };

  const shareOnTwitter = () => {
    const text = "Estoy usando FoodLoop para rescatar comida con descuento 💚";
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(APP_URL)}`;
    handleOpenLink(url);
  };

  const shareOnInstagram = () => {
    // Insta no tiene web-share directo, así que llevamos al perfil/app
    handleOpenLink("https://www.instagram.com/");
  };

  return (
    <>
      {/* SafeArea con fondo basado en el tema (rojo en claro, equivalente en oscuro) */}
      <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: colors.primary,
            paddingHorizontal: 20,
            paddingTop: 4, // alineado con el patrón que te pasaron
            paddingBottom: 16, // alineado con el patrón que te pasaron
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => router.back()}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              justifyContent: "center",
              alignItems: "center",
              marginRight: 12,
            }}
          >
            <Ionicons name="arrow-back" size={22} color="#FFFFFF" />
          </TouchableOpacity>

          <Text
            style={{
              fontSize: 20,
              color: "#FFFFFF",
              fontFamily: "Comfortaa",
            }}
          >
            Share This App
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, backgroundColor: colors.bg }} // fondo dinámico según tema
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 110, // espacio para el footer
          }}
        >
          {/* Intro card */}
          <View
            style={{
              backgroundColor: colors.card,
              borderRadius: 18,
              padding: 18,
              marginBottom: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                fontFamily: "Comfortaa",
                color: colors.text,
              }}
            >
              Comparte FoodLoop 💌
            </Text>
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: colors.subtext,
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              ¿Te gusta FoodLoop? Invita a tus amigos a unirse y ayúdanos a
              rescatar aún más comida. Puedes compartir la app en tus redes
              favoritas con un solo toque. Cada nueva persona que se une, ayuda
              a reducir el desperdicio de alimentos y apoya a los negocios
              locales. 💚
            </Text>
          </View>

          {/* Social share buttons */}
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 16,
            }}
          >
            {/* Facebook */}
            <TouchableOpacity
              onPress={shareOnFacebook}
              style={{
                flex: 1,
                marginRight: 8,
                backgroundColor: colors.card,
                borderRadius: 16,
                paddingVertical: 18,
                alignItems: "center",
                justifyContent: "center",
                elevation: 1,
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-facebook" size={28} color="#1877F2" />
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontFamily: "Comfortaa",
                  color: colors.text,
                }}
              >
                Facebook
              </Text>
            </TouchableOpacity>

            {/* Twitter / X */}
            <TouchableOpacity
              onPress={shareOnTwitter}
              style={{
                flex: 1,
                marginHorizontal: 4,
                backgroundColor: colors.card,
                borderRadius: 16,
                paddingVertical: 18,
                alignItems: "center",
                justifyContent: "center",
                elevation: 1,
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-twitter" size={28} color="#1DA1F2" />
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontFamily: "Comfortaa",
                  color: colors.text,
                }}
              >
                Twitter
              </Text>
            </TouchableOpacity>

            {/* Instagram */}
            <TouchableOpacity
              onPress={shareOnInstagram}
              style={{
                flex: 1,
                marginLeft: 8,
                backgroundColor: colors.card,
                borderRadius: 16,
                paddingVertical: 18,
                alignItems: "center",
                justifyContent: "center",
                elevation: 1,
              }}
              activeOpacity={0.8}
            >
              <Ionicons name="logo-instagram" size={28} color="#E1306C" />
              <Text
                style={{
                  marginTop: 8,
                  fontSize: 13,
                  fontFamily: "Comfortaa",
                  color: colors.text,
                }}
              >
                Instagram
              </Text>
            </TouchableOpacity>
          </View>

          {/* Small hint */}
          <Text
            style={{
              fontSize: 12,
              lineHeight: 18,
              color: colors.subtext,
              fontFamily: "Comfortaa",
              textAlign: "center",
              marginTop: 4,
            }}
          >
            También puedes copiar y pegar el link de FoodLoop en cualquier otra
            app de mensajería para invitar a más personas. ✨
          </Text>
        </ScrollView>
      </SafeAreaView>

      {/* Footer consumidor */}
      <ConsumidorFooter />
    </>
  );
}
