import React from "react";

import { View, StyleSheet, Dimensions, FlatList } from "react-native";

import DefaultText from "../DefaultText";
import HorizontalCard from "../HorizontalCard";

import wineSample from "../../data/wine_sample.json";
import wineData from "../../data/wine.json";

const ClickRecommendSection = props => {
  const recommendedItemList = props.recommendIds;

  const recommendedFilter = wineList => {
    return recommendedItemList.indexOf(wineList.item_id) >= 0;
  };
  const recommendedWine = wineData.filter(recommendedFilter);

  const renderListItem = itemData => {
    return (
      <HorizontalCard
        wineImage={itemData.item.image}
        engName={itemData.item.eng_name}
        korName={itemData.item.kor_name}
        score={itemData.item.score}
        priceList={itemData.item.price}
        wineColor={itemData.item.color}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "WineDetail",
            params: {
              wineId: itemData.item.item_id
            }
          });
        }}
      />
    );
  };
  return (
    <View style={styles.recommendListContainer}>
      <View style={styles.titleContainer}>
        <DefaultText style={styles.titleTextStyle}>{props.title}</DefaultText>
      </View>
      <View style={{ alignItems: "center" }}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={recommendedWine}
          renderItem={renderListItem}
          style={styles.horizontalList}
          horizontal={true}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={styles.emptyView}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recommendListContainer: {
    height: Dimensions.get("window").height * 0.4,
    // marginBottom: 10,
    backgroundColor: "white"
  },
  emptyView: {
    height: 10,
    width: Dimensions.get("window").width - 20,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  },
  titleContainer: {
    paddingTop: 12,
    paddingHorizontal: 15
  },
  titleTextStyle: {
    fontSize: 17,
    fontWeight: "100"
  },
  horizontalList: {
    width: "100%",
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});

export default ClickRecommendSection;
