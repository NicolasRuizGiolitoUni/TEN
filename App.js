import {
  View,
  Text,
  Image,
  StyleSheet,
  Safe,
  SafeAreaView,
  FlatList,
  ImageBackground,
} from "react-native";
import React from "react";
import MainScreen from "./src/screens/mainScreen";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/Images/Background.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <MainScreen />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    justifyContent: "center",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
});
