import { StyleSheet, Text, View, StatusBar, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { splashStyles } from "@/styles/splashStyles";
import { useFonts } from "expo-font";
import { resetAndNavigate } from "@/utils/Helpers";
import { Colors } from "@/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";

const Main: React.FC = () => {
  const [loaded] = useFonts({
    HappyMonkeyRegular: require("@/assets/fonts/HappyMonkey-Regular.ttf"),
    BarlowRegular: require("@/assets/fonts/Barlow-Regular.ttf"),
    BarlowMedium: require("@/assets/fonts/Barlow-Medium.ttf"),
    BarlowLight: require("@/assets/fonts/Barlow-Light.ttf"),
  });

  const [hasNavigated, setHasNavigated] = useState(false);
  const tokenCheck = async () => {
    resetAndNavigate("/Locationscreen");
  };
  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeoutId = setTimeout(() => {
        tokenCheck();
        setHasNavigated(true);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [loaded, hasNavigated]);

  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.splashbackground}
      />

      <SafeAreaView style={splashStyles.spashcontainer}>
        <Text style={styles.text}>Hot N’ Fast</Text>
        <Text style={styles.texttwo}>Food for{"\n"}Everyone</Text>
      </SafeAreaView>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  text: {
    fontSize: RFValue(40),
    fontFamily: "BarlowRegular",
    fontWeight: "700",
    color: "#FFE500",
    textAlign: "center",
    paddingTop: "35%",
    marginBottom: "35%",
  },
  texttwo: {
    fontSize: RFValue(45),
    fontFamily: "HappyMonkeyRegular",
    color: Colors.texttwo,
    fontWeight: "400",
    textAlign: "center",
  },
});
