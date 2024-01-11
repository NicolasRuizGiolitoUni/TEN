import React, { useState, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const MyIcon = () => {
  const emojiSize = 32;
  const myViewRef = useRef(null);
  const [myPy, setMyPy] = useState(0);
  const [myLeft, setMyLeft] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [reaction, setReaction] = useState("heart-outlined");

  const getCoordinates = () => {
    myViewRef.current.measure((fx, fy, width, height, px, py) => {
      console.log("Position Parent:", fx, fy);
      console.log("Position:", px, py);
      console.log("Dimensions:", width, height);
      setMyPy(py);
      setMyLeft(px);
    });
  };

  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };

  const handleIconPress = () => {
    if (reaction != "heart-outlined") {
      setReaction("heart-outlined");
    } else {
      openModal();
    }
  };

  const handleReactionChosen = (icon) => {
    setReaction(icon);
    closeModal();
  };

  return (
    <View>
      <View ref={myViewRef} onLayout={getCoordinates}>
        <TouchableOpacity onPress={() => handleIconPress(reaction)}>
          <Entypo name={reaction} size={32} />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={styles.modalWrapper}>
            <View
              style={[styles.modalContent, { top: myPy - 50, left: myLeft }]}
            >
              <TouchableOpacity>
                <Entypo
                  name="emoji-flirt"
                  size={emojiSize}
                  onPress={() => handleReactionChosen("emoji-flirt")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="emoji-happy"
                  size={emojiSize}
                  onPress={() => handleReactionChosen("emoji-happy")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="emoji-neutral"
                  size={emojiSize}
                  onPress={() => handleReactionChosen("emoji-neutral")}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Entypo
                  name="emoji-sad"
                  size={emojiSize}
                  onPress={() => handleReactionChosen("emoji-sad")}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalWrapper: {
    flex: 1,
  },
  modalContent: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 5,
    borderWidth: 1,
    width: "40%",
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
  },
});

export default MyIcon;
