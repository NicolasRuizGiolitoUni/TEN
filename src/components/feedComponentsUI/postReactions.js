import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";
import Feather from "@expo/vector-icons/Feather";
import NotAviableAlert from "../notAvailableAlert";
import ReactionImage from "../ReactionImage";

const PostReaction = ({ item }) => {
  return (
    <View style={styles.reactionWrapper}>
      <View style={styles.reactionLeft}>
        <ReactionImage />
        <TouchableOpacity onPress={NotAviableAlert}>
          {/* <Image
            source={require("../../../assets/Images/comments.png")}
            style={styles.commentIcon}
          /> */}
        </TouchableOpacity>
      </View>
      <View style={styles.reactionRight}>
        {/* <TouchableOpacity onPress={NotAviableAlert}>
          <Feather name="bookmark" size={28} style={styles.bookmarkIcon} />
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  reactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 18,
    marginTop: 60,

    paddingBottom: 20,
  },
  reactionLeft: {
    //borderWidth: 2,
    flexDirection: "row",
    alignItems: "center",
    //flex: 1,
    height: 45,
    width: 45,
  },
  reactionRight: {
    justifyContent: "center",
  },
  reactionIcon: {
    color: colors.text,
  },
  commentIcon: {
    flex: 1,
    color: colors.text,
    marginLeft: 5,
  },
  bookmarkIcon: {
    color: colors.text,
  },
  ReactionImage: {
    marginLeft: 10,
  },
  commentIcon: {
    height: 45,
    width: 45,
    marginLeft: 20,
  },
});

export default PostReaction;
