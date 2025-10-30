// frontend/components/descuentos/DiscountSampleCard.tsx
import React from "react";
import { View, Image } from "react-native";
import TBold from "../common/TBold";
import T from "../common/T";
import { toAbsoluteUrl } from "../../src/api/client";
import { tierColor, type Tier } from "../../types/discount-ui";

function RowKV({
  k,
  v,
  strong,
  pillColor,
}: {
  k: string;
  v: string;
  strong?: boolean;
  pillColor?: string;
}) {
  if (pillColor) {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
        <T style={{ opacity: 0.7 }}>{k}</T>
        <View style={{ backgroundColor: pillColor, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 6 }}>
          <TBold style={{ color: "#fff", fontSize: 12 }}>{v}</TBold>
        </View>
      </View>
    );
  }
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 8 }}>
      <T style={{ opacity: 0.7 }}>{k}</T>
      {strong ? <TBold>{v}</TBold> : <T>{v}</T>}
    </View>
  );
}

export default function DiscountSampleCard({
  item,
}: {
  item: {
    nombre: string;
    imagen_url?: string | null;
    fecha_vencimiento?: string | null;
    precio_base: number;
    precio_actual?: number | null;
    pct: number;
    tier: Tier;
  };
}) {
  const finalPrice = (item.precio_actual ?? item.precio_base).toFixed(2);

  return (
    <View
      style={{
        marginTop: 12,
        marginHorizontal: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 12,
        borderColor: "#E5E7EB",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.04,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 1,
      }}
    >
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: toAbsoluteUrl(item.imagen_url) ?? undefined }}
          style={{ width: 72, height: 72, borderRadius: 10, backgroundColor: "#eee" }}
        />
        <View style={{ flex: 1 }}>
          <TBold numberOfLines={1}>{item.nombre}</TBold>
          {!!item.fecha_vencimiento && (
            <T style={{ opacity: 0.7 }}>
              Vence: {new Date(item.fecha_vencimiento).toLocaleDateString()}
            </T>
          )}
          <View style={{ marginTop: 8, alignSelf: "flex-end", width: "70%", gap: 4 }}>
            <RowKV k="Precio Original:" v={`Bs${item.precio_base.toFixed(2)}`} />
            <RowKV
              k="Descuento aplicado:"
              v={`-${item.pct}%`}
              pillColor={tierColor(item.tier)}
            />
            <RowKV k="Precio Final:" v={`Bs${finalPrice}`} strong />
          </View>
        </View>
      </View>
    </View>
  );
}
