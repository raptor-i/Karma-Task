import { StyleSheet, View } from "react-native";
import React from "react";

import ImagePicker from "../ImagePicker";
import Text from "../Text";
const PPimagePicker = () => {
  return (
    <View>
      <Text
        style={{
          marginVertical: 10,
          fontWeight: "400",
          alignSelf: "center",
        }}
      >
        Profil Fotoğrafı
      </Text>
      <ImagePicker></ImagePicker>
    </View>
  );
};

export default PPimagePicker;

const styles = StyleSheet.create({});
