import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import PostText from "./feedComponentsUI/postText";
import PostImage from "./feedComponentsUI/postImage";
import PostReaction from "./feedComponentsUI/postReactions";
import PostHeaderUI from "./feedComponentsUI/postHeader";
import colors from "../../assets/colors/colors";
import PostTitleUI from "./feedComponentsUI/postTitle";

export default function Feed({ data }) {
  const renderPostItem = ({ item, index }) => {
    const checkIndexContainer =
      index === 0 ? styles.feedWrapper : styles.feedWrapperNotFirst;
    return (
      <View style={checkIndexContainer}>
        <PostHeaderUI item={item} index={index} />
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
      alwaysBounceVertical={false}
      bounces={false}
    />
  );
}

const styles = StyleSheet.create({
  feedWrapper: {
    //marginTop: 6,
    backgroundColor: colors.white,
    flex: 1,
    //borderWidth: 2,
  },
  feedWrapperNotFirst: {
    //borderTopStartRadius: 20,
    //borderTopEndRadius: 20,
    marginTop: 6,
    paddingTop: 17,
    backgroundColor: colors.white,
    flex: 1,
    //borderWidth: 2,
  },
});
