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

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <MainScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
