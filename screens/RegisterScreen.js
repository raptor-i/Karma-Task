import { StyleSheet, View, ImageBackground } from "react-native";
import React, { useState } from "react";

import TextInput from "../components/TextInput";
import Text from "../components/Text";
import Button from "../components/Button";
import BirthdayPicker from "../components/registerScreen/BirthdayPicker";
import PPimagePicker from "../components/registerScreen/PPimagePicker";
import PassAndKvkk from "../components/registerScreen/PassAndKvkk";
import { useAtom } from "jotai";
import store from "../store/state";
import registerApi from "../api/register";

const RegisterScreen = ({ navigation }) => {
  const [page, setPage] = useState(0);
  const [toggleCheckBox, setToggleCheckBox] = useAtom(store.RegisterCheckBox);
  const [name, setName] = useAtom(store.RegisterName);
  const [bday, setBday] = useAtom(store.RegisterBirthDay);
  const [pass, setPass] = useAtom(store.RegisterPassword);
  const [image, setImage] = useAtom(store.RegisterImage);

  const HandlerNext = () => {
    if (page > 2) return;
    setPage(page + 1);
  };

  const HandlerBack = () => {
    if (page < 1) {
      navigation.navigate("Welcome");
      return;
    }
    setPage(page - 1);
  };

  const HandlerSubmit = async () => {
    if (
      image === "" ||
      pass === "" ||
      bday === "" ||
      name === "" ||
      !toggleCheckBox
    ) {
      alert("Lütfen tüm bilgileri eksiksiz doldurduğundan emin ol");
      return;
    }

    const data = { image, pass, bday, name };
    const response = await registerApi.register(data);
  };

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
