import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

import React, { useState } from "react";

export default function ToDo() {
  const [enteredGoalText, setEnteredGoalText] = useState(""); //enter.. saves the value and we call set.. when we want to update that value
  const [courseGoals, setCourseGoals] = useState([]);

  const clearHandler = () => {
    setCourseGoals([]);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredGoalText,
    ]);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter a goal"
          onChangeText={goalInputHandler} // this prop fetches the changing text
        />
        <View>
          <Button title="Add goal" onPress={addGoalHandler} />
          <Button title="Clear" onPress={clearHandler} />
        </View>
      </View>
      <View style={styles.listOfGoalsContainer}>
        <ScrollView>
          {courseGoals.map((goal) => (
            <View style={styles.goalItem} key={goal}>
              <Text>{goal}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  textInput: {
    borderWidth: 2,
    width: "70%",
    padding: 8,
    marginRight: 8,
    paddingHorizontal: 8,
  },
  listOfGoalsContainer: {
    flex: 5,
  },
  goalItem: {
    margin: 5,
    padding: 5,
    borderRadius: 6,
    backgroundColor: "#d9c5f2",
  },
});
