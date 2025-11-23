import React from "react";
import { View, type ViewProps } from "react-native";
import { useTheme } from "@/src/theme/ThemeProvider";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export default function ThemedView({
  style,
  lightColor,
  darkColor,
  ...otherProps
}: ThemedViewProps) {
  const { colors, isDark } = useTheme();

  const backgroundColor = isDark
    ? (darkColor ?? colors.bg)
    : (lightColor ?? colors.bg);

  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
