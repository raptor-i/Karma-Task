import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";

import Text from "../components/Text";
import Colors from "../configs/Colors";
import NotificationCard from "../components/NotificationCard";
import io from "socket.io-client";

const UserData = [
  {
    nickname: "Tester",
    action: "Sizinle bağlantı kurmak istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 0,
  },
  {
    nickname: "Tester",
    action: "Sizinle bağlantı kurmak istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 1,
  },
  {
    nickname: "Tester",
    action: "Sizinle bağlantı kurmak istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 2,
  },
  {
    nickname: "Tester",
    action: "Sizinle bağlantı kurmak istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 3,
  },
  {
    nickname: "Tester",
    action: "Sizinle bağlantı kurmak istiyor",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    id: 4,
  },
];

const NotificationsScreen = () => {
  const [comeData, setComeData] = useState([]);

  const socket = io("http://10.0.2.2:9000");

  socket.emit("Receive_Request", (data) => {
    setComeData(data);
    console.log("You got this : ");
    console.log(comeData);
  });

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
  container: { alignItems: "center", flex: 1, backgroundColor: Colors.white },
  header: {
    color: Colors.purple,
    fontWeight: "600",
    marginBottom: 20,
  },
});
