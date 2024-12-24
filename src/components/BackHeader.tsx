import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Colors } from "@/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";

type BackHeaderProps = {
  text: string;
  onBackPress?: () => void;
};

const BackHeader: React.FC<BackHeaderProps> = ({ text, onBackPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backArrow}>
        <MaterialIcons name="arrow-back" size={26} color={Colors.textone} />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  backArrow: {
    marginRight: "3%",
  },
  text: {
    fontSize: RFValue(15),
    fontFamily: "BarlowRegular",
    fontWeight: "900",
    color: Colors.textone,
  },
});

export default BackHeader;
