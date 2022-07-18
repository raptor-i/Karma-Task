import { StyleSheet, View } from "react-native";
import React from "react";

import Text from "../Text";
import DatePicker from "../DatePicker";
import { atom, useAtom } from "jotai";

const RegisterBirthDay = atom(new Date());
const BirthdayPicker = () => {
  const [birthday, setBirthday] = useAtom(RegisterBirthDay);

  console.log(birthday);
  return (
    <View>
      <Text
        style={{ marginVertical: 10, fontWeight: "400", textAlign: "center" }}
      >
        Doğum Tarihi
      </Text>
      <DatePicker onDateChange={setBirthday} date={birthday}></DatePicker>
    </View>
  );
};

export default BirthdayPicker;

const styles = StyleSheet.create({});
