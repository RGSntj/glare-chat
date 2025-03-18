import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { FONTS } from "../../utils/fonts";

export function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Text style={styles.username}>Olá, Rodrygo!</Text>
        <Text style={styles.unreadText}>0 Mensagens não lidas</Text>
      </View>

      <View style={styles.contentRight}>
        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <View style={styles.unreadIcon} />

          <FontAwesome6 name="bell" size={15} color="#757575" />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.7} style={styles.button}>
          <FontAwesome6 name="user-plus" size={15} color="#757575" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",

    paddingHorizontal: 5,
    paddingVertical: 20,
  },

  profileContainer: {
    display: "flex",
    gap: 3,
  },

  unreadIcon: {
    height: 10,
    width: 10,
    position: "absolute",
    backgroundColor: "#FF4C51",
    borderRadius: 60 / 2,

    top: 0,
    right: 0,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 60 / 2,
    backgroundColor: "#f5f5f5",

    height: 40,
    width: 40,

    position: "relative",
  },

  username: {
    fontFamily: FONTS.kanitRegular,
    fontSize: 17,
  },

  unreadText: {
    fontFamily: FONTS.regular,
    fontSize: 12,

    color: "#dedede",
  },

  contentRight: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
});
