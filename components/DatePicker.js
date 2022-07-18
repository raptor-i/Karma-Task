import { StyleSheet, View } from "react-native";
import React, { useState } from "react";

import DatePicker from "react-native-date-picker";
const MyDatePicker = ({ ...otherProps }) => {
  const [date, setDate] = useState(new Date());
  const Now = new Date().toISOString().slice(0, 10);

  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        locale="tr"
        textColor="white"
        fadeToColor="none"
        androidVariant="iosClone"
        maximumDate={new Date(Now)}
        {...otherProps}
      />
    </View>
  );
};

export default MyDatePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    borderRadius: 15,
  },
});
