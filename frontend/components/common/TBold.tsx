import React from "react";
import { Text, TextProps } from "react-native";

export default function TBold(props: TextProps) {
  return <Text {...props} style={[{ fontFamily: "Comfortaa_700Bold" }, props.style]} />;
}
