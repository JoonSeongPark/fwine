import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";

const OpeningScreen = props => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace("HomeInfo");
    }, 1000);
  });

  return (
    <View style={styles.screen}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logoImage}
          source={require("../assets/fwine_logo_white.png")}
        />
        <Text style={styles.logoText}>fwine</Text>
      </View>
    </View>
  );
};

OpeningScreen.navigationOptions = {
  headerTitle: null
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
    height: 30
  },
  logoImage: {
    height: "100%",
    width: 50,
    resizeMode: "contain"
  },
  logoText: {
    color: 'white',
    fontSize: 25
  }
});

export default OpeningScreen;
