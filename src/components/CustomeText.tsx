import { StyleSheet, Text, TextStyle, View, StyleProp } from "react-native";
import React, { FC } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Colors } from "@/utils/Constants";

const fontsize = {
  h1: 24,
  h2: 22,
  h3: 20,
  h4: 18,
  h5: 16,
  h6: 16,
  h7: 14,
  h8: 12,
};

type FontFamily = "Regular" | "Bold" | "Italic";

interface CustomeTextProps {
  variant?: keyof typeof fontsize;
  style?: StyleProp<TextStyle>;
  fontFamily?: FontFamily;
  numberOfLines?: number;
  children: React.ReactNode;
}

const CustomeText: FC<CustomeTextProps> = ({
  variant = "h6",
  style,
  fontFamily = "Regular",
  numberOfLines,
  children,
}) => {
  return (
    <Text
      style={[
        styles.text,
        {
          fontSize: RFValue(fontsize[variant]),
          fontFamily: `BarlowRegular-${fontFamily}`,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.text,
    textAlign: "left",
  },
});

export default CustomeText;
