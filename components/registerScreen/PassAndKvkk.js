import { StyleSheet, View } from "react-native";
import React from "react";

import TextInput from "../TextInput";
import CheckBox from "@react-native-community/checkbox";
import Text from "../Text";
import { useAtom } from "jotai";
import store from "../../store/state";

const PassAndKvkk = () => {
  const [toggleCheckBox, setToggleCheckBox] = useAtom(store.RegisterCheckBox);
  const [password, setPassword] = useAtom(store.RegisterPassword);

  return (
    <View>
      <TextInput
        name="lock"
        placeholder="Parola"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      ></TextInput>
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
