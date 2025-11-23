import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { Appearance, ColorSchemeName } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { darkColors, lightColors } from '@/constants/theme';

type ThemeMode = 'light' | 'dark' | 'system';

/**
 * Tomamos la forma base de tu paleta desde constants/theme,
 * y aquí EXTENDEMOS para incluir `onPrimary` que usa tu UI.
 */
type BaseColors = typeof lightColors;
type Colors = BaseColors & {
  /** Color para texto/iconos sobre superficies "primary" (headers, FABs, badges) */
  onPrimary: string;
};

type Ctx = {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  isDark: boolean;
  colors: Colors;
};

const ThemeCtx = createContext<Ctx | null>(null);
const KEY = 'foodloop.theme.mode';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useState<ThemeMode>('light');
  const [system, setSystem] = useState<ColorSchemeName>(Appearance.getColorScheme());

  // Carga preferencia guardada
  useEffect(() => {
    AsyncStorage.getItem(KEY).then((v) => {
      if (v === 'light' || v === 'dark' || v === 'system') setMode(v);
    });
  }, []);

  // Escucha cambios del sistema (cuando el modo = system)
  useEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => setSystem(colorScheme));
    return () => sub.remove();
  }, []);

  // ¿Modo oscuro efectivo?
  const isDark = useMemo(() => {
    if (mode === 'dark') return true;
    if (mode === 'light') return false;
    return system === 'dark';
  }, [mode, system]);

  // Paleta base desde constants/theme
  const base = isDark ? darkColors : lightColors;

  /**
   * Paleta FINAL que expone el provider (incluye onPrimary).
   * Si en el futuro agregas onPrimary directamente en constants/theme,
   * esto seguirá funcionando (el valor de base.onPrimary sobrescribe el fallback).
   */
  const colors = useMemo<Colors>(() => {
    const fallbackOnPrimary = '#FFFFFF'; // alta legibilidad sobre primary
    return {
      ...base,
      onPrimary: (base as any).onPrimary ?? fallbackOnPrimary,
    };
  }, [base]);

  const setModePersist = (m: ThemeMode) => {
    setMode(m);
    AsyncStorage.setItem(KEY, m).catch(() => {});
  };

  const value = useMemo<Ctx>(
    () => ({ mode, setMode: setModePersist, isDark, colors }),
    [mode, isDark, colors]
  );

  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
};

export const useTheme = () => {
  const ctx = useContext(ThemeCtx);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
