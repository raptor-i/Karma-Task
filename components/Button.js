import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";

import Colors from "../configs/Colors";
import Text from "./Text";
import Icon from "./Icon";
const Button = ({ onPress, title, style, name }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      {name && (
        <Icon
          style={styles.Icon}
          name={name}
          size={25}
          color={Colors.purpleDark}
        ></Icon>
      )}
      <Text style={styles.title}>{title}</Text>
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
    marginVertical: 17,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  Icon: {
    marginRight: 10,
  },
  title: {
    textAlign: "center",
    color: Colors.purpleDark,
  },
});
