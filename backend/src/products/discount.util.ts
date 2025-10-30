// src/products/discount.util.ts
export function daysToExpire(date?: Date | null) {
  if (!date) return Infinity;
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);
  const now = new Date();
  const diffMs = end.getTime() - now.getTime();
  return Math.ceil(diffMs / (24 * 60 * 60 * 1000));
}

// Reglas:
/// 0–1 días => 50%
/// 2 días  => 40%
/// 3 días  => 30%
/// 4+ días => 20%
/// Sin fecha => 0%
export function autoDiscountPct(dias: number) {
  if (dias === Infinity) return 0;
  if (dias <= 1) return 50;
  if (dias === 2) return 40;
  if (dias === 3) return 30;
  return 20;
}

export function effectivePricingAuto(p: {
  precio_base: number | string;
  fecha_vencimiento?: Date | null;
}) {
  const base = Number(p.precio_base);
  const dias = daysToExpire(p.fecha_vencimiento ?? null);
  const pct = autoDiscountPct(dias);
  const precioFinal = Math.max(0, Number((base * (1 - pct / 100)).toFixed(2)));
  return { precioFinal, descuentoPct: pct, diasParaVencer: dias as number };
}