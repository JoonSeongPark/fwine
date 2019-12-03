import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

import DefaultText from "../DefaultText";
import StarScore from "../StarScore";
import MinPriceFunc from "../MinPriceFunc";

const DetailsScorePriceSection = props => {
  return (
    <View style={styles.scorePricePart}>
      <View style={styles.scorePart}>
        <DefaultText style={styles.lowerTitle}>평점</DefaultText>
        <View style={styles.scoreContent}>
          <StarScore style={styles.starImage} score={props.score} />
          <DefaultText style={styles.wineScore}>
            {props.score.toFixed(1)}
          </DefaultText>
          <DefaultText style={styles.maxScore}> / 5.0</DefaultText>
        </View>
      </View>
      <View style={styles.pricePart}>
        <DefaultText style={styles.lowerTitle}>최저가</DefaultText>
        <View style={styles.priceContent}>
          <DefaultText style={styles.minPriceText}>
            ￦ <MinPriceFunc price={props.priceList} />
          </DefaultText>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  lowerTitle: {
    color: "gray",
    fontSize: 14,
    paddingBottom: 5
  },
  scorePricePart: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  },
  scorePart: {
    paddingVertical: 10,
    alignSelf: "flex-start"
  },
  scoreContent: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 5,
    alignSelf: "flex-start"
  },
  starImage: {
    width: Dimensions.get("window").width * 0.05
  },
  wineScore: {
    fontSize: 19,
    fontWeight: "bold",
    paddingLeft: 10
  },
  maxScore: {
    color: "gray",
    fontSize: 15
  },
  pricePart: {
    paddingVertical: 10,
    paddingLeft: 15,
    alignItems: "flex-end",
    justifyContent: "space-between",
    alignSelf: "flex-start"
  },
  priceContent: {
    flexDirection: "row"
    // alignItems: "flex-end",
    // alignSelf: "flex-start"
  },
  minPriceText: {
    // color: Colors.wineColor,
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default DetailsScorePriceSection;
