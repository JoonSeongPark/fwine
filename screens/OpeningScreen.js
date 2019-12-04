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
          source={require("../assets/images/new_logoName_wine.png")}
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
    backgroundColor: 'white'
  },
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // backgroundColor: Colors.wineColor,
    backgroundColor: 'white',
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
    fontSize: 18,
    fontWeight: '300',
    color: 'black'
  }
});

export default OpeningScreen;
