import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Feed from "../components/feed";
import Header from "../components/header";
import NavigationBar from "../components/navigationBar";
import FeedJSON from "../components/feedJSON";

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

    //console.log(response);
    return response ? <FeedJSON data={response} /> : <Text>No data</Text>;
  };
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
      {getContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
