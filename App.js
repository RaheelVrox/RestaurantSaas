import { StyleSheet, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import React, { useEffect, useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import MainNavigator from "./navigation/MainNavigator";
import Toast from "react-native-toast-message";
import store from "./Redux/store";
import { Provider } from "react-redux";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ActiveProvider } from "./Context/ActiveContext";
import * as Notifications from "expo-notifications";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Device from "expo-device";
import { AuthProvider } from "./Context/AuthContext";
import { StripeProvider } from "@stripe/stripe-react-native";
import ApiData from "./apiconfig";
import analytics from "@react-native-firebase/analytics";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

// Set the animation options. This is optional.
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function App() {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    analytics()
      .setAnalyticsCollectionEnabled(true)
      .then(() => {
        console.log("Analytics collection is enabled.");
      })
      .catch((error) => {
        console.error("Failed to enable analytics collection:", error);
      });
  }, []);

  useEffect(() => {
    const logSignUpEvent = async () => {
      try {
        await analytics().logLogin({
          method: "facebook",
        });
        console.log("Sign-in event logged successfully!");
      } catch (error) {
        console.error("Failed to log sign-up event:", error);
      }
    };

    logSignUpEvent();
  }, []);

  useEffect(() => {
    // Register for push notifications and set up listeners
    const registerNotifications = async () => {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);

      notificationListener.current =
        Notifications.addNotificationReceivedListener((notification) => {
          setNotification(notification);
        });

      responseListener.current =
        Notifications.addNotificationResponseReceivedListener((response) => {
          console.log(response);
        });
    };

    registerNotifications();

    return () => {
      // Clean up listeners
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(
          notificationListener.current
        );
      }
      if (responseListener.current) {
        Notifications.removeNotificationSubscription(responseListener.current);
      }
    };
  }, []);

  useEffect(() => {
    const loadFont = async () => {
      await Font.loadAsync({
        "OldschoolGrotesk-CompactRegular": require("./assets/font/OldschoolGrotesk-CompactRegular.otf"),
      });

      setFontLoaded(true);
      await SplashScreen.hideAsync();
      setTimeout(() => {
        setShowSplash(false);
      }, 2000);
    };

    loadFont();
  }, []);

  if (!isFontLoaded || showSplash) {
    return;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StripeProvider publishableKey={ApiData.STRIPE_PUBLIC_KEY}>
        <AuthProvider>
          <Provider store={store}>
            <ActiveProvider>
              <MainNavigator />
              <Toast />
            </ActiveProvider>
          </Provider>
        </AuthProvider>
      </StripeProvider>
    </GestureHandlerRootView>
  );
}

async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;

    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }

    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    try {
      const existingToken = await AsyncStorage.getItem("expoPushToken");
      const existingTokenDevice = await AsyncStorage.getItem(
        "expoPushTokenDevice"
      );

      if (!existingToken || !existingTokenDevice) {
        const projectId = "78703316-27cb-44dc-9e79-422c9cc6abfb";

        if (!projectId) {
          throw new Error("Project ID not found");
        }

        token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
        let tokenDevice = (await Notifications.getDevicePushTokenAsync()).data;

        await AsyncStorage.setItem("expoPushToken:", token);
        await AsyncStorage.setItem("expoPushTokenDevice:", tokenDevice);

        console.log("expoPushToken", token);
        console.log("expoPushTokenDevice:", tokenDevice);
      } else {
        console.log("Token already exists in AsyncStorage:");
        token = existingToken;
      }
    } catch (e) {
      token = `${e}`;
      console.log("Error in generating token: ", e);
    }
  } else {
    alert("Must use physical device for Push Notifications");
  }

  return token;
}
