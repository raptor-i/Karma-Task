import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import Colors from "../configs/Colors";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const MyTextInput = ({
  placeholder,
  placeholderTextColor,
  style,
  name,
  size = 25,
  color,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Icon name={name} size={size} color={color}></Icon>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      ></TextInput>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purpleLight,
    flexDirection: "row",
    borderRadius: 22,
    height: 40,
    marginVertical: 15,
    alignItems: "center",
    padding: 5,
  },
});
