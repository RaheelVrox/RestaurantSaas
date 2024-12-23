import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="Locationscreen" />
      <Stack.Screen name="customer/Auth" />
      <Stack.Screen name="customer/OTPScreen" />
    </Stack>
  );
};

export default Layout;

const styles = StyleSheet.create({});
