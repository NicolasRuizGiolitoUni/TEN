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
      <View style={styles.iconWrapper}>
        <TouchableOpacity onPress={NotAviableAlert}>
          <Ionicons name="search" size={24} color={colors.white} />
        </TouchableOpacity>
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
    paddingBottom: 21,
  },
  followingDiscoverBox: {
    backgroundColor: colors.white,
    width: 317,
    height: 39,
    flexDirection: "row",
    borderRadius: 35,
    justifyContent: "space-around",
    //alignItems: "stretch",
  },
  followingBox: {
    borderRadius: 35,
    flex: 1,
    backgroundColor: colors.darkblue,
    justifyContent: "center",
    alignItems: "center",
  },
  followingText: {
    color: colors.white,
    fontFamily: "Inter-Medium",
  },
  discoverBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  discoverText: {
    fontFamily: "Inter-Medium",
  },
  iconWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
    paddingRight: 6,
  },
});
