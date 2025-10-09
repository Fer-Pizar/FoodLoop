import { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,Image,Dimensions,Modal,} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("window");

export default function ProfileScreen() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        {/* Botón de retroceso */}
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Saludo */}
        <Text style={styles.greeting}>¡Hola, Jiara!</Text>

        {/* Foto de perfil */}
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=47" }}
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>

      {/* Línea separadora */}
      <View style={styles.separator} />

      {/* Información personal */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="person-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Información Personal</Text>
        </TouchableOpacity>
      </View>

      {/* Configuración */}
      <Text style={styles.subtitle}>Configuración</Text>
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Ionicons name="business-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Registrar mi Negocio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Ionicons name="exit-outline" size={20} color="#777" />
          <Text style={styles.optionText}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>

      {/* Modal estilo Bottom Sheet */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.sheetTitle}>Editar Foto</Text>

            <TouchableOpacity style={styles.sheetOption}>
              <Ionicons name="camera-outline" size={20} color="#333" />
              <Text style={styles.sheetOptionText}>Tomar una Foto</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sheetOption}>
              <Ionicons name="image-outline" size={20} color="#333" />
              <Text style={styles.sheetOptionText}>Elegir de la galería</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sheetOption}>
              <Ionicons name="trash-outline" size={20} color="red" />
              <Text style={[styles.sheetOptionText, { color: "red" }]}>
                Eliminar Foto
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeBtn}
              onPress={() => setModalVisible(false)}
            >
              <Ionicons name="close" size={20} color="#777" />
              <Text style={styles.closeText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 50,
    paddingBottom: 10,
  },

  backButton: {
    backgroundColor: "#ef0505",
    padding: 8,
    borderRadius: 20,
  },

  greeting: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
    flex: 1,
    textAlign: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 27.5,
    borderWidth: 2,
    borderColor: "#ccc", // color del borde cambiado de rojo a gris claro
  },

  separator: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 25,
  },

  section: { backgroundColor: "#fff", marginBottom: 20 },
  subtitle: { fontWeight: "bold", fontSize: 16, marginBottom: 10, color: "#555" },

  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  optionText: { marginLeft: 10, fontSize: 15, color: "#333" },

  // Modal estilo Bottom Sheet
  modalOverlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  sheetTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 20 },
  sheetOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  sheetOptionText: { marginLeft: 10, fontSize: 16, color: "#333" },
  closeBtn: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  closeText: { marginLeft: 5, fontSize: 14, color: "#777" },
});
