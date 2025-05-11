import { StyleSheet } from "react-native";
import { FONTS } from "../../utils/fonts";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,

    paddingVertical: 20,
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

  contentContainer: {
    display: "flex",
    alignItems: "center",
    gap: 15,
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

  textForgotPasswordContent: {
    textAlign: "center",
    fontFamily: FONTS.overpassRegular,
    fontSize: 17,
    // letterSpacing: 1.1,
  },

  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    borderWidth: 1,
    borderColor: "#f1f1f1",
    padding: 4,
    paddingHorizontal: 20,
    borderRadius: 30,

    marginTop: 20,
    width: "100%",
  },

  input: {
    flex: 1,
    fontFamily: FONTS.overpassRegular,
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
