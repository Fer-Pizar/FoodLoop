// frontend/app/(tabs-negocio)/Negocio/ReglasDescuento.tsx
import React, { useMemo } from "react";
import { View, ScrollView } from "react-native";
import { useMisProductos } from "../../../hooks/useMisProductos";
import T from "../../../components/common/T";
import TBold from "../../../components/common/TBold";
import DiscountHeader from "../../../components/descuentos/DiscountHeader";
import RuleRow from "../../../components/descuentos/RuleRow";
import DiscountSampleCard from "../../../components/descuentos/DiscountSampleCard";
import { daysLeft, tierByDays, tierColor } from "../../../types/discount-ui";

const RED = "#d11212ff";

export default function ReglasDescuento() {
  const { items = [], loading } = useMisProductos();

  const enriched = useMemo(() => {
    return items.map((p) => {
      const dLeft = daysLeft(p.fecha_vencimiento);
      const pct =
        p.precio_actual != null && p.precio_actual < p.precio_base
          ? Math.round(((p.precio_base - (p.precio_actual ?? 0)) / p.precio_base) * 100)
          : 0;
      const ahorro = p.precio_actual != null ? p.precio_base - (p.precio_actual ?? 0) : 0;
      return { ...p, dLeft, pct, ahorro, tier: tierByDays(dLeft) };
    });
  }, [items]);

  const sample = useMemo(() => {
    return [...enriched].filter((p) => p.pct > 0).sort((a, b) => (a.dLeft ?? 999) - (b.dLeft ?? 999))[0];
  }, [enriched]);

  const conDesc = enriched.filter((p) => p.pct > 0);
  const reduccionDesperdicio = items.length ? Math.round((conDesc.length / items.length) * 100) : 0;
  const ahorroPromedio = conDesc.length ? conDesc.reduce((acc, p) => acc + p.ahorro, 0) / conDesc.length : 0;

  return (
    <View style={{ flex: 1, backgroundColor: "#F9FAFB" }}>
      <DiscountHeader />

      <ScrollView contentContainerStyle={{ paddingBottom: 24 }}>
        {/* Reglas */}
        <View style={{ paddingHorizontal: 16, paddingTop: 12 }}>
          <TBold style={{ fontSize: 16, color: "#111827", marginBottom: 8 }}>Reglas de descuento</TBold>

          <RuleRow
            color={tierColor("rojo")}
            percent="50 % de descuento"
            subtitle="Vence hoy o mañana"
            chipText="0–1 días"
            chipColor={tierColor("rojo")}
          />
          <RuleRow
            color={tierColor("amarillo")}
            percent="40 % de descuento"
            subtitle="Vence en 2 días"
            chipText="2 días"
            chipColor={tierColor("amarillo")}
          />
          <RuleRow
            color={tierColor("amarillo")}
            percent="30 % de descuento"
            subtitle="Vence en 3 días"
            chipText="3 días"
            chipColor={tierColor("amarillo")}
          />
          <RuleRow
            color={tierColor("verde")}
            percent="20 % de descuento"
            subtitle="Vence en 4 días o más"
            chipText="4+ días"
            chipColor={tierColor("verde")}
          />
        </View>

        {/* Ejemplo aplicado */}
        {sample ? <DiscountSampleCard item={sample as any} /> : null}

        {/* Resumen inferior */}
        <View
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            backgroundColor: "#FDE8E8",
            borderRadius: 12,
            padding: 16,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
            <View style={{ alignItems: "center" }}>
              <TBold style={{ fontSize: 20, color: "#059669" }}>{reduccionDesperdicio}%</TBold>
              <T style={{ opacity: 0.8 }}>Reducción desperdicio</T>
            </View>
            <View style={{ width: 1, height: 40, backgroundColor: "#E5E7EB" }} />
            <View style={{ alignItems: "center" }}>
              <TBold style={{ fontSize: 20, color: RED }}>Bs{ahorroPromedio.toFixed(2)}</TBold>
              <T style={{ opacity: 0.8 }}>Ahorro promedio/mes*</T>
            </View>
          </View>
          <T style={{ marginTop: 8, fontSize: 11, opacity: 0.6 }}>
            *Estimado con base en tus productos con descuento actuales.
          </T>
        </View>

        {loading ? <T style={{ textAlign: "center", marginTop: 12 }}>Actualizando…</T> : null}
      </ScrollView>
    </View>
  );
}
