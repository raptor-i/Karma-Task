import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Button from "../components/Button";

const LoginScreen = () => {
  const HandlerLogin = () => {
    console.log("Giriş yapıldı");
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/BG_linear.jpg")}
      blurRadius={20}
    >
      <Text style={styles.text}>Giriş</Text>
      <View style={styles.form}>
        <TextInput
          placeholder="Kullanıcı adı"
          placeholderTextColor={"gray"}
          color="gray"
          name="account"
        ></TextInput>
        <TextInput
          placeholder="Parola"
          placeholderTextColor={"gray"}
          color="gray"
          name="lock"
        ></TextInput>
        <Button
          style={styles.giris}
          title="Giriş Yap"
          onPress={HandlerLogin}
        ></Button>
      </View>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    marginTop: 150,
    marginBottom: 125,
  },
  form: {
    width: "85%",
    justifyContent: "center",
  },
  giris: {
    width: "50%",
    alignSelf: "center",
    marginTop: 30,
  },
});
