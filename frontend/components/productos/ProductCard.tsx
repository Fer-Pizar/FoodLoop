import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { toAbsoluteUrl } from "../../src/api/client";
import { type Producto } from "../../src/api/producto";
import TBold from "../common/TBold";
import T from "../common/T";

const RED = "#d11212ff";

export default function ProductCard({
  producto,
  onEdit,
  onDelete,
}: {
  producto: Producto;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const precio = producto.precio_actual ?? producto.precio_base;
  const tieneDesc =
    producto.precio_actual && producto.precio_actual < producto.precio_base;

  const pct = tieneDesc
    ? Math.round(
        ((producto.precio_base - (producto.precio_actual ?? 0)) /
          producto.precio_base) *
          100
      )
    : 0;

  // 🎨 Color dinámico según reglas de descuento
  const getBadgeColor = (pct: number) => {
    if (pct >= 50) return "#d11212"; // rojo
    if (pct >= 40) return "#f59e0b"; // naranja fuerte
    if (pct >= 30) return "#facc15"; // amarillo
    if (pct >= 20) return "#16a34a"; // verde
    return "#9ca3af"; // gris neutro (sin descuento)
  };

  const badgeColor = getBadgeColor(pct);

  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 12,
        padding: 10,
        marginHorizontal: 16,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 2,
        borderWidth: 1,
        borderColor: "#f1f1f1",
      }}
    >
      {/* Imagen */}
      <Image
        source={{ uri: toAbsoluteUrl(producto.imagen_url) ?? undefined }}
        style={{
          width: 72,
          height: 72,
          borderRadius: 10,
          backgroundColor: "#eee",
        }}
      />

      {/* Info principal */}
      <View style={{ flex: 1, marginLeft: 10 }}>
        <TBold numberOfLines={1} style={{ fontSize: 15 }}>
          {producto.nombre}
        </TBold>
        <T numberOfLines={1} style={{ opacity: 0.6, marginBottom: 6 }}>
          {producto.categorias?.nombre ?? ""}
        </T>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TBold>Bs{precio}</TBold>

          {tieneDesc && (
            <>
              <T
                style={{
                  marginLeft: 8,
                  textDecorationLine: "line-through",
                  opacity: 0.6,
                }}
              >
                Bs{producto.precio_base}
              </T>

              <View
                style={{
                  marginLeft: 8,
                  backgroundColor: badgeColor,
                  paddingHorizontal: 6,
                  paddingVertical: 2,
                  borderRadius: 6,
                }}
              >
                <T style={{ color: "#fff", fontSize: 12 }}>-{pct}%</T>
              </View>
            </>
          )}
        </View>

        {!!producto.fecha_vencimiento && (
          <T style={{ fontSize: 11, opacity: 0.6, marginTop: 4 }}>
            Vence {new Date(producto.fecha_vencimiento).toLocaleDateString()}
          </T>
        )}
      </View>

      {/* Acciones */}
      <View style={{ alignItems: "flex-end", justifyContent: "space-between" }}>
        <T style={{ opacity: 0.6, textAlign: "right" }}>
          Stock{"\n"}
          {producto.cantidad_disponible ?? 0} unid.
        </T>

        <View style={{ flexDirection: "row", gap: 14 }}>
          <TouchableOpacity
            onPress={onEdit}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons name="pencil" size={18} color="#6b7280" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={onDelete}
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
          >
            <Ionicons name="trash" size={18} color={RED} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}