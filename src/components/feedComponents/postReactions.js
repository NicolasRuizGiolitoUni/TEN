import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";
import MyIcon from "../reactionIcon";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Feather from "@expo/vector-icons/Feather";

const PostReaction = ({ item }) => {
  return (
    <View style={styles.reactionWrapper}>
      <View style={styles.reactionLeft}>
        <MyIcon />
        <EvilIcons name="comment" size={35} style={styles.commentIcon} />
      </View>
      <View style={styles.reactionRight}>
        <Feather name="bookmark" size={28} style={styles.bookmarkIcon} />
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
    paddingTop: 8,
    paddingBottom: 40,
  },
  reactionLeft: {
    flexDirection: "row",
  },
  reactionRight: {},
  reactionIcon: {
    color: colors.text,
  },
  commentIcon: {
    color: colors.text,
    paddingLeft: 5,
  },
  bookmarkIcon: {
    color: colors.text,
  },
});

export default PostReaction;
