import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions
} from "react-native";

import DefaultText from "./DefaultText";
import MinPriceFunc from './MinPriceFunc'
import WineColor from './WineColor'

import Colors from "../constants/Colors";
import WineImage from "./WineImage";

const HorizontalCard = props => {
  return (
    <View style={styles.wineCard}>
      <View>
        <View style={styles.header}>
          <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Image
              style={styles.headerImage}
              source={require("../assets/images/FullStar.png")}
            />
            <DefaultText style={styles.scoreText}>  {props.score.toFixed(1)}</DefaultText>
          </View>
          <View>
            <WineColor color={props.wineColor}/>
          </View>
        </View>
        <View style={styles.imagePart}>
          <WineImage wineImage={props.wineImage}/>
        </View>

        <View style={styles.namePart}>
          <DefaultText style={styles.korName}>{props.korName}</DefaultText>
          <DefaultText style={styles.engName}>{props.engName}</DefaultText>
        </View>
      </View>
      <TouchableOpacity onPress={props.onSelect}>
        <View style={styles.buttonStyle}>
          <DefaultText style={styles.buttonText}>최저가:</DefaultText>
          <DefaultText style={styles.buttonText}><MinPriceFunc price={props.priceList}/> 원</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    width: Dimensions.get("window").width * 0.4,
    height: Dimensions.get("window").height * 0.45,
    borderRadius: 20,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 5,
    marginVertical: 5,
    elevation: 3,
    backgroundColor: "white"
  },
  header: {
    width: Dimensions.get("window").width * 0.4,
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
    fontWeight: "200",
    fontSize: 12,
    paddingRight: 5
  },
  imagePart: {
    height: 160,
    paddingVertical: 20,
    // overflow: 'hidden',
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
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
    fontSize: 14,
    fontWeight: "bold",
    lineHeight: 17,
    paddingBottom: 5
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
