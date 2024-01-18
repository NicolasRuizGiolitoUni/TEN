import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import colors from "../../../assets/colors/colors";

const PostTitleUI = ({ item }) => {
  return (
    <View style={styles.postTitleWrapper}>
      <View style={styles.titleLeftWrapper}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={{ uri: item.profilePicture }}
            resizeMode="cover"
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.titleTextContainer}>
          <Text style={styles.titleText}>{item.userName}</Text>
          <View style={styles.dateAndReadTimeWrapper}>
            <Text style={styles.dateText}>{item.posts[0].date}</Text>
            <Text style={{ paddingLeft: 4 }}>·</Text>
            <Text style={styles.readTimeText}>{item.posts[0].readTime}</Text>
          </View>
        </View>
      </View>
      <View style={styles.titleRightWrapper}>
        <View style={styles.followStatusBox}>
          <Text style={styles.followStatusText}>{item.followStatus}</Text>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingTop: 0,
    paddingBottom: 10,
  },
  titleLeftWrapper: {
    flexDirection: "row",
    //alignItems: "center",
  },
  profilePictureContainer: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: colors.containerColor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePicture: {
    height: "100%",
    width: "100%",
  },
  titleTextContainer: {
    marginLeft: 15,
    marginTop: 9,
  },
  titleText: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  dateAndReadTimeWrapper: {
    flexDirection: "row",
  },
  dateText: {
    fontFamily: "Raleway-Light",
    fontSize: 12,
  },
  readTimeText: {
    fontFamily: "Raleway-Light",
    fontSize: 12,
  },
  titleRightWrapper: {},
  followStatusBox: {
    borderWidth: 1,
    borderRadius: 30,
  },
  followStatusText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    paddingVertical: 8,
    paddingHorizontal: 8,
  },
});

export default PostTitleUI;
