import { StyleSheet, View } from "react-native";
import React from "react";

import Text from "../Text";
import DatePicker from "../DatePicker";
const BirthdayPicker = () => {
  return (
    <View>
      <Text
        style={{ marginVertical: 10, fontWeight: "400", textAlign: "center" }}
      >
        Doğum Tarihi
      </Text>
      <DatePicker></DatePicker>
    </View>
  );
};

export default BirthdayPicker;

const styles = StyleSheet.create({});
