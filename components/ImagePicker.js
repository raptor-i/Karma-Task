import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { launchImageLibrary } from "react-native-image-picker";
import Button from "./Button";
import { useAtom } from "jotai";
import store from "../store/state";
import Colors from "../configs/Colors";

const ImagePicker = () => {
  const [registerImage, setRegisterImage] = useAtom(store.RegisterImage);

  const LaunchGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7,
    });
    if (result.assets) {
      setRegisterImage(result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      {registerImage !== "" ? (
        <Image style={styles.Image} source={{ uri: registerImage }}></Image>
      ) : (
        <View style={styles.ImageDefault}></View>
      )}

      <Button
        onPress={LaunchGallery}
        title="Fotoğraf Seç"
        name="camera"
      ></Button>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  Image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  ImageDefault: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.purpleDark,
  },
});
