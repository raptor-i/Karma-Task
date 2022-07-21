import { StyleSheet } from "react-native";
import React, { useEffect } from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserListings from "./UserListings";
import Icon from "../components/Icon";
import Colors from "../configs/Colors";
import NotificationsScreen from "./NotificationsScreen";
import apiSocket from "../api/socket";
const MainScreen = () => {
  const socket = apiSocket.getSocket();
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    socket.on("receive_req", (data) => {
      console.log(data);
      console.log("RECEIVED in Notification");
    });
  }, [socket]);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="UserListings"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => {
            var Name;

            if (route.name === "UserListings") {
              Name = "account-search";
            } else if (route.name === "Notifications") {
              Name = "bell";
            }
            return <Icon name={Name} color={color} />;
          },
          tabBarActiveTintColor: Colors.purple,
          tabBarInactiveTintColor: Colors.purpleLight,
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="UserListings"
          options={{ title: "Keşfet" }}
          component={UserListings}
        />
        <Tab.Screen
          name="Notifications"
          options={{ title: "Bildirimler" }}
          component={NotificationsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
