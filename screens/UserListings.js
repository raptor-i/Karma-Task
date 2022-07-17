import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

import Text from "../components/Text";
import Colors from "../configs/Colors";
import UserCard from "../components/UserCard";

const UserData = [
  {
    Nickname: "Tester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    BirthDay: "2022-10-27",
    id: 0,
  },
  {
    Nickname: "Tester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    BirthDay: "2022-10-27",
    id: 1,
  },
  {
    Nickname: "Tester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    BirthDay: "2022-10-27",
    id: 2,
  },
  {
    Nickname: "Tester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    BirthDay: "2022-10-27",
    id: 3,
  },
  {
    Nickname: "Tester",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Fatih_Terim_2018.jpg/250px-Fatih_Terim_2018.jpg",
    BirthDay: "2022-10-27",
    id: 4,
  },
];
const UserListings = () => {
  return (
    <View style={styles.container}>
      <Text style={{ color: Colors.purple, fontWeight: "600" }}>
        Önerilen kişiler
      </Text>
      <View style={styles.ListContainer}>
        <FlatList
          data={UserData}
          key={(item) => item.id.toString()}
          renderItem={({ item }) => <UserCard UserData={item} />}
        ></FlatList>
      </View>
    </View>
  );
};

export default UserListings;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  ListContainer: {
    width: "85%",
  },
});
