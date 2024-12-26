import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { commonStyles } from "@/styles/commonStyles";
import HeaderScreen from "@/components/HeaderScreen";
import CustomImageSlider from "@/components/CustomImageSlider";
import TabComponent from "@/components/Menutabs";
import ProductItems from "@/components/ProductItems";

const Home: React.FC = () => {
  const images = [
    "https://drive.google.com/file/d/1VbfQHNUw3q4Akbdx1TftYrkoizYbuO4x/view",
    "https://drive.google.com/file/d/1VbfQHNUw3q4Akbdx1TftYrkoizYbuO4x/view",
    "https://drive.google.com/file/d/1VbfQHNUw3q4Akbdx1TftYrkoizYbuO4x/view",
   "https://drive.google.com/file/d/1VbfQHNUw3q4Akbdx1TftYrkoizYbuO4x/view",
  ];

  return (
    <View style={commonStyles.container}>
      <HeaderScreen />
      <CustomImageSlider images={images} />
      <View>
        <TabComponent />
      </View>
      <ProductItems />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
