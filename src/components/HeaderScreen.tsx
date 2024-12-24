import { Colors } from "@/utils/Constants";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import Icon from "react-native-vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const HeaderScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Icon name="menu" size={30} color={Colors.textone} />
        </TouchableOpacity>
        <Text style={styles.title}>Hot N’ Fast</Text>
        <TouchableOpacity style={styles.iconButton}>
          <AntDesign name="search1" size={23} color={Colors.textone} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: "3.5%",
    height: RFValue(60),
    borderBottomColor: "#e0e0e0",
  },
  iconButton: {
    padding: 8,
  },
  title: {
    fontSize: RFValue(20),
    textAlign: "center",
    fontFamily: "BarlowRegular",
    fontWeight: "700",
    color: Colors.primary,
  },
});

export default HeaderScreen;
