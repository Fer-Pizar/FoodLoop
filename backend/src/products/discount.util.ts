// src/products/discount.util.ts
export function daysToExpire(date?: Date | null) {
  if (!date) return Infinity;
  const end = new Date(date); end.setHours(23,59,59,999);
  const now = new Date();
  const ms = end.getTime() - now.getTime();
  return Math.ceil(ms / (24 * 60 * 60 * 1000));
}

export function autoDiscountPct(dias: number) {
  if (dias === Infinity) return 0;
  if (dias <= 1) return 50;
  if (dias === 2) return 40;
  if (dias === 3) return 30;
  return 20; // >=4
}

export function effectivePricing(p: {
  precio_base: number | string;
  precio_actual?: number | string | null;
  fecha_vencimiento?: Date | null;
}) {
  const base = Number(p.precio_base);
  const manual = p.precio_actual == null ? null : Number(p.precio_actual);

  // Opción Mixta: si hay manual válido y <= base, lo usamos.
  if (manual != null && !Number.isNaN(manual) && manual >= 0 && manual <= base) {
    const pct = Math.round(((base - manual) / base) * 100);
    return { precioFinal: manual, descuentoPct: pct, origen: "manual" as const };
  }

  // Automático por vencimiento
  const dias = daysToExpire(p.fecha_vencimiento ?? null);
  const pct = autoDiscountPct(dias);
  const precioFinal = Math.max(0, Number((base * (1 - pct / 100)).toFixed(2)));
  return { precioFinal, descuentoPct: pct, origen: "auto" as const, diasParaVencer: dias };
}
