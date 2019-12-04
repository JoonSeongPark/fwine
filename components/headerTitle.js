import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const HeaderTitle = props => {
  return (
    <View style={styles.headerContainer}>
      <Text> </Text>
      <Image
        style={styles.imageStyle}
        source={require("../assets/images/new_logoName_white.png")}
      />
      {/* <Text style={styles.textStyle}>fwine</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    height: "100%",
    alignItems: "center",
  },
  imageStyle: {
    height: "100%",
    width: undefined,
    aspectRatio: 1.8 / 1,
    resizeMode: "contain"
  },
  textStyle: {
    fontSize: 22,
    fontFamily:'vagrounded',
    color: "white"
  }
});

export default HeaderTitle;
