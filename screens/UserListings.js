import { StyleSheet, View, FlatList } from "react-native";
import React, { useEffect, useState } from "react";

import Text from "../components/Text";
import Colors from "../configs/Colors";
import UserCard from "../components/UserCard";
import api from "../api/getAllUsers";

const UserListings = () => {
  const [UserData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getUsers();
      setUserData(response.data);
    };
    fetchData();
    console.log(UserData);
  }, []);

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
    flex: 1,
    backgroundColor: Colors.white,
  },
  ListContainer: {
    width: "85%",
    marginBottom: 35,
  },
});
