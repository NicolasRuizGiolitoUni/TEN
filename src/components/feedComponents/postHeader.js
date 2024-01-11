import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import colors from "../../../assets/colors/colors";

const PostHeader = ({ item }) => {
  console.log(item);
  return (
    <View style={styles.postHeader}>
      <View style={styles.postHeaderLeft}>
        <View style={styles.profilePictureContainer}>
          <Image
            style={styles.profilePictureImage}
            source={{ uri: item.profilePicture }}
            resizeMode="cover"
          />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nameText}>{item.userName}</Text>
          <View style={styles.dateAndReadTimeWrapper}>
            <Text style={styles.dateText}>{item.posts[0].date}</Text>
            <Text style={{ paddingLeft: 4 }}>·</Text>
            <Text style={styles.readTimeText}>{item.posts[0].readTime}</Text>
          </View>
        </View>
      </View>
      <View style={styles.postHeaderRight}>
        <View style={styles.followButton}>
          <Text style={styles.followButtonText}>{item.followStatus}</Text>
        </View>
        <Entypo
          name="dots-three-horizontal"
          size={20}
          style={styles.threeDotsIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    //borderWidth: 2,
  },
  postHeader: {
    //borderWidth: 2,
    paddingLeft: 12,
    paddingRight: 12,
    paddingBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  postHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  postHeaderRight: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  profilePictureContainer: {
    width: 35,
    height: 35,
    borderRadius: 50,
    backgroundColor: colors.containerColor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePictureImage: {
    height: "100%",
    width: "100%",
  },
  userInfo: {
    paddingLeft: 12,
  },
  dateAndReadTimeWrapper: {
    //borderWidth: 2,
    flexDirection: "row",
    //justifyContent: "space-between",
  },
  nameText: {
    fontFamily: "Inter-Bold",
    fontSize: 14,
  },
  dateText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  readTimeText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
    marginLeft: 5,
  },
  followButton: {
    height: 32,
    backgroundColor: colors.ovals,
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  followButtonText: {
    fontSize: 12,
    //paddingHorizontal: 20,
  },
  threeDotsIcon: {
    marginLeft: 10,
    color: colors.text,
  },
});

export default PostHeader;
