import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

import Colors from "../configs/Colors";
import Icon from "./Icon";

const MyTextInput = ({
  placeholder,
  placeholderTextColor,
  style,
  name,
  size = 25,
  color = Colors.purpleGray,
  ...otherProps
}) => {
  return (
    <View style={[styles.container, style]}>
      {name && <Icon name={name} size={size} color={color}></Icon>}
      <TextInput
        style={styles.inputField}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        {...otherProps}
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
    height: 50,
    marginVertical: 15,
    alignItems: "center",
    padding: 10,
  },
  inputField: {
    fontSize: 20,
    marginLeft: 10,
    color: Colors.purpleGray,
  },
});
