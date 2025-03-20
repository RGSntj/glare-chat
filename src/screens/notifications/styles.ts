import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const s = StyleSheet.create({
  container: {
    backgroundColor: COLORS.background,
    flex: 1,
    paddingHorizontal: 23,
    paddingVertical: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },

  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 60 / 2,
    backgroundColor: "#f5f5f5",

    height: 40,
    width: 40,
  },

  labelHeader: {
    fontFamily: FONTS.overpassExtrabold,
    color: "#222",
    fontSize: 18,
  },

  contentNotification: {
    marginTop: 30,
  },

  cardNotification: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  notificationInfo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  profileIcon: {
    height: 55,
    width: 55,
    backgroundColor: "#F3ABA7",
    borderRadius: 60 / 2,
  },

  labelInformations: {
    display: "flex",
  },

  labelUsername: {
    fontFamily: FONTS.kanitMedium,
  },

  labelNotification: {
    fontFamily: FONTS.overpassRegular,
    color: "#cecece",
    fontSize: 11.5,
  },

  icons: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    padding: 4,
  },
});
