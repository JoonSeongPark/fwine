import React from "react";

import { View, ScrollView, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";
import WineImage from "./WineImage";

import DetailsScorePriceSection from "./sections/DetailsScorePriceSection";
import DetailsInfoSection from "./sections/DetailsInfoSection";
import DetailsPriceComparisonSection from "./sections/DetailsPriceComparisonSection";
import DetailsRelatedWineSection from "./sections/DetailsRelatedWineSection";

const WineDetails = props => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 15 }}>
        <View style={styles.imageContainer}>
          <WineImage wineImage={props.wineImage} />
        </View>

        <DetailsScorePriceSection
          score={props.score}
          priceList={props.priceList}
        />

        <DetailsInfoSection
          korName={props.korName}
          engName={props.engName}
          country={props.country}
          company={props.company}
          wineColor={props.wineColor}
        />

        <DetailsPriceComparisonSection priceList={props.priceList} />

        <View style={styles.descriptionPart}>
          <DefaultText style={styles.lowerTitle}>상세정보</DefaultText>
          <DefaultText>{props.description}</DefaultText>
        </View>
      </View>

      <DetailsRelatedWineSection relatedItemIds={props.relatedItemIds} navigation={props.navigation}/>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 230,
    paddingVertical: 30,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5,
    alignItems: "center",
    justifyContent: "center"
  },
  lowerTitle: {
    color: "gray",
    fontSize: 14,
    paddingBottom: 10
  },
  descriptionPart: {
    // paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 5,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  }
});

export default WineDetails;
