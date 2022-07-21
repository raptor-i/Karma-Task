import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import WelcomeNavigator from "./navigators/WelcomeNavigator";
import MainScreen from "./screens/MainScreen";
import store from "./store/state";
import { useAtom } from "jotai";

export default function App() {
  const [auth, setIsAuth] = useAtom(store.Authed);
  console.log("auth is app : " + auth);

  return <>{!auth ? <MainScreen /> : <WelcomeNavigator />}</>;
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
