import { StyleSheet } from "react-native";
import { COLORS } from "../../utils/colors";
import { FONTS } from "../../utils/fonts";

export const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 25,
  },
  shapeRight: {
    width: 250,
    height: 250,
    backgroundColor: "#8d94db",
    padding: 2,
    borderRadius: "50%",
    position: "absolute",
    top: 75,
    right: -110,
  },

  shapeLeft: {
    width: 250,
    height: 250,
    backgroundColor: "#21978B",
    padding: 2,
    borderRadius: "50%",
    position: "absolute",
    bottom: 120,
    left: -110,
  },

  containerLabels: {
    marginTop: 75,
  },

  labelWelcome: {
    fontSize: 23,
    fontFamily: FONTS.overpassExtrabold,
  },

  labelCreateAccount: {
    fontSize: 14,
    fontFamily: FONTS.kanitMedium,
  },

  labelRegister: {
    textDecorationLine: "underline",
    color: "#21978B",
  },

  labelLogin: {
    fontFamily: FONTS.overpassExtrabold,
    marginTop: 70,
    fontSize: 20,
    // color: "#444B59",
  },

  containerForm: {
    marginTop: 30,
    display: "flex",
    gap: 15,
  },

  labelsForm: {
    display: "flex",
    gap: 5,
  },

  labelUsername: {
    fontFamily: FONTS.kanitRegular,
  },

  input: {
    zIndex: 10,
    // backgroundColor: "#fefefe",
    fontFamily: FONTS.regular,
    // borderRadius: 15,
    borderBottomWidth: 1,
    borderColor: "#789ADE",
  },

  button: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#8699DA",
    paddingVertical: 10,
    borderRadius: 60 / 2,
  },
  labelButton: {
    color: "#fff",
    textTransform: "uppercase",
    fontFamily: FONTS.overpassExtrabold,
  },
});
