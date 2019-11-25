import React from "react";

import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

import TextView from "../components/TextView";

const SearchListCard = props => {
  return (
    <ScrollView>
      <View style={styles.wineDetail}>
        <View style={styles.cardPart}>
          <View style={styles.imageContainer}>
            <Image style={styles.wineImage} source={{ uri: props.wineImage }} />
          </View>
          <View style={styles.wineInfo}>
            <TextView textStyle={styles.wineName}>{props.engName}</TextView>
            <TextView>
              {props.area}, {props.country}
            </TextView>
            <TextView>WINE COLOR</TextView>
            <TextView>{props.minPrice}원 (YEAR)</TextView>
          </View>
        </View>
        <View style={styles.pricePart}>
          <View style={styles.webFirst}>
            <Text>Web_1</Text>
            <Text>Year_1</Text>
            <Text>minPrice</Text>
          </View>
          <View style={styles.webSecond}>
            <Text>Web_2</Text>
            <Text>Year_2</Text>
            <Text>middlePrice</Text>
          </View>
          <View style={styles.webThird}>
            <Text>Web_3</Text>
            <Text>Year_3</Text>
            <Text>TopPrice</Text>
          </View>
        </View>
        <View sylte={styles.descriptionPart}>
          <View style={styles.descriptionTitle}>
            <Text style={styles.descriptionTitleText}>Detail? Description?</Text>
          </View>
          <View style={styles.descriptionContent}>
            <Text style={styles.descriptionContentText}>{props.description}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wineDetail: {
    flex: 1,
    paddingHorizontal: 30
  },
  cardPart: {
    flexDirection: "row",
    height: 300,

    paddingVertical: 15,
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1
  },
  imageContainer: {
    width: "30%",
    height: 200
  },
  wineImage: {
    height: "100%",
    width: "100%"
  },
  wineName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  wineInfo: {
    width: "70%",
    height: "100%",
    justifyContent: "space-around"
  },
  pricePart: {
    height: 100,
    paddingHorizontal: 30,
    borderBottomColor: "rgba(0,0,0,0.3)",
    borderBottomWidth: 1
  },
  webFirst:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  webSecond: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  webThird:{
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descriptionPart: {},
  descriptionTitle: {
    paddingBottom: 30
  },
  descriptionTitleText:{
    fontSize: 22,
    fontWeight: 'bold'
  },
  descriptionContent: {},
  descriptionContentText: {
    fontSize: 15
  }
});

export default SearchListCard;
