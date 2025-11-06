import { Platform } from 'react-native';

export type ThemeMode = 'light' | 'dark' | 'system';

export const lightColors = {
  bg: '#FFFFFF',
  card: '#FFFFFF',
  text: '#1F2937',
  subtext: '#6B7280',
  muted: '#F3F4F6',
  border: '#E5E7EB',
  primary: '#D72626', 
  icon: '#4A4A4A',
  chevron: '#9B9B9B',
};

export const darkColors = {
  bg: '#0B0B0E',
  card: '#131318',
  text: '#E5E7EB',
  subtext: '#A1A1AA',
  muted: '#1E1E24',
  border: '#26262C',
  primary: '#D72626',
  icon: '#D1D5DB',
  chevron: '#9CA3AF',
};

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    serif: "Georgia, 'Times New Roman', serif",
    rounded: "'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
    mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
  },
});
