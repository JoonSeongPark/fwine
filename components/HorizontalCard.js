import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions
} from "react-native";

import DefaultText from "./DefaultText";
import Colors from "../constants/Colors";

const HorizontalCard = props => {
  return (
    <View style={styles.wineCard}>
      <View>
        <View style={styles.header}>
          <View>
            <Image
              style={styles.headerImage}
              source={require("../assets/images/logo_wine.png")}
            />
          </View>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <DefaultText style={styles.scoreText}>{props.score}</DefaultText>
            <Image
              style={styles.headerImage}
              source={require("../assets/images/FullStar.png")}
            />
          </View>
        </View>
        <View style={styles.imagePart}>
          <Image style={styles.wineImage} source={{ uri: props.wineImage }} />
        </View>

        <View style={styles.namePart}>
          <DefaultText style={styles.korName}>{props.korName}</DefaultText>
          <DefaultText style={styles.engName}>{props.engName}</DefaultText>
        </View>
      </View>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.buttonStyle}>
          <DefaultText style={styles.buttonText}>최저가:</DefaultText>
          <DefaultText style={styles.buttonText}>{props.minPrice}원</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    width: Dimensions.get("window").width * 0.4,
    height: '90%',
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 3,
    // borderColor: "black",
    // borderWidth: 1,
    backgroundColor: "white"
    // shadowColor: "black",
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 }
  },
  header: {
    height: 26,
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    zIndex:10
  },
  headerImage: {
    height: "100%",
    width: undefined,
    aspectRatio: 1 / 1,
    resizeMode: "contain"
  },
  scoreText: {
    // fontWeight: "bold",
    fontSize: 13,
    paddingRight: 5
  },
  imagePart: {
    height: 180,
    paddingVertical: 20,
    // overflow: 'hidden',
    flexDirection: "row",
    alignItems: 'flex-end'
  },
  wineImage: {
    width: "100%",
    height: "120%",
    // justifyContent: "flex-end",
    resizeMode: "contain"
  },
  namePart: {
    width: "100%",
    paddingHorizontal: 10,
    alignItems: "center"
    // height: 100,
  },
  korName: {
    fontSize: 13,
    fontWeight: "bold",
    lineHeight: 17
  },
  engName: {
    fontSize: 10,
    color: "gray"
  },
  buttonStyle: {
    width: Dimensions.get("window").width * 0.3,
    backgroundColor: Colors.wineColor,
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderRadius: 25,
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 11,
    fontWeight: "300"
  }
});

export default HorizontalCard;
