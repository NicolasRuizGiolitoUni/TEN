import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ToDo from "./src/components/ToDo";
import Practice from "./src/components/practice";

export default function App() {
  return (
    <View style={styles.container}>
      <ToDo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
