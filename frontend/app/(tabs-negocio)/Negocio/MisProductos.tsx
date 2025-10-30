// app/(tabs-negocio)/negocio/MisProductos.tsx
import React, { useMemo, useState } from "react";
import { View, ActivityIndicator, FlatList, Alert, Modal, TouchableOpacity } from "react-native";
import { useMisProductos } from "../../../hooks/useMisProductos";
import { productosApi, type Producto } from "../../../src/api/producto";
import ProductsHeader from "../../../components/productos/ProductsHeader";
import ProductCard from "../../../components/productos/ProductCard";
import NewProductModal from "../../../components/productos/NewProductModal";
import EditProductModal from "../../../components/productos/EditProductModal";
import T from "../../../components/common/T";
import TBold from "../../../components/common/TBold";

const RED = "#d11212ff";

export default function MisProductos() {
  const { items, loading, error, refetch } = useMisProductos();

  const [openNew, setOpenNew] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [editing, setEditing] = useState<Producto | null>(null);

  const activos = useMemo(() => (items ?? []).filter((p) => p.estado !== false).length, [items]);

  // Crear
  const handleCreate = async (
    payload: {
      nombre: string;
      precio_base: number;
      cantidad_disponible?: number;
      fecha_vencimiento?: string | null;
      id_categoria?: string;
      descripcion?: string | null;
    },
    imageUri?: string
  ) => {
    try {
      const created = await productosApi.create({ id_categoria: payload.id_categoria ?? "1", ...payload } as any);
      if (imageUri) await productosApi.uploadImage(created.id_producto, imageUri);
      setOpenNew(false);
      await refetch();
      Alert.alert("¡Listo!", "Producto creado correctamente.");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo crear el producto. Intenta nuevamente.");
    }
  };

  // Editar
  const handleEditSave = async (
    payload: {
      nombre: string;
      descripcion?: string | null;
      precio_base: number;
      precio_actual?: number | null;
      cantidad_disponible?: number;
      fecha_vencimiento?: string | null;
      estado?: boolean;
    },
    options?: { replaceImageUri?: string; removeImage?: boolean }
  ) => {
    if (!editing) return;
    try {
      await productosApi.update(editing.id_producto, payload);
      if (options?.removeImage) {
        await productosApi.deleteImage(editing.id_producto);
      } else if (options?.replaceImageUri) {
        await productosApi.uploadImage(editing.id_producto, options.replaceImageUri);
      }
      setOpenEdit(false);
      setEditing(null);
      await refetch();
      Alert.alert("¡Listo!", "Producto actualizado");
    } catch (err) {
      console.error(err);
      Alert.alert("Error", "No se pudo actualizar el producto.");
    }
  };

  // Eliminar
  const handleDelete = (p: Producto) => {
    Alert.alert("Eliminar producto", `¿Eliminar “${p.nombre}”?`, [
      { text: "Cancelar", style: "cancel" },
      {
        text: "Eliminar",
        style: "destructive",
        onPress: async () => {
          await productosApi.remove(p.id_producto);
          await refetch();
          Alert.alert("Listo", "Producto eliminado");
        },
      },
    ]);
  };

  // Loading / Error
  if (loading)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator color={RED} />
        <T style={{ marginTop: 8 }}>Cargando productos…</T>
      </View>
    );

  if (error)
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", padding: 16 }}>
        <TBold style={{ marginBottom: 6 }}>No se pudo cargar 😵</TBold>
        <T style={{ opacity: 0.7, marginBottom: 12 }}>{String(error)}</T>
        <TouchableOpacity onPress={refetch as any} style={{ backgroundColor: RED, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 8 }}>
          <TBold style={{ color: "#fff" }}>Reintentar</TBold>
        </TouchableOpacity>
      </View>
    );

  // UI principal
  return (
    <View style={{ flex: 1, backgroundColor: "#f9fafb" }}>
      <FlatList
        data={items}
        keyExtractor={(p) => String(p.id_producto)}
        ListHeaderComponent={<ProductsHeader title="Mis productos" subtitle="Productos activos" count={activos} onNew={() => setOpenNew(true)} />}
        renderItem={({ item }) => (
          <ProductCard
            producto={item}
            onEdit={() => {
              setEditing(item);
              setOpenEdit(true);
            }}
            onDelete={() => handleDelete(item)}
          />
        )}
        contentContainerStyle={{ paddingBottom: 24 }}
        refreshing={loading}
        onRefresh={refetch}
      />

      {/* Crear */}
      <Modal visible={openNew} transparent animationType="fade" onRequestClose={() => setOpenNew(false)}>
        <NewProductModal onCancel={() => setOpenNew(false)} onSave={handleCreate} />
      </Modal>

      {/* Editar */}
      <Modal visible={openEdit} transparent animationType="fade" onRequestClose={() => { setOpenEdit(false); setEditing(null); }}>
        {editing ? (
          <EditProductModal
            producto={editing}
            onCancel={() => { setOpenEdit(false); setEditing(null); }}
            onSave={handleEditSave}
          />
        ) : null}
      </Modal>
    </View>
  );
}