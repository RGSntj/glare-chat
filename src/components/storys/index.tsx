import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { FONTS } from "../../utils/fonts";

export function Storys() {
  return (
    <View style={s.container}>
      <TouchableOpacity style={s.storieContainer} activeOpacity={0.7}>
        <View style={s.storiePlus}>
          <AntDesign name="plus" size={18} color="#757575" />
        </View>

        <Text style={s.storieText}>Novo storie</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    gap: 10,
  },

  storieContainer: {
    display: "flex",
    alignItems: "center",
    gap: 5,
  },

  storiePlus: {
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "#cecece",
    height: 50,
    width: 50,
    borderRadius: 60 / 2,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  storieText: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#616161",
  },
});
