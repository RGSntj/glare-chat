import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TouchableOpacityProps,
} from "react-native";
import { FONTS } from "../../utils/fonts";

import defaultProfile from "../../assets/profile-2.png";

interface ChatProps extends TouchableOpacityProps {
  username: string;
}

export function Chat({ username, ...rest }: ChatProps) {
  return (
    <TouchableOpacity style={s.container} activeOpacity={0.8} {...rest}>
      <View style={s.profileContainer}>
        <View style={s.profileIcon}>
          <Image
            source={defaultProfile}
            resizeMode="contain"
            style={{ maxHeight: 55, maxWidth: 55 }}
          />
        </View>

        <View style={s.userInfo}>
          <Text style={s.username}>{username}</Text>
          <Text style={s.lastMessage}>Corinthians</Text>
        </View>
      </View>

      <Text style={s.lastHourMessage}>11:10</Text>
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
    gap: 15,
    alignItems: "center",
    marginBottom: -5,
  },

  profileIcon: {
    maxHeight: 60,
    maxWidth: 60,
    backgroundColor: "#3B3561",
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
