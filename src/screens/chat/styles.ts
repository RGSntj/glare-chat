import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // backgroundColor: "#f1f1f1",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },

  rightContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  username: {
    fontFamily: FONTS.bold,
    fontSize: 15,
  },

  userStatus: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: "#affc41",
  },

  profilePhoto: {
    maxHeight: 45,
    maxWidth: 45,
    backgroundColor: "#3B3561",
    borderRadius: 60 / 2,
  },

  userInformations: {
    display: "flex",
  },

  button: {
    height: 40,
    width: 40,
    // backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 60 / 2,
  },

  leftContent: {},

  containerMessages: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  message: {
    backgroundColor: "#ffffff",
    width: "auto",
    alignSelf: "flex-start",
    padding: 12.5,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 30,
    borderBottomRightRadius: 30,

    marginBottom: 7,
  },

  messageRight: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 30,
  },

  contentMessage: {
    fontFamily: FONTS.regular,
  },

  sendMessagesArea: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    // paddingVertical: 20,
    height: 90,
    paddingHorizontal: 20,
    gap: 10,
  },

  containerInput: {
    backgroundColor: "#f2f2f2",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 50,
    paddingHorizontal: 10,
    flex: 1,
  },

  plusButton: {
    backgroundColor: "#04a777",
    borderRadius: 30,
    padding: 5,
  },

  input: {
    flex: 1,
    fontFamily: FONTS.regular,
  },

  sendMessageButton: {
    // backgroundColor: "#f2f2f2",
    padding: 10,
    // borderRadius: 60 / 2,
  },
});
