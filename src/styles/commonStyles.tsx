import { Colors } from "@/utils/Constants";
import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: "4.4%",
  },
  containerBlack: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  flexRowBetween: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  flexRowGap: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  lightText: {
    opacity: 0.7,
    marginTop: 2,
  },
});
