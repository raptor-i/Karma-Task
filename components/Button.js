import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import Colors from "../configs/Colors";
import Text from "./Text";

const Button = ({ onPress, title, style }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: "100%",
    height: 45,
    borderRadius: 15,
    justifyContent: "center",
    marginVertical: 17,
  },
  title: {
    textAlign: "center",
    color: Colors.purpleDark,
  },
});
