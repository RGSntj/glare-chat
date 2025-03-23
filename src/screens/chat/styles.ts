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
    paddingVertical: 8,
    paddingHorizontal: 5,
  },

  rightContent: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 60 / 2,
  },

  leftContent: {},

  containerMessages: {
    flex: 1,
    backgroundColor: "#f1f1f1",
    // paddingHorizontal: 20,
  },

  message: {
    backgroundColor: "#ffffff",
    alignSelf: "flex-start",
    padding: 11,
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    borderBottomRightRadius: 10,

    marginBottom: 7,
    maxWidth: 300,
  },

  messageRight: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 10,
    backgroundColor: "#e8e8e8",
  },

  messageInfo: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
  },

  messageRow: {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  },

  contentMessage: {
    color: "#000000",
  },

  myMessage: {
    color: "#",
  },

  hoursSentAt: {
    fontSize: 10,
    alignSelf: "flex-end",
    color: "#96939b",
  },

  sendMessagesArea: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 9.5,
    gap: 10,
    backgroundColor: "#f1f1f1",
  },

  containerInput: {
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    height: 45,
    paddingHorizontal: 10,
    flex: 1,
  },

  plusButton: {
    backgroundColor: "#e1e1e1",
    borderRadius: 30,
    padding: 5,
  },

  input: {
    flex: 1,
  },

  sendMessageButton: {
    padding: 10,
  },
});
