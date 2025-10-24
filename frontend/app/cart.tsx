import { SafeAreaView, Text, View } from "react-native";

export default function CartScreen() {
  return (
    <SafeAreaView>
      <View style={{ padding: 24 }}>
        <Text style={{ fontSize: 22, fontWeight: "700" }}>Carrito</Text>
        <Text>Tu carrito está vacío por ahora.</Text>
      </View>
    </SafeAreaView>
  );
}
