import { View, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import T from "./T";
import TBold from "./TBold";

const ICON_COLOR = "#444";
const CHEVRON_COLOR = "#bbb";

export function RowItem({
  icon = "person-circle-outline",
  title,
  subtitle,
  onPress,
}: {
  icon?: any;
  title: string;
  subtitle?: string;
  onPress?: () => void;
}) {
  const isDisabled = !onPress;

  const Container: any = isDisabled ? View : TouchableOpacity;

  return (
    <Container
      {...(!isDisabled && { onPress, activeOpacity: 0.7 })}
      style={{
        paddingHorizontal: 16,
        paddingVertical: 14,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#f0f0f0",
        opacity: isDisabled ? 0.8 : 1,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12 }}>
        <Ionicons name={icon} size={24} color={ICON_COLOR} />
        <View style={{ flex: 1 }}>
          <TBold style={{ fontSize: 15 }}>{title}</TBold>
          {!!subtitle && (
            <T style={{ fontSize: 13, color: "#555", marginTop: 2 }}>
              {subtitle}
            </T>
          )}
        </View>

        {!isDisabled && (
          <Ionicons name="chevron-forward" size={18} color={CHEVRON_COLOR} />
        )}
      </View>
    </Container>
  );
}


