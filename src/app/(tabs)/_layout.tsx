import { StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/utils/Constants";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors.secondary_light },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textone,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;

const styles = StyleSheet.create({});
