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

export default function MisDatosPersonales() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const json = await AsyncStorage.getItem("user");
        if (json) {
          const user = JSON.parse(json);
          setNombre(user.nombre || "");
          setFechaNacimiento(user.fecha_nacimiento || "");
        }
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    cargarDatos();
  }, []);

  const guardarDatos = async () => {
    try {
      const json = await AsyncStorage.getItem("user");
      const user = json ? JSON.parse(json) : {};
      const actualizado = { ...user, nombre, fecha_nacimiento: fechaNacimiento };

      await AsyncStorage.setItem("user", JSON.stringify(actualizado));
      Alert.alert("Datos guardados", "Tu información personal ha sido actualizada.");
      router.back();
    } catch (error) {
      console.error("Error al guardar datos:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Mis datos Personales</Text>
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
          placeholder="DD/MM/AAAA"
          value={fechaNacimiento}
          onChangeText={setFechaNacimiento}
        />
      </View>

      {/* Botón guardar */}
      <TouchableOpacity style={styles.saveButton} onPress={guardarDatos}>
        <Text style={styles.saveButtonText}>Guardar Datos</Text>
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
    backgroundColor: "#ef6605",
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
