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

  errorMessageContainer: {
    marginTop: 10,
    backgroundColor: "#F36A7B",
    alignSelf: "flex-start",
    borderRadius: 5,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    opacity: 0.8,
  },

  contentErrorMessage: {
    fontFamily: FONTS.overpassRegular,
    fontSize: 13,
    color: "#ffffff",
  },

  resendCode: {
    marginTop: 15,
    fontFamily: FONTS.regular,
  },
});
