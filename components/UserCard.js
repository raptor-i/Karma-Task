import { Image, StyleSheet, View } from "react-native";
import React from "react";

import Colors from "../configs/Colors";
import Text from "./Text";
import Icon from "./Icon";

const UserCard = ({ UserData }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: UserData.image }} />
      <View style={styles.InformContainer}>
        <Text style={styles.Header}>{UserData.Nickname}</Text>
        <Text style={styles.SubTitle}>{UserData.BirthDay}</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.Icon}>
        <Icon
          name="account-plus"
          color={Colors.purple}
          size={30}
          onPress={() => console.log("Ffriend Request sent")}
        />
      </View>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    height: 100,
    backgroundColor: Colors.purpleLight,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    alignItems: "center",
  },
  Image: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  InformContainer: {
    marginHorizontal: 15,
  },
  Header: {},
  SubTitle: {
    fontWeight: "400",
    fontSize: 20,
  },
  Icon: {
    position: "absolute",
    top: 7,
    right: 7,
  },
});
