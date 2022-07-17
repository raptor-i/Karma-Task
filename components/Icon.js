import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
const MyIcon = ({ name, color, size = 25, onPress }) => {
  return <Icon name={name} color={color} size={size} onPress={onPress} />;
};

export default MyIcon;

const styles = StyleSheet.create({});
