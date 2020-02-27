import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../constants/Colors";
import DefaultText from "../components/DefaultText";

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
          source={require("../assets/images/new_logoName_white.png")}
        />
        <DefaultText style={styles.textTitle}>국내 모든 와인을 한눈에</DefaultText>
      </View>
    </View>
  );
};

OpeningScreen.navigationOptions = {
  headerTitle: null,
  headerStyle: {
    elevation: 0,
    backgroundColor: Colors.wineColor
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: Colors.wineColor,
    backgroundColor: Colors.wineColor,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 50
  },
  logoContainer: {
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: 220,
    height: 110
  },
  logoImage: {
    height: "100%",
    resizeMode: "contain"
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default OpeningScreen;
