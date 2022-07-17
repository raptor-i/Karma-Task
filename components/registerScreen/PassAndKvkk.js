import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import TextInput from "../TextInput";
import CheckBox from "@react-native-community/checkbox";
import Text from "../Text";
const PassAndKvkk = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <View>
      <TextInput name="lock" placeholder="Parola" secureTextEntry></TextInput>
      <View style={styles.SubTitle}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
          tintColors={{ true: "green", false: "red" }}
        ></CheckBox>
        <Text style={{ fontSize: 17 }}>KVKK metnini okudum ve onayladım</Text>
      </View>
    </View>
  );
};

export default PassAndKvkk;

const styles = StyleSheet.create({
  SubTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
