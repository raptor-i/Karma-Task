import { Image, StyleSheet, View } from "react-native";
import React from "react";

import Text from "./Text";
import Colors from "../configs/Colors";
import Button from "./Button";

const NotificationCard = ({ UserData }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: UserData.image }} />
        <Text style={styles.nickname}>{UserData.nickname}</Text>
        <Text style={styles.action}>{UserData.action}</Text>
      </View>
      <View style={styles.butonCon}>
        <Button
          title="Reddet"
          style={styles.BtnRed}
          textStyle={{ fontSize: 15, fontWeight: "600" }}
        />
        <Button
          title="Kabul Et"
          style={styles.BtnGreen}
          textStyle={{
            fontSize: 15,
            fontWeight: "600",
            color: Colors.purpleDark,
          }}
        />
      </View>
      <Text style={styles.Clock}>{UserData.time}</Text>
    </View>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  action: {
    fontSize: 17,
    color: Colors.purpleGray,
  },
  BtnRed: {
    backgroundColor: Colors.white,
    width: 100,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: Colors.lightRed,
    textAlign: "center",
  },
  BtnGreen: {
    backgroundColor: Colors.purpleLight,
    width: 100,
    marginHorizontal: 20,
    height: 40,
    borderRadius: 15,
    textAlign: "center",
  },
  butonCon: {
    flexDirection: "row",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flex: 1,
  },
  header: {
    flexDirection: "row",
  },
  container: {
    overflow: "hidden",
    width: "100%",
    height: 100,
    alignItems: "center",
    backgroundColor: Colors.wayLightPurple,
    borderRadius: 15,
    flexDirection: "column",
    padding: 10,
    borderColor: Colors.purpleLight,
    borderWidth: 1,
    marginVertical: 5,
  },
  image: { width: 30, height: 30, borderRadius: 15 },
  nickname: {
    fontSize: 17,
    color: Colors.black,
    marginHorizontal: 10,
  },
  Clock: {
    position: "absolute",
    color: Colors.purpleGray,
    fontSize: 15,
    right: 5,
    bottom: 5,
  },
});
