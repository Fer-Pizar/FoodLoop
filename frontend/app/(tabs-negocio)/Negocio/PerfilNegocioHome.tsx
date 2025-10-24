import { useState } from "react";
import { View, Text, Modal, Pressable, Alert, ActivityIndicator, ScrollView } from "react-native";
import { router } from "expo-router";
import { HeaderPerfil } from "../../../components/negocio/HeaderPerfil";
import { Atajos } from "../../../components/negocio/Atajos";
import { RowItem } from "../../../components/common/RowItem";
import { useComercioMe } from "../../../hooks/useComercio";
import { logout } from "../../../src/api/client";

export default function PerfilNegocioHome() {
  const { data, loading, error } = useComercioMe(); 
  const [sheetOpen, setSheetOpen] = useState(false);

  if (loading) {
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
        <ActivityIndicator />
        <Text>Cargando…</Text>
      </View>
    );
  }
  if (error || !data) {
    return (
      <View style={{ flex:1, justifyContent:"center", alignItems:"center", padding:16 }}>
        <Text style={{ fontWeight:"700", marginBottom:8 }}>No se pudo cargar el perfil 😵</Text>
        <Text style={{ opacity:0.7 }}>{error ?? "Sin datos"}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderPerfil
        saludo="¡Hola"
        nombre={data.nombreNegocio}
        avatarUrl={data.usuario?.fotoPerfil}
        onBack={() => router.back()}
        onAvatarPress={() => setSheetOpen(true)}
      />

      <ScrollView>
        <Atajos
          onInfo={() => router.push("/Negocio/InformacionPersonal")}
          onProductos={() => router.push("/Negocio/MisProductos")}
          onHistorial={() => router.push("/Negocio/HistorialVentas")}
        />

        <View style={{ paddingHorizontal: 16, paddingTop: 8 }}>
          <Text style={{ fontSize: 16, fontWeight: "700", marginVertical: 8 }}>Configuración</Text>
        </View>

        <RowItem icon="notifications-outline" title="Notificaciones" onPress={() => Alert.alert("Notificaciones", "Pronto 🤗")} />
        <RowItem icon="time-outline" title="Horario" onPress={() => Alert.alert("Horario", "Pronto ⏰")} />
        <RowItem icon="pricetags-outline" title="Reglas de Descuento" onPress={() => Alert.alert("Descuentos", "Pronto 🏷️")} />
        <RowItem icon="exit-outline" title="Cerrar Sesión" onPress={async () => {await logout();router.replace("/login"); }} />
      </ScrollView>

      <Modal visible={sheetOpen} transparent animationType="slide" onRequestClose={() => setSheetOpen(false)}>
        <Pressable style={{ flex:1, backgroundColor:"rgba(0,0,0,0.4)" }} onPress={() => setSheetOpen(false)}>
          <View />
        </Pressable>
        <View style={{ backgroundColor:"#fff", padding:16, borderTopLeftRadius:16, borderTopRightRadius:16 }}>
          <View style={{ alignItems:"center", marginBottom:8 }}>
            <View style={{ width:40, height:4, backgroundColor:"#ddd", borderRadius:2 }} />
          </View>
          <Text style={{ fontWeight:"700", fontSize:16, marginBottom:8 }}>Editar Foto</Text>
          <RowItem icon="camera-outline" title="Tomar una foto" onPress={() => Alert.alert("Cámara", "Conecta ImagePicker")} />
          <RowItem icon="images-outline" title="Elegir de la galería" onPress={() => Alert.alert("Galería", "Conecta ImagePicker")} />
          <RowItem icon="trash-outline" title="Eliminar foto" onPress={() => Alert.alert("Eliminar", "Llama a /avatar DELETE")} />
          <View style={{ height: 16 }} />
        </View>
      </Modal>
    </View>
  );
}
