import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import PostText from "./feedComponentsUI/postText";
import PostImage from "./feedComponentsUI/postImage";
import PostReaction from "./feedComponentsUI/postReactions";
import PostHeaderUI from "./feedComponentsUI/postHeaderUI";
import colors from "../../assets/colors/colors";
import PostTitleUI from "./feedComponentsUI/postTitleUI";

export default function Feed({ data }) {
  const renderPostItem = ({ item }) => {
    return (
      <View style={styles.feedWrapper}>
        <PostHeaderUI item={item} />
        <PostImage item={item} />
        <PostTitleUI item={item} />
        <PostText item={item} />
        <PostReaction item={item} />
      </View>
    );
  };
  return (
    <FlatList
      data={data}
      renderItem={renderPostItem}
      keyExtractor={(item) => item.userName}
    />
  );
}

const styles = StyleSheet.create({
  feedWrapper: {
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    marginTop: 6,
    backgroundColor: colors.white,
    flex: 1,
    //borderWidth: 2,
  },
});
