import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";

import Text from "../components/Text";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
import Colors from "../configs/Colors";
import { useAtom } from "jotai";
import store from "../store/state";
import auth from "../api/auth";

const LoginScreen = () => {
  const [nickname, setNickname] = useAtom(store.passwordAtom);
  const [password, setPassword] = useAtom(store.nicknameAtom);
  const [isAuth, setIsAuth] = useAtom(store.Authed);

  const HandlerLogin = async () => {
    if (nickname === "" || password === "") return;

    try {
      const result = await auth.login(nickname, password);
      if (!result) return;
      setIsAuth(true);
      console.log("auth is " + isAuth);
    } catch (error) {
      console.log(error);
    }
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
          placeholderTextColor={Colors.purpleGray}
          color={Colors.purpleGray}
          name="account"
          value={nickname}
          onChangeText={(text) => setNickname(text)}
        ></TextInput>
        <TextInput
          placeholder="Parola"
          placeholderTextColor={Colors.purpleGray}
          color={Colors.purpleGray}
          name="lock"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
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
