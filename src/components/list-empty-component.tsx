import { View, Text, Pressable } from "react-native";
import { FONTS } from "../utils/fonts";

import { Ionicons } from "@expo/vector-icons";

export function ListEmptyComponent() {
  return (
    <View
      style={{
        alignItems: "center",
        display: "flex",
        flex: 1,
        marginTop: 40,
        gap: 15,
      }}
    >
      <Ionicons name="chatbubbles-outline" size={60} color="#ceceec" />
      <Text
        style={{
          zIndex: 99,
          fontFamily: FONTS.kanitRegular,
          color: "#727272",
          textAlign: "center",
        }}
      >
        Uau! Parece que você está começando sua jornada de amizades! 😎🚀
        {"\n"}
        <Pressable>
          <Text
            style={{
              fontFamily: FONTS.kanitRegular,
              color: "#778da9",
              fontSize: 13,
              textDecorationLine: "underline",
            }}
          ></Text>
        </Pressable>
      </Text>
    </View>
  );
}
