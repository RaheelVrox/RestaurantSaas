import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import BackHeader from "@/components/BackHeader";
import { commonStyles } from "@/styles/commonStyles";
import { Colors } from "@/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";

const PickupDetail: React.FC = () => {
  const handleBackPress = () => {
    console.log("Back button pressed!");
  };
  return (
    <View style={commonStyles.container}>
      <BackHeader text="Your Order" onBackPress={handleBackPress} />
      <View style={styles.section}>
        <Text style={styles.sectionTitlee}>Pickup Detail</Text>
        <View style={styles.row}>
          <Ionicons name="location" size={35} color={Colors.primary} />
          <View style={styles.addressContainer}>
            <Text style={styles.address}>
              176 Newberry Commons,{"\n"}Goldsboro, PA 17319,{"\n"} United
              States
            </Text>
          </View>
          <TouchableOpacity style={styles.changebox}>
            <Text style={styles.changeButton}>Change</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Order Summary</Text>
        <View style={styles.summaryRow}>
          <Text style={styles.summaryText}>
            <Text style={styles.boldText}>SubTotal {""}</Text> (including VAT)
          </Text>
          <Text style={styles.summaryValue}>$23.97</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.boldText}>VAT</Text>
          <Text style={styles.summaryValue}>$0.72</Text>
        </View>
        <View style={styles.summaryRow}>
          <Text style={styles.boldText}>Total</Text>
          <Text style={styles.summaryValue}>$23.97</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.paymentMethod}>
        <Text style={styles.paymentText}>Choose payment method</Text>
        <Ionicons name="chevron-forward" size={22} color="#C3C8CD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginBottom: "5%",
    marginHorizontal: "6%",
  },
  sectionTitlee: {
    fontSize: RFValue(15),
    fontFamily: "BarlowRegular",
    fontWeight: "900",
    color: Colors.textone,
    marginBottom: "4%",
    paddingTop: "7.5%",
  },
  sectionTitle: {
    fontSize: RFValue(15),
    fontFamily: "BarlowRegular",
    fontWeight: "900",
    color: Colors.textone,
    marginBottom: "3%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  addressContainer: {
    flex: 1,
    marginLeft: "3%",
  },
  address: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
  },
  changebox: {
    borderWidth: 1,
    height: RFValue(23),
    width: RFValue(65),
    borderRadius: 25,
    borderColor: Colors.primary,
    alignItems: "center",
    alignSelf: "center",
  },
  changeButton: {
    fontSize: RFValue(12),
    fontFamily: "BarlowRegular",
    color: Colors.primary,
    fontWeight: "500",
    textAlign: "center",
  },
  summaryRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "2.5%",
  },
  summaryText: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "500",
  },
  boldText: {
    fontSize: RFValue(11),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "bold",
  },
  summaryValue: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "500",
  },
  paymentMethod: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#EFF2F5",
    borderRadius: 50,
    paddingVertical: "1.9%",
    marginHorizontal: "7%",
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    height: RFValue(48),
    paddingLeft: "5%",
    marginTop: "7%",
    borderWidth: 0.6,
    borderColor: "#D2D8DD",
  },
  paymentText: {
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
  },
});

export default PickupDetail;
