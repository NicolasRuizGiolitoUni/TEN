import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../../assets/Colors/colors";
import postsData from "../../assets/data/postsdata";

export default function Feed() {
  const renderPostItem = ({ item }) => {
    return (
      <View style={styles.feedWrapper}>
        {/*Post Header */}
        <View style={styles.postHeader}>
          <View style={styles.postHeaderLeft}>
            <View style={styles.profilePictureContainer}>
              <Image
                style={styles.profilePictureIcon}
                source={item.profilePicture}
                resizeMode="cover"
              />
            </View>
            <View style={styles.userInfo}>
              <Text style={styles.nameText}>{item.name}</Text>
              <View style={styles.dateAndReadTimeWrapper}>
                <Text style={styles.dateText}>{item.date}</Text>
                <Text style={styles.readTimeText}>{item.readTime}</Text>
              </View>
            </View>
          </View>
          <View style={styles.postHeaderRight}>
            <View style={styles.followButton}>
              <Text style={styles.followButtonText}>Unfollow</Text>
            </View>
            <Entypo
              name="dots-three-horizontal"
              size={20}
              style={styles.threeDotsIcon}
            />
          </View>
        </View>

        {/*Post Image */}
        <View style={styles.postImageContainer}>
          <View style={styles.postImage}>
            <Image
              source={item.image}
              style={styles.imageStyle}
              resizeMode="cover"
            />
          </View>
        </View>

        {/*Post Title */}
        <View style={styles.postTitleWrapper}>
          <Text style={styles.postTitleText}>{item.Title}</Text>
          <View style={styles.postTag}>
            <Text style={styles.postTagText}>{item.Category}</Text>
          </View>
        </View>

        {/*Post Text */}
        <View style={styles.postTextWrapper}>
          <Text style={styles.postTextText}>{item.Text}</Text>
        </View>

        {/*Post Reaction */}
        <View style={styles.reactionWrapper}>
          <View style={styles.reactionLeft}>
            <MaterialIcons
              name="emoji-emotions"
              size={30}
              style={styles.reactionIcon}
            />
            <EvilIcons name="comment" size={35} style={styles.commentIcon} />
          </View>
          <View style={styles.reactionRight}>
            <Feather name="bookmark" size={28} style={styles.bookmarkIcon} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <FlatList
      data={postsData}
      renderItem={renderPostItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  feedWrapper: {
    flex: 1,
    //borderWidth: 2,
  },
  postHeader: {
    //borderWidth: 2,
    paddingLeft: 15,
    paddingRight: 30,
    paddingBottom: 39,
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
  followButton: {
    height: 32,
    backgroundColor: colors.ovals,
    borderRadius: 30,
    paddingVertical: 7,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  followButtonText: {
    //paddingHorizontal: 20,
  },
  threeDotsIcon: {
    marginLeft: 10,
    color: colors.text,
  },
  profilePictureContainer: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: colors.containerColor,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePictureIcon: {
    height: "100%",
    width: "100%",
  },
  userInfo: {
    paddingLeft: 17,
  },
  dateAndReadTimeWrapper: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
  },
  dateText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
  },
  readTimeText: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    marginLeft: 15,
  },
  postImageContainer: {
    height: 245,
    //borderWidth: 2,
    marginBottom: 23,
  },
  postImage: {
    //borderWidth: 2,
    flex: 1,
    marginHorizontal: 30,
    borderRadius: 6,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  postTitleWrapper: {
    //borderWidth: 2,
    //flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 32,
    paddingRight: 13,
    paddingTop: 5,
    paddingBottom: 19,
  },
  postTitleText: {
    fontFamily: "Inter-Bold",
    fontSize: 16,
    paddingTop: 4,
    //width: "100%",
  },
  postTag: {
    backgroundColor: colors.ovals,
    borderRadius: 30,
    justifyContent: "center",
    paddingHorizontal: 17,
    marginRight: 17,
  },
  postTagText: {
    fontFamily: "Inter-Regular",
    fontSize: 12,
  },
  postTextWrapper: {
    //borderWidth: 2,
    paddingLeft: 30,
    paddingRight: 18,
  },
  postTextText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    textAlign: "justify",
  },
  reactionWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 30,
    paddingRight: 18,
    paddingTop: 12,
    paddingBottom: 40,
  },
  reactionLeft: {
    flexDirection: "row",
  },
  reactionRight: {},
  reactionIcon: {
    color: colors.text,
  },
  commentIcon: {
    color: colors.text,
    paddingLeft: 5,
  },
  bookmarkIcon: {
    color: colors.text,
  },
});
