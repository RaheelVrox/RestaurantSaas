import BackHeader from "@/components/BackHeader";
import CommonButton from "@/components/CommonButton";
import { commonStyles } from "@/styles/commonStyles";
import { Colors } from "@/utils/Constants";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

const OrderAddressScreen: React.FC = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const handleBackPress = () => {
    console.log("Back button pressed!");
  };
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  const handleSave = () => {
    console.log("Save button pressed!");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={commonStyles.container}>
          <BackHeader text="" onBackPress={handleBackPress} />
          <Text style={styles.title}>Where your order going?</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Street Address</Text>
            <TextInput style={styles.input} placeholder="Enter your Name" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Apartment Suite or Floor{" "}
              <Text style={styles.optional}>(optional)</Text>
            </Text>
            <TextInput style={styles.input} placeholder="Enter your Name" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>
              Business Name <Text style={styles.optional}>(optional)</Text>
            </Text>
            <TextInput style={styles.input} placeholder="Enter your Name" />
          </View>
          {!isKeyboardVisible && (
            <CommonButton
              text="Save"
              iconName=""
              onPress={handleSave}
              buttonStyle={{
                alignSelf: "center",
                position: "absolute",
                bottom: "3%",
              }}
            />
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

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
    marginBottom: "4%",
    marginHorizontal: "5%",
    paddingTop: "2.7%",
  },
  inputContainer: {
    marginBottom: "3.5%",
  },
  label: {
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    marginHorizontal: "7%",
    marginBottom: "1.9%",
  },
  optional: {
    color: Colors.primary,
    fontSize: RFValue(13),
    fontFamily: "BarlowRegular",
  },
  input: {
    backgroundColor: Colors.inputfild,
    borderRadius: 50,
    paddingVertical: "1.9%",
    marginHorizontal: "5%",
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    color: Colors.textone,
    fontWeight: "400",
    height: RFValue(45),
    paddingLeft: "5%",
  },
});

export default OrderAddressScreen;
