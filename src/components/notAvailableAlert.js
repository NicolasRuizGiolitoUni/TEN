import { Alert } from "react-native";
import React from "react";

const NotAviableAlert = () => {
  Alert.alert("OOPS!", "This section is not aviable yet.", [
    { text: "Go back", onPress: () => console.log("Alert closed") },
  ]);
};

export default NotAviableAlert;
