import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import PostHeader from "./feedComponents/postHeader";
import PostText from "./feedComponents/postText";
import PostImage from "./feedComponents/postImage";
import PostTitle from "./feedComponents/postTitle";
import PostReaction from "./feedComponents/postReactions";

export default function Feed({ data }) {
  const renderPostItem = ({ item }) => {
    return (
      <View style={styles.feedWrapper}>
        <PostHeader item={item} />
        <PostImage item={item} />
        <PostTitle item={item} />
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
    flex: 1,
    //borderWidth: 2,
  },
});
