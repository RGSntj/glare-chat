import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    paddingHorizontal: 10,
    gap: 25,
  },

  headerButtonBack: {
    padding: 9,
    backgroundColor: "#f1f1f1",
    borderRadius: 50,
  },

  labelForgotPasswordHeader: {
    fontFamily: FONTS.overpassExtrabold,
    fontSize: 20,
  },

  content: {
    marginTop: 45,

    display: "flex",
    alignItems: "center",
  },

  imageContainer: {
    backgroundColor: "#f1f1f1",
    padding: 10,
    height: 165,
    width: 165,
    borderRadius: "100%",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  labelCode: {
    textAlign: "center",
    marginTop: 20,
    fontFamily: FONTS.overpassRegular,
    fontSize: 14.5,
  },

  email: {
    fontFamily: FONTS.overpassExtrabold,
  },

  pinCodeText: {
    fontFamily: FONTS.regular,
  },

  resendCode: {
    marginTop: 15,
    fontFamily: FONTS.regular,
  },

  buttonSendConfirmation: {
    marginTop: 20,
    backgroundColor: "#2a9d8f",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 5,
  },

  labelButtonConfirmation: {
    textAlign: "center",
    color: "#FFFFFF",
    fontFamily: FONTS.regular,
  },
});
