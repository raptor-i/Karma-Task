import React from "react";
import { StyleSheet, Text, View } from "react-native";

import UserCard from "./components/UserCard";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListings from "./screens/UserListings";
import Welcome from "./screens/WelcomeScreen";

export default function App() {
  return <MainScreen />;
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
