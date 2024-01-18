import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../../assets/colors/colors";
const PostHeaderUI = ({ item }) => {
  return (
    <View style={styles.postHeaderWrapper}>
      <View style={styles.postHeaderBox}>
        <Text numberOfLines={2} ellipsizeMode="tail" style={styles.titleText}>
          {item.posts[0].title}
        </Text>
        <View style={styles.categoryBox}>
          <Text style={styles.categoryText}>
            {item.posts[0].category.length <= 8
              ? item.posts[0].category
              : `${item.posts[0].category.substring(0, 8)}...`}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  postHeaderWrapper: {
    //borderWidth: 2,
    justifyContent: "center",
    paddingVertical: 18,
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
    maxWidth: 200,
    lineHeight: 25,
  },
  categoryText: {
    paddingHorizontal: 12,
    color: colors.white,
  },
  categoryBox: {
    alignItems: "flex-end",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: colors.blue,
    marginTop: 16,
    marginBottom: 8,
  },
});

export default PostHeaderUI;
