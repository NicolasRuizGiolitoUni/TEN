import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Header from "../components/header";
import NavigationBar from "../components/navigationBar";
import Feed from "../components/feed";
import NavigationBar2 from "../components/navigationBar";

export default function MainScreen() {
  const [isLoding, setIsLoding] = useState(true);
  const [error, setError] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    fetch("https://tenv1-44bcb-default-rtdb.firebaseio.com/user.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoding(false);
          setResponse(result);
        },
        (error) => {
          setIsLoding(false);
          setError(error);
        }
      );
  }, []);

  const getContent = () => {
    if (isLoding) {
      return <ActivityIndicator size="large" />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    return response ? <Feed data={response} /> : <Text>No data</Text>;
  };
  const [fontsLoaded] = useFonts({
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Avenir-Regular": require("../../assets/fonts/Avenir-Regular.ttf"),
    "Avenir-Book": require("../../assets/fonts/Avenir-Regular.ttf"),
    "Avenir-Medium": require("../../assets/fonts/Avenir-Medium.ttf"),
    "Raleway-Thin": require("../../assets/fonts/Raleway-Thin.ttf"),
    "Raleway-Light": require("../../assets/fonts/Raleway-Light.ttf"),
    "Raleway-Regular": require("../../assets/fonts/Raleway-Regular.ttf"),
    "Raleway-Medium": require("../../assets/fonts/Raleway-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return undefined;
  }

  return (
    <View style={styles.container}>
      <Header />
      <NavigationBar />
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
});
