import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../assets/colors/colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <Ionicons name="menu-sharp" size={30} color={colors.text} />
          <Text style={styles.tenText}>TEN</Text>
        </View>
        <View style={styles.headerRight}>
          <Feather name="plus" size={28} style={styles.plusIcon} />
          <Feather name="search" size={24} style={styles.searchIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerWrapper: {
    //borderWidth: 2,
    width: "100%",
    height: 64,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0,
    paddingHorizontal: 12,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  tenText: {
    fontFamily: "Inter-Medium",
    fontSize: 22,
    color: colors.text,
    paddingLeft: 10,
  },
  plusIcon: {
    paddingRight: 23,
    color: colors.circles,
  },
  searchIcon: {
    color: colors.circles,
  },
});
