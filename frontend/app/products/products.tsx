import { SafeAreaView, Text, View } from "react-native";

export default function AllProductsScreen() {
  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>Todos los productos</Text>
        <Text>Listado completo (pronto: conectado al backend).</Text>
      </View>
    </SafeAreaView>
  );
}
