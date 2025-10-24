import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const RED = "#D82A2A";
const WHITE = "#FFFFFF";

export default function ConsumidorFooter() {
  const router = useRouter();
  return (
    <View style={styles.wrap}>
      <Ionicons name="chatbubble-ellipses-outline" size={22} color={WHITE} />
      <View style={styles.sep} />
      <Ionicons name="heart-outline" size={22} color={WHITE} />

      {/* Home pill */}
      <TouchableOpacity
        onPress={() => router.replace("/(tabs-consumidor)/Categories")}
        activeOpacity={0.85}
        style={styles.homePill}
      >
        <Ionicons name="home" size={26} color={RED} />
      </TouchableOpacity>

      <Ionicons name="bag-handle-outline" size={22} color={WHITE} />
      <View style={styles.sep} />
      <Ionicons name="person-circle-outline" size={22} color={WHITE} />
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
    backgroundColor: WHITE,
    width: 68,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 6,
    marginBottom: 10,
  },
});
