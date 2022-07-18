import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";

import Text from "../components/Text";
import Button from "../components/Button";
const Welcome = ({ navigation }) => {
  const HandlerLogin = () => {
    navigation.navigate("Giris");
  };

  const HandlerRegister = () => {
    navigation.navigate("KayitOl");
  };
  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/BG_linear.jpg")}
      blurRadius={20}
    >
      <Text style={styles.text}>Hoş Geldin!</Text>
      <View style={styles.buttonsContainer}>
        <Button title="Giriş" onPress={HandlerLogin}></Button>
        <Button title="Kayıt Ol" onPress={HandlerRegister}></Button>
      </View>
    </ImageBackground>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 50,
    width: "80%",
    padding: 10,
  },
  text: {
    textAlign: "center",
    marginTop: 150,
    fontSize: 40,
  },
});
