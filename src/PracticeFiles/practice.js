import {
  View,
  Text,
  StyleSheet,
  Modal,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useDebugValue, useState } from "react";
import { useFonts } from "expo-font";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import reactions from "./reactions";

export default function Practice() {
  const [visible, setModalVisible] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState("heart-outlined");

  const handleRactionPress = (reactionIcon) => {
    setSelectedReaction(reactionIcon);
    setModalVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <View style={styles.iconWrapper}>
        <Entypo
          name={selectedReaction}
          size={32}
          onPress={() => setModalVisible(true)}
        />

        <Modal transparent={true} visible={visible}>
          <TouchableOpacity
            style={styles.reactionsModalContaier}
            onPress={() => setModalVisible(false)}
          >
            <View style={styles.reactionsWrapper}>
              {reactions.map((item, key) => (
                <TouchableOpacity
                  style={styles.reactionsItems}
                  onPress={() => handleRactionPress(item.icon)}
                  key={key}
                >
                  <Entypo
                    name={item.icon}
                    size={24}
                    style={styles.iconsStyle}
                  />
                  <Text style={styles.textStyle}>{item.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </TouchableOpacity>
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
    paddingHorizontal: 7,
    paddingVertical: 7,
    borderRadius: 8,
  },
  reactionsItems: {
    flexDirection: "row",
    paddingBottom: 10,
    alignItems: "center",
  },
  iconsStyle: {
    marginRight: 5,
  },
  textStyle: {
    //fontFamily: "Inter-Light",
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "blue",
  },
});
