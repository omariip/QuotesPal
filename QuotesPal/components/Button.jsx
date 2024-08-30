import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { widthScale, heightScale, moderateScale } from "../utils/scale";
import React from "react";

const CustomButton = ({
  onPress,
  title,
  customWidth,
  customHeight,
  fontSize,
  customStylingContainer,
  customStylingText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.buttonContainer,
        { width: customWidth, height: customHeight },
        customStylingContainer,
      ]}
    >
      <Text
        style={[styles.buttonText, { fontSize: fontSize }, customStylingText]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#FFD700",
    borderRadius: moderateScale(25),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Raleway-Bold",
    color: "#25485E",
  },
});

export default CustomButton;
