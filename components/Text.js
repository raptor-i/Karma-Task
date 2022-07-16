import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../configs/Colors";

const MyText = ({ style, children }) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default MyText;

const styles = StyleSheet.create({
  text: {
    fontWeight: "500",
    fontSize: 25,
    color: Colors.white,
  },
});
