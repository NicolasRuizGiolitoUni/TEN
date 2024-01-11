import { View, Text, StyleSheet } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";

export default function NavigationBar() {
  return (
    <View style={styles.followingDiscoverWrapper}>
      <View style={styles.followingContainer}>
        <Text style={styles.followingDiscoverText}>Following</Text>
      </View>
      <View style={styles.discoverContainer}>
        <Text style={styles.followingDiscoverText}>Discover</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  followingDiscoverWrapper: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    flexShrink: 0,
    paddingLeft: 16,
    paddingRight: 14,
    paddingTop: 0,
    paddingBottom: 16,
  },
  followingContainer: {
    width: 177,
    height: 39,
    borderWidth: 1,
    borderColor: colors.text,
    borderRadius: 6,
    backgroundColor: colors.containerColor,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  discoverContainer: {
    width: 177,
    height: 39,
    borderRadius: 6,
    backgroundColor: colors.containerColor,
    marginLeft: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  followingDiscoverText: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: colors.text,
  },
});
