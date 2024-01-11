import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const PostTitle = ({ item }) => {
  return (
    <View style={styles.postTitleWrapper}>
      <Text style={styles.postTitleText}>{item.posts[0].title}</Text>
      <View style={styles.postTagWrapper}>
        <View style={styles.postTag}>
          <Text style={styles.postTagText}>
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
  postTitleWrapper: {
    //borderWidth: 2,
    //flex: 1,
    //backgroundColor: "red",
    flexDirection: "row",
    //justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 12,
    paddingTop: 0,
    paddingBottom: 10,
  },
  postTitleText: {
    //borderWidth: 2,
    fontFamily: "Inter-Bold",
    fontSize: 16,
    paddingTop: 4,
    width: "60%",
  },
  postTagWrapper: {
    flex: 1,
    //borderWidth: 2,
    justifyContent: "center",
    alignItems: "flex-end",
    //alignSelf: "center",
  },
  postTag: {
    //flex: 1,
    backgroundColor: colors.ovals,
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 17,
    //marginRight: 17,
  },
  postTagText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    paddingVertical: 8,
  },
});

export default PostTitle;
