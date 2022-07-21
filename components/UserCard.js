import { Image, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Colors from "../configs/Colors";
import Text from "./Text";
import Icon from "./Icon";
import io from "socket.io-client";
import { useAtom } from "jotai";
import store from "../store/state";

const fakeData = [
  {
    birthday: "18.01.1995",
    id: 0,
    image:
      "file:///data/user/0/com.karma/cache/rn_image_picker_lib_temp_9f7a3742-a079-44ae-84e8-8ff8065a894a.jpg",
    nickname: "admin",
    password: "$2b$10$tP.x2fGJqQIFS6Nvd19NauHqP2CNsx7HbhgeJRfos9SNtFokPigVa",
  },
];

const UserCard = ({ UserData }) => {
  const [IconName, setIconName] = useState("heart-plus");
  const [user, setUser] = useAtom(store.CurrentUserData);

  const HandlerRequest = () => {
    setIconName("account-clock");
    const socket = io("http://10.0.2.2:9000");
    socket.emit("join_room", { room: "admin" });
    socket.emit("Send_Request", { room: UserData.nickname, Data: fakeData });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.Image} source={{ uri: UserData.image }} />
      <View style={styles.InformContainer}>
        <Text style={styles.Header}>{UserData.nickname}</Text>
        <Text style={styles.SubTitle}>{UserData.birthday}</Text>
      </View>
      <View style={{ flex: 1 }} />
      <View style={styles.Icon}>
        <Icon
          name={IconName}
          color={Colors.purple}
          size={30}
          onPress={HandlerRequest}
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
