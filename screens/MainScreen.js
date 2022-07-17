import { StyleSheet } from "react-native";
import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import UserListings from "./UserListings";
import Icon from "../components/Icon";
import Colors from "../configs/Colors";

const MainScreen = () => {
  const Tab = createBottomTabNavigator();

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
          options={{ title: "User Listings" }}
          component={UserListings}
        />
        <Tab.Screen name="Notifications" component={UserListings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

const styles = StyleSheet.create({});
