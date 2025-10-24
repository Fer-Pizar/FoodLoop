import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import T from "../common/T";
import TBold from "../common/TBold";

const RED = "#d11212ff";
const BTN_SIZE = 34;

export function HeaderPerfil({
  saludo,
  nombre,
  avatarUrl,
  onBack,
  onAvatarPress,
}: {
  saludo: string;
  nombre: string;
  avatarUrl?: string | null;
  onBack?: () => void;
  onAvatarPress?: () => void;
}) {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingTop: 8,
        paddingBottom: 12,
        borderBottomWidth: 1,
        borderColor: "#eee",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          gap: 12,
        }}
      >
        {/* Botón atrás: redondo y rojo */}
        {onBack ? (
          <TouchableOpacity
            onPress={onBack}
            activeOpacity={0.8}
            style={{
              width: BTN_SIZE,
              height: BTN_SIZE,
              borderRadius: BTN_SIZE / 2,
              backgroundColor: RED,
              alignItems: "center",
              justifyContent: "center",
            }}
            hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
          >
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          // Espaciador para mantener el título centrado si no hay back
          <View style={{ width: BTN_SIZE, height: BTN_SIZE }} />
        )}

        {/* Saludo con cierre "!" y Comfortaa en bold */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <TBold
            numberOfLines={1}
            style={{ fontSize: 18, textAlign: "center" }}
          >
            {`${saludo}, ${nombre}!`}
          </TBold>
        </View>

        {/* Avatar / icono tienda (mismo ancho que el botón back para centrar título) */}
        <TouchableOpacity
          onPress={onAvatarPress}
          activeOpacity={0.8}
          style={{ width: BTN_SIZE, height: BTN_SIZE, alignItems: "center", justifyContent: "center" }}
          hitSlop={{ top: 6, bottom: 6, left: 6, right: 6 }}
        >
          {avatarUrl ? (
            <Image
              source={{ uri: avatarUrl }}
              style={{ width: BTN_SIZE, height: BTN_SIZE, borderRadius: BTN_SIZE / 2 }}
            />
          ) : (
            <View
              style={{
                width: BTN_SIZE,
                height: BTN_SIZE,
                borderRadius: BTN_SIZE / 2,
                borderWidth: 1,
                borderColor: RED,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <Ionicons name="storefront-outline" size={18} color={RED} />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}


