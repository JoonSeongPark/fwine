import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";

import DefaultText from "../DefaultText";
import FlagImage from "../FlagImage";
import WineColor from "../WineColor";

const DetailsInfoSection = props => {
  return (
    <View style={styles.infoPart}>
      <DefaultText style={styles.korName}>{props.korName}</DefaultText>
      <DefaultText style={styles.engName}>{props.engName}</DefaultText>

      <View style={styles.countryColorPart}>
        <View style={styles.countryPart}>
          <FlagImage country={props.country} />
          <DefaultText style={styles.countryName}>
            {props.country} /
          </DefaultText>
          <DefaultText style={styles.companyName}>{props.company}</DefaultText>
        </View>
        <View>
          <WineColor color={props.wineColor} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  infoPart: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  },
  korName: {
    fontSize: 20,
    fontWeight: "bold",
    textAlignVertical: "center",
    lineHeight: 22,
    paddingVertical: 3
  },
  engName: {
    fontSize: 15,
    color: "gray",
    textAlignVertical: "center",
    lineHeight: 14,
    paddingBottom: 5
  },
  countryColorPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
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
  }
});

export default DetailsInfoSection;
