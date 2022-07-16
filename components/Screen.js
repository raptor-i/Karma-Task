import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { getStatusBarHeight } from "react-native-status-bar-height";

const Screen = ({ children }) => {
  console.log(getStatusBarHeight());
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: getStatusBarHeight(),
  },
  main: {
    flex: 1,
  },
});
