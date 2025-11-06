import React from "react";
import { Text, StyleSheet, type TextProps } from "react-native";
import { useTheme } from "@/src/theme/ThemeProvider";

export type ThemedTextProps = TextProps & {
  /** Optional override for text color in light mode */
  lightColor?: string;
  /** Optional override for text color in dark mode */
  darkColor?: string;
  /** Predefined text style variants */
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export default function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const { colors, isDark } = useTheme();

  // Dynamically choose color based on theme or props override
  const color = isDark ? darkColor ?? colors.text : lightColor ?? colors.text;

  return (
    <Text
      style={[
        { color },
        type === "default" && styles.default,
        type === "title" && styles.title,
        type === "defaultSemiBold" && styles.defaultSemiBold,
        type === "subtitle" && styles.subtitle,
        type === "link" && [styles.link, { color: colors.primary }],
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "600",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
