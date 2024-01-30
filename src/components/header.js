import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Feather from "@expo/vector-icons/Feather";
import colors from "../../assets/colors/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import NotAviableAlert from "./notAvailableAlert";

export default function Header() {
  return (
    <SafeAreaView>
      <View style={styles.headerWrapper}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={NotAviableAlert}>
            <Ionicons name="menu-sharp" size={30} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.tenText}>TEN</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity onPress={NotAviableAlert}>
            <Ionicons
              name="search"
              size={24}
              color={colors.white}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={NotAviableAlert}>
            <Feather name="plus" size={28} style={styles.plusIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={NotAviableAlert}>
            <MaterialCommunityIcons
              name="bell-outline"
              size={24}
              style={styles.bellIcon}
            />
          </TouchableOpacity>
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
    paddingHorizontal: 16,
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
    color: colors.white,
    paddingLeft: 10,
  },
  plusIcon: {
    //paddingRight: 23,
    color: colors.white,
    paddingRight: 10,
  },
  bellIcon: {
    color: colors.white,
  },
  searchIcon: {
    marginRight: 10,
  },
});
