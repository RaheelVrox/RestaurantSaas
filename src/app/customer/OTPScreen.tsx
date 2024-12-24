import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { commonStyles } from "@/styles/commonStyles";
import { Colors } from "@/utils/Constants";
import { RFValue } from "react-native-responsive-fontsize";
import CommonButton from "@/components/CommonButton";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const OTPScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);

  const otpRefs = Array(6)
    .fill("")
    .map(() => useRef<TextInput>(null));

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => setIsKeyboardVisible(true)
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => setIsKeyboardVisible(false)
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  const otpSchema = yup.object().shape({
    otp: yup
      .array()
      .of(yup.string().matches(/^\d$/, "Must be a number").required("Required"))
      .length(6, "OTP must be 6 digits"),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      otp: Array(6).fill(""),
    },
    resolver: yupResolver(otpSchema),
  });

  const handleOTPChange = (text: string, index: number) => {
    if (text && index < 5) {
      otpRefs[index + 1].current?.focus();
    } else if (!text && index > 0) {
      otpRefs[index - 1].current?.focus();
    }
  };

  const onSubmit = (data: { otp?: string[] }) => {
    if (data.otp) {
      const otpCode = data.otp.join("");
      console.log("Submitted OTP:", otpCode);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={commonStyles.container}>
          <Text style={styles.title}>Verify phone number</Text>
          <Text style={styles.subtitle}>
            We have sent you a 6-digit code. Please enter it here to verify your
            number.
          </Text>
          <View style={styles.phoneNumberContainer}>
            <View style={styles.phoneNumberBubble}>
              <Text style={styles.phoneNumberText}>+1 169 916 9564</Text>
            </View>
            <TouchableOpacity style={styles.editIconContainer}>
              <View style={styles.editIcon}>
                <Icon
                  name="pencil"
                  size={22}
                  color="#FFA500"
                  style={styles.editIcon}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.otpContainer}>
            {Array(6)
              .fill("")
              .map((_, index) => (
                <Controller
                  key={index}
                  name={`otp.${index}`}
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      ref={otpRefs[index]}
                      style={[
                        styles.otpInput,
                        errors?.otp?.[index] && styles.errorBorder,
                      ]}
                      keyboardType="numeric"
                      maxLength={1}
                      textAlign="center"
                      value={value || ""}
                      onChangeText={(text) => {
                        onChange(text);
                        handleOTPChange(text, index);
                      }}
                    />
                  )}
                />
              ))}
          </View>
          {errors.otp && (
            <Text style={styles.errorMessage}>
              {errors.otp.message || "Enter a correct OTP"}
            </Text>
          )}

          <TouchableOpacity onPress={() => console.log("HLO RAHEEL")}>
            <Text style={styles.resendText}>
              Didn’t Receive Code?{" "}
              <Text style={styles.getNewCode}>Get a New one</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
      {!isKeyboardVisible && (
        <CommonButton
          text="Verify and Continue"
          iconName="checkmark-circle-outline"
          onPress={handleSubmit(onSubmit)}
          buttonStyle={{
            alignSelf: "center",
            position: "absolute",
            bottom: "3%",
          }}
        />
      )}
    </SafeAreaView>
  );
};

export default OTPScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: RFValue(21),
    fontFamily: "HappyMonkeyRegular",
    fontWeight: "400",
    color: Colors.text,
    marginHorizontal: "5%",
  },
  subtitle: {
    fontSize: RFValue(17),
    fontFamily: "BarlowRegular",
    fontWeight: "400",
    color: Colors.otpColor,
    marginBottom: "4.5%",
    marginHorizontal: "5%",
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    marginBottom: "13%",
    paddingTop: "13%",
  },
  otpInput: {
    width: RFValue(43),
    height: RFValue(52),
    borderWidth: 1,
    borderColor: Colors.inputfild,
    borderRadius: 14,
    fontWeight: "400",
    fontSize: RFValue(20),
    fontFamily: "BarlowRegular",
    color: Colors.text,
    backgroundColor: Colors.inputfild,
  },
  errorBorder: {
    borderColor: "red",
  },
  errorMessage: {
    color: "red",
    fontSize: RFValue(14),
    textAlign: "center",
    fontFamily: "BarlowRegular",
    top: RFValue(-20),
    fontWeight: "400",
  },
  resendText: {
    textAlign: "center",
    color: Colors.text,
    fontSize: RFValue(16),
    fontFamily: "BarlowRegular",
    fontWeight: "400",
  },
  getNewCode: {
    color: Colors.primary,
    fontWeight: "400",
    fontFamily: "BarlowRegular",
    textDecorationLine: "underline",
    fontSize: RFValue(16),
  },

  phoneNumberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: "5%",
  },
  phoneNumberBubble: {
    backgroundColor: Colors.inputfild,
    borderRadius: 25,
    paddingHorizontal: RFValue(15),
    paddingVertical: RFValue(8),
  },
  phoneNumberText: {
    fontSize: RFValue(16),
    fontFamily: "BarlowRegular",
    color: Colors.text,
  },
  editIconContainer: {
    marginLeft: RFValue(10),
  },
  editIcon: {
    backgroundColor: "#FCE2CF",
    borderRadius: RFValue(50),
    padding: RFValue(4),
  },
});
