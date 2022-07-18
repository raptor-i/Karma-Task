import { Image, StyleSheet, View } from "react-native";
import React from "react";

import Text from "./Text";
import Colors from "../configs/Colors";

const NotificationCard = ({ UserData }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: UserData.image }} />
      <Text style={styles.nickname}>{UserData.nickname}</Text>
      <Text style={styles.action}>{UserData.action}</Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  action: {
    fontSize: 17,
    color: Colors.purpleGray,
  },
  container: {
    width: "100%",
    height: 50,
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 15,
    flexDirection: "row",
    padding: 10,
    borderColor: Colors.purpleLight,
    borderWidth: 1,
    marginVertical: 2,
  },
  image: { width: 30, height: 30, borderRadius: 15 },
  nickname: {
    fontSize: 17,
    color: Colors.black,
    marginHorizontal: 10,
  },
});
