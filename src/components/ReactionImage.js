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
    defaultReaction: require("../../assets/Images/nlike.png"),
    like: require("../../assets/Images/Reaction-clicked.png"),
    inspiring: require("../../assets/Images/Inspiring.png"),
    congratulations: require("../../assets/Images/Congratulations.png"),
    love: require("../../assets/Images/love.png"),
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
          <Image style={styles.reactionImage} source={reaction} />
        </TouchableOpacity>
      </View>
      <Modal transparent={true} animationType="fade" visible={modalVisible}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalWrapper}>
            <View
              style={[styles.modalContent, { top: myPy - 161, left: myLeft }]}
            >
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.like)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.like}
                />
                <Text style={styles.reactionText}>Like</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  handleReactionSelection(reactionArray.congratulations)
                }
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.congratulations}
                />
                <Text style={styles.reactionText}>Congratualtions!</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.inspiring)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.inspiring}
                />
                <Text style={styles.reactionText}>Inspiring</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleReactionSelection(reactionArray.love)}
                style={styles.reactionsStyle}
              >
                <Image
                  style={styles.selectedReaction}
                  source={reactionArray.love}
                />
                <Text style={styles.reactionText}>Love it!</Text>
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
    //borderWidth: 2,
    height: 28,
    width: 28,
  },
  reactionImageNotDefault: {
    //borderWidth: 2,
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
    padding: 10,
    width: "44%",
    height: 160,
    backgroundColor: "white",
    borderRadius: 10,
    backgroundColor: colors.blue,
  },
  touchableStlye: {},
  selectedReaction: {
    height: 32,
    width: 33,
  },
  reactionsStyle: {
    width: "100%",
    //borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 5,
  },
  reactionText: {
    marginLeft: 5,
    color: colors.white,
  },
});
