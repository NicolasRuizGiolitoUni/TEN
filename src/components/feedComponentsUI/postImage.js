import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

const PostImage = ({ item }) => {
  const hasImage = item.posts[0].postImage !== "";

  // If postImage is empty, don't render the image container
  if (!hasImage) {
    return null;
  }

  return (
    <View style={styles.postImageContainer}>
      <View style={styles.postImage}>
        <Image
          source={{ uri: item.posts[0].postImage }}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  postImageContainer: {
    height: 245,
    //borderWidth: 2,
    marginBottom: 16,
  },
  postImage: {
    //borderWidth: 2,
    backgroundColor: "#F2F2F2",
    flex: 1,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  imageStyle: {
    //borderRadius: 10,
    flex: 1,
  },
});
