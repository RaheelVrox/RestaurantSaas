import CommonButton from "@/components/CommonButton";
import { Colors } from "@/utils/Constants";
import React, { useState, useEffect } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { router } from "expo-router";

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});

const registerSchema = yup.object().shape({
  fullName: yup.string().required("Full Name is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{12}$/, "Phone Number must be 12 digits")
    .required("Phone Number is required"),
  password: yup.string().required("Password is required"),
});

const Auth: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Login");
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
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
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(activeTab === "Login" ? loginSchema : registerSchema),
    defaultValues:
      activeTab === "Login"
        ? { email: "", password: "" }
        : { fullName: "", phoneNumber: "", password: "" },
  });

  useEffect(() => {
    reset(
      activeTab === "Login"
        ? { email: "", password: "" }
        : { fullName: "", phoneNumber: "", password: "" }
    );
  }, [activeTab, reset]);

  const onSubmit = (data: any) => {
    console.log(
      activeTab === "Login" ? "Login Data: " : "Register Data: ",
      data,
      router.navigate("/customer/OTPScreen")
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={dismissKeyboard}>
        <View style={styles.container}>
          <Text style={styles.title}>Welcome!</Text>
          <Text style={styles.subtitle}>Sign up or Login to your Account</Text>
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "Login" ? styles.activeTab : styles.inactiveTab,
              ]}
              onPress={() => setActiveTab("Login")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Login"
                    ? styles.activeTabText
                    : styles.inactiveTabText,
                ]}
              >
                Login
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.tab,
                activeTab === "Register"
                  ? styles.activeTab
                  : styles.inactiveTab,
              ]}
              onPress={() => setActiveTab("Register")}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === "Register"
                    ? styles.activeTabText
                    : styles.inactiveTabText,
                ]}
              >
                Register
              </Text>
            </TouchableOpacity>
          </View>

          {/* Login Form */}
          {activeTab === "Login" ? (
            <View>
              <Text style={styles.label}>Email Address</Text>
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Email"
                    placeholderTextColor="#B3BFCB"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.email && (
                <Text style={styles.errorText}>{errors.email.message}</Text>
              )}

              <Text style={styles.label}>Password</Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    placeholderTextColor="#B3BFCB"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}

              <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              {/* Register Form */}
              <Text style={styles.label}>Full Name</Text>
              <Controller
                control={control}
                name="fullName"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Name"
                    placeholderTextColor="#B3BFCB"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.fullName && (
                <Text style={styles.errorText}>{errors.fullName.message}</Text>
              )}

              <Text style={styles.label}>Phone Number</Text>
              <Controller
                control={control}
                name="phoneNumber"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Phone Number"
                    placeholderTextColor="#B3BFCB"
                    keyboardType="phone-pad"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.phoneNumber && (
                <Text style={styles.errorText}>
                  {errors.phoneNumber.message}
                </Text>
              )}

              <Text style={styles.label}>Create Password</Text>
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    placeholder="Enter your Password"
                    placeholderTextColor="#B3BFCB"
                    secureTextEntry
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                )}
              />
              {errors.password && (
                <Text style={styles.errorText}>{errors.password.message}</Text>
              )}
            </View>
          )}
          {!isKeyboardVisible && (
            <CommonButton
              text={activeTab === "Login" ? "Login" : "Sign Up"}
              iconName="chevron-forward"
              onPress={handleSubmit(onSubmit)}
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

export default Auth;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingTop: "4.5%",
  },
  title: {
    fontSize: RFValue(25),
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
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 25,
    marginHorizontal: "5%",
    backgroundColor: Colors.secondary_light,
    borderRadius: 50,
  },
  tab: {
    flex: 1,
    paddingVertical: "1.9%",
    alignItems: "center",
    borderRadius: 50,
  },
  activeTab: {
    backgroundColor: Colors.primary,
  },
  inactiveTab: {
    backgroundColor: Colors.secondary_light,
  },
  tabText: {
    fontSize: RFValue(17),
    fontFamily: "BarlowRegular",
    color: Colors.text,
    fontWeight: "400",
  },
  activeTabText: {
    fontSize: RFValue(17),
    fontFamily: "BarlowRegular",
    color: Colors.texttwo,
    fontWeight: "400",
  },
  inactiveTabText: {
    fontSize: RFValue(17),
    fontFamily: "BarlowRegular",
    color: Colors.primary,
    fontWeight: "400",
  },
  label: {
    fontSize: RFValue(17),
    fontFamily: "BarlowLight",
    color: Colors.text,
    fontWeight: "400",
    marginHorizontal: "7%",
    marginBottom: 7,
  },
  input: {
    backgroundColor: Colors.inputfild,
    borderRadius: 50,
    paddingVertical: "1.9%",
    marginHorizontal: "5%",
    fontSize: RFValue(14),
    fontFamily: "BarlowRegular",
    color: Colors.text,
    fontWeight: "400",
    height: RFValue(41),
    marginBottom: 15,
    paddingLeft: "5%",
  },
  forgotPassword: {
    fontSize: RFValue(15),
    color: Colors.otpColor,
    fontFamily: "BarlowRegular",
    fontWeight: "400",
    textAlign: "right",
    marginHorizontal: "5%",
    textDecorationLine: "underline",
  },

  errorText: {
    fontSize: RFValue(12),
    color: "red",
    marginHorizontal: "7%",
    top: -10,
    fontFamily: "BarlowRegular",
  },
});
