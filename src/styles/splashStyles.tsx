import { Colors, screenHeight, screenWidth } from "@/utils/Constants";
import { StyleSheet } from "react-native";

export const splashStyles = StyleSheet.create({
  img: {
    width: screenWidth * 0.4,
    height: screenHeight * 0.4,
    resizeMode: "contain",
  },
  text: {
    position: "absolute",
    bottom: 40,
  },
  spashcontainer: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: Colors.splashbackground,
  },
});
