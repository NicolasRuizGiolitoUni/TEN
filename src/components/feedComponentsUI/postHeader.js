import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../../assets/colors/colors";

const PostHeaderUI = ({ item }) => {
  return (
    <View style={styles.postHeaderWrapper}>
      <Text style={styles.categoryText}>#{item.posts[0].category}</Text>
      <View style={styles.postHeaderBox}>
        <TouchableOpacity>
          <Text style={styles.titleText}>{item.posts[0].title}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderWrapper: {
    //borderWidth: 2,
    justifyContent: "center",
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  postHeaderBox: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleText: {
    fontFamily: "Avenir-Medium",
    fontSize: 20,
    //maxWidth: 200,
    lineHeight: 25,
  },
  categoryText: {
    fontSize: 12,
    paddingHorizontal: 0,
    marginBottom: 8,
    color: colors.grey,
    fontFamily: "Inter-Regular",
  },
  categoryBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 8,
  },
});

export default PostHeaderUI;
