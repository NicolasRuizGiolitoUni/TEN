import {
  View,
  Text,
  StyleSheet,
  Safe,
  SafeAreaView,
  FlatList,
} from "react-native";
import React from "react";
import MainScreen from "./src/screens/mainScreen";
import Practice from "./src/PracticeFiles/practice";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Practice />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
