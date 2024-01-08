import { View, Text, StyleSheet, Modal, SafeAreaView } from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import reactions from "../components/reactions";

export default function Practice() {
  const [visible, setModalVisible] = useState(false);

  return (
    <View style={styles.appContainer}>
      <View style={styles.iconWrapper}>
        <MaterialIcons
          name="emoji-emotions"
          size={32}
          onPress={() => setModalVisible(true)}
        />

        <Modal visible={visible}>
          <SafeAreaView
            style={styles.reactionsModalContaier}
            onTouchStart={() => setModalVisible(false)}
          >
            <View style={styles.reactionsWrapper}>
              <Entypo name="emoji-flirt" />
              <Entypo name="emoji-happy" />
              <Entypo name="emoji-neutral" />
              <Entypo name="emoji-sad" />
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  iconWrapper: {
    width: "100%",
    height: "30%",
    alignItems: "center",
  },
  reactionsModalContaier: {
    flex: 1,
    //backgroundColor: "red",
    flexDirection: "row",
    alignItems: "baseline",
  },
  reactionsWrapper: {
    borderWidth: 2,
    position: "absolute",
    top: 76,
  },
});
