import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import colors from "../../assets/colors/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import NotAviableAlert from "./notAvailableAlert";

export default function NavigationBar() {
  return (
    <View style={styles.followingDiscoverWrapper}>
      <View style={styles.followingDiscoverBox}>
        <View style={styles.followingBox}>
          <Text style={styles.followingText}>Following</Text>
        </View>
        <View style={styles.discoverBox}>
          <Text style={styles.discoverText}>Discover</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  followingDiscoverWrapper: {
    //borderWidth: 2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 25,
  },
  followingDiscoverBox: {
    borderBottomWidth: 1,
    borderColor: colors.white,
    //backgroundColor: colors.white,
    width: 359,
    height: 45,
    flexDirection: "row",
    //borderRadius: 35,
    justifyContent: "space-around",
    //alignItems: "stretch",
  },
  followingBox: {
    borderBottomWidth: 2,
    borderColor: colors.white,
    //borderRadius: 35,
    flex: 1,
    //backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  followingText: {
    color: colors.white,
    fontFamily: "Inter-Medium",
    fontSize: 16,
  },
  discoverBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  discoverText: {
    fontFamily: "Inter-Medium",
    color: colors.white,
    fontSize: 16,
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    paddingRight: 6,
  },
});
