import React, { useState, useMemo } from "react";
import { View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import HistorialHeader from "../../../components/historial/HistorialHeader";
import HistorialCard from "../../../components/historial/HistorialCard";
import HistorialModal from "../../../components/historial/HistorialModal";
import T from "../../../components/common/T";
import TBold from "../../../components/common/TBold";

import { useHistorialNegocio } from "../../../hooks/useHistorialNegocio";

export default function HistorialVentas() {
  const { items, loading, error } = useHistorialNegocio();

  const [search, setSearch] = useState("");
  const [openFilter, setOpenFilter] = useState(false);
  const [filter, setFilter] = useState("Todos");
  const [selected, setSelected] = useState<any>(null);

  const filtered = useMemo(() => {
    return items.filter((r: any) => {
      const byCode = r.codigo.toLowerCase().includes(search.toLowerCase());
      const byFilter =
        filter === "Todos" ? true : r.estado === filter.toLowerCase();
      return byCode && byFilter;
    });
  }, [items, search, filter]);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <HistorialHeader title="Historial Pedidos" />

      <ScrollView contentContainerStyle={{ padding: 16 }}>
        {/* 🔎 BUSCADOR */}
        <View
          style={{
            backgroundColor: "#f1f1f1",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            marginBottom: 14,
          }}
        >
          <Ionicons name="search" size={18} color="#666" />
          <TextInput
            placeholder="Buscar por código..."
            style={{ flex: 1, marginLeft: 6 }}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        {/* 🔽 FILTRO FULL WIDTH */}
        <View style={{ width: "100%", marginBottom: 16 }}>
          <TouchableOpacity
            onPress={() => setOpenFilter(!openFilter)}
            style={{
              backgroundColor: "#E0E0E0",
              padding: 12,
              borderRadius: 8,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <T>Filtro: {filter}</T>
            <Ionicons
              name={openFilter ? "chevron-up" : "chevron-down"}
              size={18}
              color="#333"
            />
          </TouchableOpacity>

          {openFilter && (
            <View
              style={{
                backgroundColor: "#D9D9D9",
                marginTop: 4,
                borderRadius: 8,
                paddingVertical: 6,
              }}
            >
              {["Todos", "pendiente", "confirmada", "entregada", "cancelada"].map(
                (opt) => (
                  <TouchableOpacity
                    key={opt}
                    onPress={() => {
                      setFilter(opt);
                      setOpenFilter(false);
                    }}
                    style={{ paddingVertical: 8, paddingHorizontal: 12 }}
                  >
                    <T
                      style={{
                        color: opt === filter ? "#d11212" : "#333",
                      }}
                    >
                      {opt}
                    </T>
                  </TouchableOpacity>
                )
              )}
            </View>
          )}
        </View>

        {/* LISTA */}
        {filtered.map((item: any) => (
          <HistorialCard key={item.id_reserva} item={item} onOpen={() => setSelected(item)} />
        ))}
      </ScrollView>

      <HistorialModal visible={!!selected} item={selected} onClose={() => setSelected(null)} />
    </View>
  );
}

