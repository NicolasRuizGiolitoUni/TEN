import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState, useRef } from "react";
import NotAviableAlert from "./notAvailableAlert";
import colors from "../../assets/colors/colors";

export default function ReactionImage() {
  const reactionArray = {
    defaultReaction: require("../../assets/Images/reaction.png"),
    sad: require("../../assets/Images/sad.png"),
    love: require("../../assets/Images/love.png"),
    funny: require("../../assets/Images/funny.png"),
    surprise: require("../../assets/Images/surprise.png"),
  };

  const myViewRef = useRef(null);
  const [myPy, setMyPy] = useState(0);
  const [myLeft, setMyLeft] = useState(0);
  const [reaction, setReaction] = useState(reactionArray.defaultReaction);
  const [modalVisible, setModalVisible] = useState(false);

  const reactionSize = (reaction) => {
    if (reaction === reactionArray.defaultReaction) {
      return styles.reactionImage;
    } else {
      return styles.reactionImageNotDefault;
    }
  };

  const getCoordinates = () => {
    myViewRef.current.measure((fx, fy, width, height, px, py) => {
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
    getCoordinates();
    if (reaction != reactionArray.defaultReaction) {
      setReaction(reactionArray.defaultReaction);
    } else {
      openModal();
    }
  };

  const handleReactionSelection = (item) => {
    setReaction(item);
    closeModal();
  };

  return (
    <View>
      <View ref={myViewRef}>
        <TouchableOpacity onPress={handleIconPress}>
          <Image style={reactionSize(reaction)} source={reaction} />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalWrapper}>
            <View
              style={[styles.modalContent, { top: myPy - 145, left: myLeft }]}
            >
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.love)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.love}
                />
                <Text style={styles.reactionText}>Love</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.funny)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.funny}
                />
                <Text style={styles.reactionText}>Haha!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.surprise)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.surprise}
                />
                <Text style={styles.reactionText}>Wow!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.sad)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.sad}
                />
                <Text style={styles.reactionText}>Sad</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.mad)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.mad}
                />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  reactionImage: {
    height: 22,
    width: 22,
  },
  reactionImageNotDefault: {
    height: 30,
    width: 30,
  },
  modalWrapper: {
    flex: 1,
  },
  modalContent: {
    position: "absolute",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 5,
    width: "25%",
    height: 140,
    backgroundColor: "white",
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  selectedReaction: {
    height: 32,
    width: 33,
  },
  reactionsStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
  reactionText: {
    marginLeft: 5,
    color: colors.white,
  },
});
