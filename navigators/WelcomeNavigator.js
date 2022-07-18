import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import Welcome from "../screens/WelcomeScreen";
import { Provider } from "jotai";
const Stack = createNativeStackNavigator();

const WelcomeNavigator = () => {
  return (
    <Provider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Welcome"
          screenOptions={{ headerShown: false, animation: "slide_from_bottom" }}
        >
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Giris" component={LoginScreen} />
          <Stack.Screen name="KayitOl" component={RegisterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default WelcomeNavigator;

const styles = StyleSheet.create({});
