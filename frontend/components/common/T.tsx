import React from "react";
import { Text, TextProps } from "react-native";

export default function T(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Comfortaa_400Regular" }, props.style]} />;
}
