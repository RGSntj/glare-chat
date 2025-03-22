import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FONTS } from "../../utils/fonts";

interface ChatProps {
  username: string;
}

export function Chat({ username }: ChatProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.8}>
      <View style={s.profileContainer}>
        <View style={s.profileIcon} />

        <View style={s.userInfo}>
          <Text style={s.username}>{username}</Text>
          <Text style={s.lastMessage}>Corinthians</Text>
        </View>
      </View>

      <Text style={s.lastHourMessage}>18:10</Text>
    </TouchableOpacity>
  );
}

const s = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 17,
  },

  profileContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: -5,
  },

  profileIcon: {
    height: 55,
    width: 55,
    backgroundColor: "#F3ABA7",
    borderRadius: 60 / 2,
  },

  userInfo: {
    marginBottom: 5,
  },

  username: {
    fontFamily: FONTS.kanitMedium,
  },

  lastMessage: {
    fontFamily: FONTS.kanitRegular,
    color: "#9e9e9e",
    fontSize: 11,
  },

  lastHourMessage: {
    fontFamily: FONTS.regular,
    color: "#9e9e9e",
    fontSize: 12,
  },
});
