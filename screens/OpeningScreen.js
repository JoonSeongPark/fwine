import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import { fadeIn } from "react-navigation-transitions";

const OpeningScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("HomeInfo");
    }, 1500);
  });

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logoName_white.png")}
        />
      </View>
    </View>
  );
};

OpeningScreen.navigationOptions = {
  headerTitle: null,
  
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.wineColor,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 50
  },
  logoImage: {
    height: "100%",
    resizeMode: "contain"
  },
});

export default OpeningScreen;
