import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/utils/Constants";
import { commonStyles } from "@/styles/commonStyles";
import BackHeader from "@/components/BackHeader";

const PickupDeliveryScreen: React.FC = () => {
  const handleBackPress = () => {
    console.log("Back button pressed!");
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={commonStyles.container}>
        <BackHeader text="" onBackPress={handleBackPress} />
        <Text style={styles.title}>Choose Pickup {"\n"} or Delivery</Text>
        <Text style={styles.subtitle}>
          Product price or availability may change depending on your location.
        </Text>
        <TouchableOpacity style={styles.option}>
          <Ionicons
            name="location"
            size={35}
            color={Colors.primary}
            style={{ marginRight: "5%" }}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.optionTitle}>Pickup</Text>
            <Text style={styles.optionSubtitle}>Select a restaurant</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#DDDCDC" />
        </TouchableOpacity>
        <View style={styles.divider} />
        <TouchableOpacity style={styles.option}>
          <Image
            source={require("@/assets/images/bikeicon.png")}
            style={styles.icon}
          />
          <View style={styles.textWrapper}>
            <Text style={styles.optionTitle}>Delivery</Text>
            <Text style={styles.optionSubtitle}>Add your address here</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#DDDCDC" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default PickupDeliveryScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: RFValue(15),
    fontFamily: "BarlowRegular",
    fontWeight: "900",
    color: Colors.textone,
    marginBottom: "1%",
    marginHorizontal: "5%",
    paddingTop: "2.7%",
  },
  subtitle: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    marginBottom: "8%",
    marginHorizontal: "5%",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    paddingVertical: "5%",
    marginHorizontal: "7%",
  },
  icon: {
    width: RFValue(28),
    height: RFValue(28),
    resizeMode: "contain",
    marginRight: "5%",
  },
  textWrapper: {
    flex: 1,
  },
  optionTitle: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "900",
  },
  optionSubtitle: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
  },
  divider: {
    height: 1,
    backgroundColor: "#EAEAEA",
    marginHorizontal: "7%",
  },
});
