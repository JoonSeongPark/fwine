import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const DetailHeaderTitle = props => {
  return (
    <View style={styles.headerContainer}>
<Text> Wine Information </Text>
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
});

export default DetailHeaderTitle;
