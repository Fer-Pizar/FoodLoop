import { View, Text,ActivityIndicator} from "react-native";
import { router } from "expo-router";
import HeaderSimple from "../../../components/common/HeaderSimple";
import { RowItem } from "../../../components/common/RowItem";
import { useComercioMe } from "../../../hooks/useComercio";

export default function InformacionPersonal() {
  const { data, loading, error } = useComercioMe();

  if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <ActivityIndicator />
          <Text style={{ marginTop: 8 }}>Cargando información…</Text>
        </View>
      );
    }

  if (error || !data) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>No se pudo cargar la información 😔</Text>
        <Text style={{ opacity: 0.6 }}>{String(error)}</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HeaderSimple title="Información Personal" />

      <RowItem
        icon="create-outline"
        title="Mis datos Personales"
        subtitle="Nombre, Teléfono, Dirección"
        onPress={() => router.push("/Negocio/MisDatosPersonales")}
      />

      <RowItem icon="mail-outline" title="Correo" subtitle={data?.usuario?.email ?? "—"} />
      <RowItem icon="grid-outline" title="Categoría" subtitle={data?.categoria ?? "—"} />
    </View>
  );
}


