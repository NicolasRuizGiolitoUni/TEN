import { View, StyleSheet } from "react-native";
import React from "react";
import { useFonts } from "expo-font";
import Feed from "../components/feed";
import Header from "../components/header";
import NavigationBar from "../components/navigationBar";

export default function MainScreen() {
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      {/* Follwing/Discover */}
      <NavigationBar />
      {/* Feed */}
      <Feed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
