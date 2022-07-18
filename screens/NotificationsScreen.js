import { FlatList, StyleSheet, View } from "react-native";
import React from "react";

import Text from "../components/Text";
import Colors from "../configs/Colors";
import NotificationCard from "../components/NotificationCard";

const UserData = [
  {
    nickname: "Tester",
    action: "Arkadaşlık isteğinizi kabul etti.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 0,
  },
  {
    nickname: "Tester",
    action: "Arkadaşlık isteğinizi kabul etti.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 1,
  },
  {
    nickname: "Tester",
    action: "Arkadaşlık isteğinizi kabul etti.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 2,
  },
  {
    nickname: "Tester",
    action: "Arkadaşlık isteğinizi kabul etti.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 3,
  },
  {
    nickname: "Tester",
    action: "Arkadaşlık isteğinizi kabul etti.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 4,
  },
];

const NotificationsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bildirimler</Text>
      <View style={styles.listContainer}>
        <FlatList
          key={(item) => item.id.ToString()}
          data={UserData}
          renderItem={({ item }) => <NotificationCard UserData={item} />}
        ></FlatList>
      </View>
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: {
    color: Colors.purple,
    fontWeight: "600",
    marginBottom: 20,
  },
});
