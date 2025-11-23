import { View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
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
  const { top } = useSafeAreaInsets(); // 👈 obtiene el espacio superior
  const hasAvatar = !!(avatarUrl && avatarUrl.trim().length);

  return (
    <View
      style={{
        backgroundColor: "#fff",
        paddingTop: top + 8, // 👈 respeta notch + margen extra
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
          >
            <Ionicons name="chevron-back" size={20} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View style={{ width: BTN_SIZE, height: BTN_SIZE }} />
        )}

        <View style={{ flex: 1, alignItems: "center" }}>
          <TBold numberOfLines={1} style={{ fontSize: 18, textAlign: "center" }}>
            {`${saludo}, ${nombre}!`}
          </TBold>
        </View>

        <TouchableOpacity
          onPress={onAvatarPress}
          activeOpacity={0.8}
          style={{
            width: BTN_SIZE,
            height: BTN_SIZE,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {hasAvatar ? (
            <Image
              key={avatarUrl || "avatar"}
              source={{ uri: avatarUrl! }}
              style={{
                width: BTN_SIZE,
                height: BTN_SIZE,
                borderRadius: BTN_SIZE / 2,
                backgroundColor: "#eee",
              }}
              resizeMode="cover"
              onError={(e) =>
                console.warn("avatar onError:", e.nativeEvent?.error, "url:", avatarUrl)
              }
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
