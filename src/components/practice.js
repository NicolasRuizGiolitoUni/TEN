import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";

export default function Practice() {
  const [enteredText, setEnteredText] = useState("");
  const [allTexts, setAllTexts] = useState([]);

  const clearHandler = () => {
    setAllTexts([]);
  };

  const buttonPressedHandler = () => {
    setAllTexts((currentTexts) => [...currentTexts, enteredText]);
  };

  const textInputHandler = (text) => {
    setEnteredText(text);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.textContainer}>
        {allTexts.map((text) => (
          <Text>{text}</Text>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInputContainer}
          placeholder="Enter a text..."
          onChangeText={textInputHandler}
        ></TextInput>
        <Button title="Enter" onPress={buttonPressedHandler} />
        <Button title="Clear" onPress={clearHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textInputContainer: {
    borderWidth: 0.5,
    padding: 10,
    paddingHorizontal: 50,
    marginBottom: 20,
  },
});
