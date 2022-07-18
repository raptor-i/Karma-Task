import { StyleSheet, View, ImageBackground } from "react-native";
import React, { useState } from "react";

import TextInput from "../components/TextInput";
import Text from "../components/Text";
import Button from "../components/Button";
import BirthdayPicker from "../components/registerScreen/BirthdayPicker";
import PPimagePicker from "../components/registerScreen/PPimagePicker";
import PassAndKvkk from "../components/registerScreen/PassAndKvkk";
import { atom, useAtom } from "jotai";

const RegisterName = atom("");

const RegisterScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [name, setName] = useAtom(RegisterName);

  const HandlerNext = () => {
    if (page > 2) return;
    console.log("Next");
    setPage(page + 1);
  };

  const HandlerBack = () => {
    console.log("Back");
    if (page < 1) {
      navigation.navigate("Welcome");
      return;
    }
    setPage(page - 1);
  };

  const HandlerSubmit = () => {};

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/BG_linear.jpg")}
      blurRadius={20}
    >
      <Text style={styles.kayitOl}>Kayıt Ol</Text>
      {page === 0 && (
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Kullanıcı Adı"
            name="account"
            value={name}
            onChangeText={(text) => setName(text)}
          ></TextInput>
        </View>
      )}
      {page === 1 && (
        <View style={styles.DatePickerContainer}>
          <BirthdayPicker />
        </View>
      )}
      {page === 2 && (
        <View style={styles.ImagePickerContainer}>
          <PPimagePicker />
        </View>
      )}
      {page === 3 && (
        <View style={styles.PassAndKvkk}>
          <PassAndKvkk />
        </View>
      )}
      <View style={styles.buttonsContainer}>
        <Button
          title="Geri Dön"
          style={styles.button}
          onPress={HandlerBack}
        ></Button>
        {page == 3 ? (
          <Button
            title="Tamamla"
            style={styles.button}
            onPress={HandlerSubmit}
          ></Button>
        ) : (
          <Button
            title="Sıradaki"
            style={styles.button}
            onPress={HandlerNext}
          ></Button>
        )}
      </View>
    </ImageBackground>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  button: { width: "30%", marginHorizontal: 50, marginBottom: 12 },
  buttonsContainer: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  DatePickerContainer: { alignItems: "center", flex: 1 },
  textInputContainer: {
    width: "85%",
    flex: 1,
  },
  ImagePickerContainer: {
    flex: 1,
  },
  kayitOl: {
    marginTop: 150,
    marginBottom: 125,
    fontSize: 40,
  },
  PassAndKvkk: {
    width: "85%",
    flex: 1,
  },
});
