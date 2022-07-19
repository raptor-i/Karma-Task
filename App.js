import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import UserCard from "./components/UserCard";
import WelcomeNavigator from "./navigators/WelcomeNavigator";
import LoginScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";
import RegisterScreen from "./screens/RegisterScreen";
import UserListings from "./screens/UserListings";
import Welcome from "./screens/WelcomeScreen";
import store from "./store/state";
import { Provider, useAtom } from "jotai";
import { NavigationContainer } from "@react-navigation/native";
import rootNav from "./navigators/rootNav";

export default function App() {
  const [isAuth, setIsAuth] = useAtom(store.Authed);
  console.log(isAuth);
  console.log("auth is app : " + isAuth);

  if (isAuth) return <MainScreen />;
  return <WelcomeNavigator />;
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
