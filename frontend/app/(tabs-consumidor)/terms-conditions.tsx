// frontend/app/(tabs-consumidor)/terms-conditions.tsx
import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import ConsumidorFooter from "@/components/ConsumidorFooter";

const RED = "#D82A2A";
const LIGHT_GRAY = "#F5F5F5";

export default function TermsConditionsScreen() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: RED }}>
        {/* HEADER */}
        <View
          style={{
            backgroundColor: RED,
            paddingHorizontal: 20,
            paddingTop: 4, // match final fix / Profile header
            paddingBottom: 16, // match final fix / Profile header
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
            Términos & Condiciones
          </Text>
        </View>

        {/* CONTENT */}
        <ScrollView
          style={{ flex: 1, backgroundColor: "#FFFFFF" }} // white like Profile / Privacy
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 24,
            paddingBottom: 110, // espacio para el footer
          }}
        >
          {/* Bloque 1 - Uso de la app */}
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
              Uso de FoodLoop
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
              FoodLoop es una aplicación que permite a los usuarios descubrir y
              reservar productos con descuento ofrecidos por comercios locales.
              Al utilizar la app, te comprometes a hacer un uso responsable del
              servicio, respetando a los negocios aliados y a otros usuarios. La
              información mostrada sobre productos, horarios y disponibilidad
              puede variar según cada comercio.
            </Text>
          </View>

          {/* Bloque 2 - Responsabilidad */}
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
              Responsabilidad de los comercios
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
              Cada comercio es responsable de la calidad, preparación y entrega
              de los productos que ofrece a través de FoodLoop. Nuestro rol es
              conectar a consumidores y negocios mediante la tecnología, pero no
              participamos directamente en la elaboración de los alimentos. Si
              tienes un inconveniente con tu pedido, te recomendamos contactar
              primero al comercio y luego al equipo de soporte de FoodLoop en
              caso de ser necesario.
            </Text>
          </View>

          {/* Bloque 3 - Datos y privacidad */}
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
              Datos personales y privacidad
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
              Utilizamos tus datos únicamente para brindarte una mejor
              experiencia dentro de la app: gestionar tus reservas, mostrarte
              comercios cercanos y enviarte notificaciones relevantes. No
              compartimos tu información personal con terceros sin tu
              consentimiento, salvo cuando sea requerido por ley o para operar
              servicios estrictamente necesarios para el funcionamiento de
              FoodLoop.
            </Text>
          </View>

          {/* Bloque 4 - Cambios en los términos */}
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
              Actualizaciones de los términos
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
              FoodLoop fue fundada este año y sigue evolucionando gracias al uso
              y la retroalimentación de la comunidad. Por ello, estos términos y
              condiciones pueden actualizarse con el tiempo para reflejar nuevas
              funciones, mejoras o cambios legales. Siempre que realicemos una
              modificación importante, será actualizada en. nuestra app.
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* Footer consumidor */}
      <ConsumidorFooter />
    </>
  );
}
