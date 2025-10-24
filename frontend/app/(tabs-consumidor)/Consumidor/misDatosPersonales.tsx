import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

// Usamos la variable de entorno del archivo .env
const API_BASE = process.env.EXPO_PUBLIC_API_BASE;

export default function MisDatosPersonales() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Cargar los datos guardados localmente
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const json = await AsyncStorage.getItem("user");
        if (json) {
          const user = JSON.parse(json);
          setNombre(user.nombre || "");
          setFechaNacimiento(
            user.fechaNacimiento
              ? new Date(user.fechaNacimiento).toISOString().split("T")[0]
              : ""
          );
          setUserId(user.idUsuario?.toString() || null);
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    cargarDatos();
  }, []);

  // 🔹 Guardar cambios en el backend y actualizar AsyncStorage
  const guardarDatos = async () => {
    if (!userId) {
      Alert.alert("Error", "No se encontró el ID del usuario.");
      return;
    }

    if (!API_BASE) {
      Alert.alert("Error", "No se configuró la URL base de la API.");
      return;
    }

    setLoading(true);
    try {
      console.log("Enviando a backend:", { nombre, fechaNacimiento }); // 👈 Agrega esto
    const response = await fetch(`${API_BASE}/users/${userId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, fechaNacimiento }),
         });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Respuesta del servidor:", errorText);
        throw new Error("Error al actualizar los datos");
      }

      const actualizado = await response.json();

      await AsyncStorage.setItem("user", JSON.stringify(actualizado));

      Alert.alert("✅ Éxito", "Tu información ha sido actualizada correctamente.");
      router.back();
    } catch (error) {
      console.error("Error al guardar datos:", error);
      Alert.alert(
        "Error",
        "No se pudo actualizar la información. Verifica tu conexión o inténtalo más tarde."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis Datos Personales</Text>
      </View>

      {/* Campos editables */}
      <View style={styles.form}>
        <Text style={styles.label}>NOMBRE</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe tu nombre"
          value={nombre}
          onChangeText={setNombre}
        />

        <Text style={styles.label}>FECHA DE NACIMIENTO</Text>
        <TextInput
          style={styles.input}
          placeholder="AAAA-MM-DD"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
        />
      </View>

      {/* Botón guardar */}
      <TouchableOpacity
        style={[styles.saveButton, loading && { opacity: 0.7 }]}
        onPress={guardarDatos}
        disabled={loading}
      >
        <Text style={styles.saveButtonText}>
          {loading ? "Guardando..." : "Guardar Datos"}
        </Text>
      </TouchableOpacity>
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
  form: {
    marginTop: 20,
  },
  label: {
    fontSize: 13,
    color: "#1C1C0D",
    marginBottom: 6,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "#F5F2E5",
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
    color: "#333",
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: "#ef0505",
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    position: "absolute",
    bottom: 40,
    left: 20,
    right: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});