import React from "react";
import { View, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import WineDetails from "../components/WineDetails";
import CustomHeaderButton from "../components/HeaderButton";

import wineData from "../data/wine.json";

const WineDetailScreen = props => {
  const wineId = props.navigation.getParam("wineId");
  const selectedWine = wineData.find(wine => wine.item_id === wineId);
  return (
      <WineDetails
        wineImage={selectedWine.image}
        score={selectedWine.score}
        priceList={selectedWine.price}
        korName={selectedWine.kor_name}
        engName={selectedWine.eng_name}
        country={selectedWine.prod_country}
        company={selectedWine.prod_company}
        wineColor={selectedWine.color}
        description={selectedWine.contents}
        relatedItemIds={selectedWine.related_item_ids}
      />
  );
};

WineDetailScreen.navigationOptions = navigationData => {
  return {
    headerTitle: null,
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
