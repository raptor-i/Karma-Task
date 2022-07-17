import { Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

import { launchImageLibrary } from "react-native-image-picker";
import Button from "./Button";

const ImagePicker = () => {
  const [uris, selectedUris] = useState();

  const LaunchGallery = async () => {
    const result = await launchImageLibrary({
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.7,
    });
    if (result.assets) {
      selectedUris(result.assets[0].uri);
      console.log("assest " + result.assets[0].uri);
    }
  };
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: uris }}></Image>
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
});
