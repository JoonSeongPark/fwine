import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from "react-native";

import DefaultText from "./DefaultText";
import WineImage from "./WineImage";
import FlagImage from "./FlagImage";
import StarScore from "./StarScore";
import MinPriceFunc from './MinPriceFunc'
import WineColor from './WineColor'

import Colors from "../constants/Colors";

const SearchListCard = props => {
  return (
    <View style={styles.wineCard}>
      <View>
        <View style={styles.upperPart}>
          <View style={styles.imageContainer}>
            <WineImage wineImage={props.wineImage} />
          </View>
          <View style={styles.textContainer}>
            <DefaultText style={styles.korName}>{props.korName}</DefaultText>
            <DefaultText style={styles.engName}>{props.engName}</DefaultText>
            <View style={styles.countryPart}>
              <FlagImage country={props.country} />
              <DefaultText style={styles.countryName}>
                {props.country} /
              </DefaultText>
              <DefaultText style={styles.companyName}>
                {props.company}
              </DefaultText>
            </View>
            <WineColor color={props.wineColor} />
          </View>
        </View>
      </View>
      <View style={styles.lowerPart}>
        <View style={{flexDirection:'row',}}>
          <View style={styles.lowerPartScore}>
            <DefaultText style={styles.lowerTitle}>평점</DefaultText>
            <View style={styles.scorePart}>
              <StarScore score={props.score} />
              <DefaultText style={styles.wineScore}>
                {props.score.toFixed(1)}{" "}
              </DefaultText>
              <DefaultText style={styles.maxScore}> / 5.0</DefaultText>
            </View>
          </View>
          <View style={styles.lowerPartPrice}>
            <DefaultText style={styles.lowerTitle}>최저가</DefaultText>
            <View style={styles.pricePart}>
              <DefaultText style={styles.minPriceText}>
                ￦ <MinPriceFunc price={props.priceList}/>
              </DefaultText>
            </View>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
            <TouchableOpacity style={styles.goDetailButton} onPress={props.onSelect}>
              <DefaultText style={styles.goDetailText}>상세보기 ></DefaultText>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    // height: Dimensions.get("window").height * 0.25,
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginBottom: 6,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6
    // shadowOffset: { width: 0, height: 2 }
  },
  upperPart: {
    flexDirection: "row",
    // height: Dimensions.get('window').height*0.175,
    alignItems: "center"
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.3,
    height: Dimensions.get("window").height * 0.18,
    paddingVertical: 10,
    // overflow: 'hidden',
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  textContainer: {
    paddingLeft: 10,
    width: Dimensions.get("window").width * 0.6
  },
  korName: {
    fontSize: 15,
    fontWeight: "bold",
    textAlignVertical: "center",
    lineHeight: 22,
    paddingVertical: 3
  },
  engName: {
    fontSize: 12,
    color: "gray",
    textAlignVertical: "center",
    lineHeight: 14
  },
  countryPart: {
    paddingVertical: 5,
    flexDirection: "row",
    height: 25,
    alignItems: "center"
  },
  countryName: {
    paddingLeft: 6,
    fontSize: 12
  },
  companyName: {
    paddingLeft: 2,
    color: "gray",
    fontSize: 10
  },
  lowerPart: {
    flexDirection: "row",
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: Dimensions.get("window").height * 0.08
  },
  lowerTitle: {
    color: "gray",
    fontSize: 14
  },
  lowerPartScore: {
    paddingVertical: 10,
    alignSelf: "flex-start"
  },
  scorePart: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 5,
    alignSelf: "flex-start"
  },
  wineScore: {
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 10
  },
  maxScore: {
    color: "gray",
    fontSize: 12
  },
  lowerPartPrice: {
    paddingVertical: 10,
    paddingLeft: 15,
    alignSelf: "flex-start"
  },
  pricePart: {
    paddingTop: 5,
    flexDirection: "row",
    alignItems: "flex-end",
    alignSelf: "flex-start"
  },
  minPriceText: {
    color: Colors.wineColor,
    fontSize: 17,
    fontWeight: "bold"
  },
  goDetailButton: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: Colors.wineColor,
    borderColor: Colors.wineColor,
    borderWidth: 1,
    borderRadius: 10,
    padding: 7,
  },
  goDetailText: {
    fontSize: 13,
    color: 'white',
    fontWeight: '200'
  }
});

export default SearchListCard;
