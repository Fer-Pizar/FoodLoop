// frontend/app/(tabs-consumidor)/privacy-policy.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ConsumidorFooter from "@/components/ConsumidorFooter";

const RED = "#D82A2A";
const LIGHT_GRAY = "#F5F5F5";

export default function PrivacyPolicyScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: RED }}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: RED,
            paddingHorizontal: 20,
            paddingTop: 4, // 🔁 match Profile paddings
            paddingBottom: 16,
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
            Privacy Policy
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, backgroundColor: "#FFFFFF" }} // 🤍 white like Profile
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 110,
          }}
        >
          {/* Section 1 */}
          <View
            style={{
              backgroundColor: LIGHT_GRAY,
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
              }}
            >
              Información que recopilamos
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: "#555",
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              En FoodLoop recopilamos únicamente la información necesaria para
              ofrecerte una experiencia segura y personalizada dentro de la app.
              Esto incluye tu nombre, correo electrónico, ubicación aproximada y
              las reservas que realizas en los comercios. No recopilamos datos
              sensibles ni información innecesaria para el funcionamiento de la
              plataforma.
            </Text>
          </View>

          {/* Section 2 */}
          <View
            style={{
              backgroundColor: LIGHT_GRAY,
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
              }}
            >
              Uso de la información
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: "#555",
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              Utilizamos tus datos únicamente para permitirte acceder a los
              servicios de FoodLoop: gestionar reservas, mostrar comercios
              cercanos, enviar notificaciones relevantes y mejorar la experiencia
              de usuario. La información que proporcionas nunca será vendida,
              intercambiada o compartida con terceros con fines comerciales.
            </Text>
          </View>

          {/* Section 3 */}
          <View
            style={{
              backgroundColor: LIGHT_GRAY,
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
              }}
            >
              Protección de tus datos
            </Text>

            <Text
              style={{
                fontSize: 14,
                lineHeight: 20,
                color: "#555",
                fontFamily: "Comfortaa",
                textAlign: "justify",
              }}
            >
              Implementamos medidas de seguridad modernas para proteger tu
              información, como almacenamiento cifrado, comunicación segura con
              HTTPS y controles internos para evitar accesos no autorizados.
              Mantenemos actualizadas estas medidas para garantizar la
              protección continua de tus datos personales. 🔒
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Footer */}
      <ConsumidorFooter />
    </>
  );
}
