import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";

import Text from "../components/Text";
import Colors from "../configs/Colors";
import NotificationCard from "../components/NotificationCard";
import apiSocket from "../api/socket";

const UserData = [
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 0,
    time: "10:21",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 1,
    time: "12:10",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 2,
    time: "12:21",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 3,
    time: "13:00",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 5,
    time: "14:10",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 6,
    time: "14:21",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 7,
    time: "15:45",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 8,
    time: "16:21",
  },
  {
    nickname: "Tester",
    action: "Sizinle eşleşmek istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 9,
    time: "19:05",
  },
];

const NotificationsScreen = () => {
  const [comeData, setComeData] = useState([]);
  const [notify, setNotify] = useState([]);

  const socket = apiSocket.getSocket();

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
  container: {
    alignItems: "center",
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    color: Colors.purple,
    fontWeight: "600",
    marginBottom: 20,
  },
  listContainer: {
    width: "90%",
    marginBottom: 60,
  },
});
