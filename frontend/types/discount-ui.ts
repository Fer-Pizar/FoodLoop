// frontend/utils/discount-ui.ts
export type Tier = "rojo" | "amarillo" | "verde" | "sin";

export function daysLeft(fecha?: string | null): number | null {
  if (!fecha) return null;
  const d = new Date(fecha);
  const diff = d.getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

export function tierByDays(days: number | null): Tier {
  if (days === null) return "sin";
  if (days <= 1) return "rojo";
  if (days <= 3) return "amarillo";
  if (days <= 7) return "verde";
  return "sin";
}

export function tierColor(t: Tier) {
  if (t === "rojo") return "#EF4444";
  if (t === "amarillo") return "#F59E0B";
  if (t === "verde") return "#10B981";
  return "#9CA3AF"; // sin
}
