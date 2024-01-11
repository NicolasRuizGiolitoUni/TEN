import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";

const PostImage = ({ item }) => {
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
    marginBottom: 12,
  },
  postImage: {
    //borderWidth: 2,
    backgroundColor: "#F2F2F2",
    flex: 1,
    //marginHorizontal: 30,
    borderRadius: 10,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
});
