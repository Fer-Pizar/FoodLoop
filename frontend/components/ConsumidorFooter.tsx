import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RED = "#D82A2A";
const WHITE = "#FFFFFF";

export default function ConsumidorFooter() {
  const router = useRouter();

  const goHome = () => {
    router.replace("/(tabs-consumidor)/Categories");
  };

  const goProfile = () => {
    router.replace("/(tabs-consumidor)/Consumidor/Perfil");
  };

  const goCart = () => {
    router.replace("/cart");
  };

  const goNotifications = () => {
    router.replace("/(tabs-consumidor)/Consumidor/Notificaciones");
  };

  const goFavorites = () => {};

  return (
    <View style={styles.wrap}>
      {/* Notifications */}
      <TouchableOpacity onPress={goNotifications} activeOpacity={0.7}>
        <Ionicons name="notifications-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      <View style={styles.sep} />

      {/* Favorites */}
      <TouchableOpacity onPress={goFavorites} activeOpacity={0.7}>
        <Ionicons name="heart-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      {/* Home pill */}
      <TouchableOpacity
        onPress={goHome}
        activeOpacity={0.85}
        style={styles.homePill}
      >
        <Ionicons name="home" size={26} color={WHITE} />
      </TouchableOpacity>

      {/* Cart */}
      <TouchableOpacity onPress={goCart} activeOpacity={0.7}>
        <Ionicons name="cart-outline" size={22} color={WHITE} />
      </TouchableOpacity>

      <View style={styles.sep} />

      {/* Profile */}
      <TouchableOpacity onPress={goProfile} activeOpacity={0.7}>
        <Ionicons name="person-circle-outline" size={22} color={WHITE} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
    backgroundColor: RED,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 18,
  },
  sep: {
    width: 1,
    height: 20,
    backgroundColor: "rgba(255,255,255,0.6)",
  },
  homePill: {
    backgroundColor: RED,
    width: 68,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: WHITE,
  },
});
