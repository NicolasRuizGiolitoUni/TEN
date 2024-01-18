import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

const PostText = ({ item }) => {
  return (
    <View style={styles.postTextWrapper}>
      <Text style={styles.postTextText}>{item.posts[0].postDrescription}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  postTextWrapper: {
    //borderWidth: 2,
    paddingLeft: 20,
    paddingRight: 18,
  },
  postTextText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    lineHeight: 22,
    //  textAlign: "justify",
  },
});

export default PostText;
