import React, { useEffect } from "react";
import { StyleSheet } from "react-native";

import WelcomeNavigator from "./navigators/WelcomeNavigator";
import MainScreen from "./screens/MainScreen";
import store from "./store/state";
import { useAtom } from "jotai";
import apiSocket from "./api/socket";

export default function App() {
  const [auth, setIsAuth] = useAtom(store.Authed);
  const socket = apiSocket.getSocket();

  useEffect(() => {
    socket.on("connection", () => {
      console.log("Socket connection sucessed");
    });
  }, []);

  console.log("auth is app : " + auth);

  if (!auth) return <MainScreen />;
  else return <WelcomeNavigator />;
}

const styles = StyleSheet.create({
  container: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
  },
});
