import { View, Text, StyleSheet, Safe, SafeAreaView } from "react-native";
import React from "react";
import ToDo from "./src/components/ToDo";
import Practice from "./src/components/practice";
import Ten from "./src/components/Ten";
import { useFonts } from "expo-font";
import TenFlatList from "./src/components/TenFlatList";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TenFlatList />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
