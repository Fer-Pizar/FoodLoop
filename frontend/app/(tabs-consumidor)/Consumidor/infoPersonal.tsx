import { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function InfoPersonal() {
  const router = useRouter();
  const [user, setUser] = useState<{ nombre: string; email?: string; fecha_nacimiento?: string } | null>(null);

  // Cargar los datos del usuario guardado
  useEffect(() => {
    const loadUser = async () => {
      try {
        const json = await AsyncStorage.getItem("user");
        if (json) setUser(JSON.parse(json));
      } catch (error) {
        console.error("Error al cargar usuario:", error);
      }
    };
    loadUser();
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Información Personal</Text>
      </View>

      {/* Contenido */}
      <View style={styles.content}>
        <TouchableOpacity
                        style={styles.option}
  onPress={() => router.push("../misDatosPersonales")}
>
  <Ionicons name="person-outline" size={24} color="#777" />
  <View style={styles.optionTextContainer}>
    <Text style={styles.optionTitle}>Mis datos Personales</Text>
    <Text style={styles.optionSubtitle}>
      Nombre, Fecha de Nacimiento
        </Text>
        </View>
    <Ionicons name="chevron-forward" size={20} color="#ccc" />
    </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="mail-outline" size={24} color="#777" />
          <View style={styles.optionTextContainer}>
            <Text style={styles.optionTitle}>Correo</Text>
            <Text style={styles.optionSubtitle}>
              {user?.email || "Correo no disponible"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "#ef0505",
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
  },
  content: {
    backgroundColor: "#fff",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  optionTitle: {
    fontSize: 16,
    color: "#333",
    fontWeight: "500",
  },
  optionSubtitle: {
    fontSize: 13,
    color: "#999",
  },
});
