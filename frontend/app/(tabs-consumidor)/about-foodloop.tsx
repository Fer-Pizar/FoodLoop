// frontend/app/(tabs-consumidor)/about-foodloop.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ConsumidorFooter from "@/components/ConsumidorFooter";
import { useTheme } from "@/src/theme/ThemeProvider"; // 👈 Dark mode hook

// Fallback colors (keep design reference)
const RED = "#D82A2A";
const LIGHT_GRAY = "#F5F5F5";

export default function AboutFoodLoopScreen() {
  // 🎨 Dark / Light mode colors from theme
  const { colors } = useTheme();

  const headerBg = colors?.primary ?? RED;
  const pageBg = colors?.bg ?? "#FFFFFF";
  const cardBg = colors?.card ?? LIGHT_GRAY;
  const mainText = colors?.text ?? "#000000";
  const subText = colors?.subtext ?? "#555555";

  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: headerBg }}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: headerBg,
            paddingHorizontal: 20,
            paddingTop: 4, // final fix
            paddingBottom: 16, // final fix
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {/* Back button */}
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
            Acerca de FoodLoop
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, backgroundColor: pageBg }} // 👈 now theme-aware
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 110,
          }}
        >
          {/* BLOCK 1 */}
          <View
            style={{
              backgroundColor: cardBg, // 👈 card background respects theme
              borderRadius: 18,
              padding: 18,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                fontFamily: "Comfortaa",
                color: mainText, // 👈 title color from theme
              }}
            >
              ¿Qué es FoodLoop?
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: subText, // 👈 body text from theme
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              FoodLoop es una aplicación que conecta a comercios y consumidores
              para rescatar comida en perfecto estado que, de otra forma, se
              desperdiciaría. A través de ofertas con descuento, ayudamos a que
              más personas accedan a productos de calidad y al mismo tiempo
              apoyamos a los negocios locales. 🌍🥐
            </Text>
          </View>

          {/* BLOCK 2 */}
          <View
            style={{
              backgroundColor: cardBg,
              borderRadius: 18,
              padding: 18,
              marginBottom: 16,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                marginBottom: 8,
                fontFamily: "Comfortaa",
                color: mainText,
              }}
            >
              Nuestra misión
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: subText,
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              Nuestra misión es reducir el desperdicio de alimentos y crear un
              ecosistema donde todos ganan: los comercios recuperan parte de sus
              costos, las personas encuentran buenas ofertas y el planeta recibe
              un respiro al aprovechar mejor los recursos. Cada pedido que haces
              en FoodLoop es un pequeño paso hacia un consumo más consciente. ✨
            </Text>
          </View>

          {/* BLOCK 3 */}
          <View
            style={{
              backgroundColor: cardBg,
              borderRadius: 18,
              padding: 18,
              marginBottom: 16,
            }}
          >
            {/* Paragraph 1 */}
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: subText,
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              FoodLoop fue fundada este año como un proyecto que nació de la
              preocupación por ver comida en buen estado terminar en la basura.
              Desde sus inicios, la aplicación fue pensada para ser sencilla,
              amigable y segura, combinando tecnología moderna con un enfoque
              social y ambiental muy claro.
            </Text>

            {/* Paragraph 2 */}
            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: subText,
                fontFamily: "Comfortaa",
                textAlign: "justify",
                marginTop: 14,
              }}
            >
              Cada vez que reservas una sorpresa o aprovechas una oferta,
              ayudas a que FoodLoop siga creciendo. Gracias por ser parte de
              esta comunidad y por demostrar que, con pequeños cambios en la
              forma en que consumimos, podemos generar un impacto real. 💚
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Footer consumidor */}
      <ConsumidorFooter />
    </>
  );
}
