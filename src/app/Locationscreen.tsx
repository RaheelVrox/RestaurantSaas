import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/commonStyles";
import { uiStyles } from "@/styles/uiStyles";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/utils/Constants";
import CommonButton from "../components/CommonButton";
import { router } from "expo-router";

const Locationscreen = () => {
  const handleContinue = () => {
    router.navigate("/customer/Auth");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/AllowLocation.png")}
          style={uiStyles.adImage}
        />

        <Image
          source={require("@/assets/images/bikeicon.png")}
          style={uiStyles.bikeImage}
        />
        <Text style={styles.heading}> Allow Location</Text>
        <Text style={styles.discreption}>
          {" "}
          Faster and more accurate delivery
        </Text>
        <CommonButton
          text="Share my current location"
          onPress={() => {
            handleContinue();
          }}
        />
        <Text style={styles.discreptiontwo}>
          By allowing location access, you can search restaurants and shops near
          you and receive more accurate delivery
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Locationscreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Colors.background,
    paddingTop: "5%",
  },
  heading: {
    fontSize: RFValue(24),
    fontFamily: "HappyMonkeyRegular",
    fontWeight: "400",
    color: Colors.primary,
    textAlign: "center",
  },
  discreption: {
    fontSize: RFValue(16),
    fontFamily: "BarlowRegular",
    color: Colors.text,
    textAlign: "center",
    fontWeight: "300",
    marginBottom: "5%",
  },
  discreptiontwo: {
    fontSize: RFValue(11),
    fontFamily: "BarlowRegular",
    color: Colors.text,
    textAlign: "center",
    marginTop: "5%",
    fontWeight: "400",
    width: "80%",
    lineHeight: 18,
  },
});
