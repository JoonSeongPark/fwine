import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import WineDetailCard from "../components/WineDetailCard";
import DetailHeaderTitle from "../components/DetailHeaderTitle";
import CustomHeaderButton from "../components/HeaderButton";

import wineData from "../data/winenara.json";

import Colors from "../constants/Colors";

const WineDetailScreen = props => {
  const wineId = props.navigation.getParam("wineId");
  const selectedWine = wineData.find(wine => wine.id === wineId);
  return (
 
    <View>
      <WineDetailCard
        wineImage={selectedWine.image}
        engName={selectedWine.eng_name}
        area={selectedWine.prod_area}
        country={selectedWine.prod_country}
        minPrice={selectedWine.prod_area}
        description={selectedWine.contents}
      />
    </View>
  );
};

WineDetailScreen.navigationOptions = navigationData => {
  const wineId = navigationData.navigation.getParam("wineId");
  const selectedWine = wineData.find(wine => wine.id === wineId);
  return {
    headerTitle: selectedWine.eng_name,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Home"
          iconName="ios-home"
          onPress={() => {
            navigationData.navigation.popToTop();
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({});

export default WineDetailScreen;
