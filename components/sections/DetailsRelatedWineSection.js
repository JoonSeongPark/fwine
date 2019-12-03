import React from "react";

import { View, StyleSheet, Dimensions, FlatList } from "react-native";

import DefaultText from '../DefaultText'
import HorizontalCard from '../HorizontalCard'

import wineData from "../../data/wine.json";

const DetailsRelatedWineSection = props => {
  const relatedItemList = props.relatedItemIds;

  const relatedFilter = wineList => {
    return relatedItemList.indexOf(wineList.item_id) >= 0;
  };

  const relatedWines = wineData.filter(relatedFilter);

  const renderListItem = itemData => {
    return (
      <HorizontalCard
        wineImage={itemData.item.image}
        engName={itemData.item.eng_name}
        korName={itemData.item.kor_name}
        score={itemData.item.score}
        priceList={itemData.item.price}
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
    <View style={styles.relatedWineContainer}>
      <DefaultText style={styles.titleTextStyle}>
        이 상품과 유사한 와인
      </DefaultText>

      <View style={{ alignItems: "center" }}>
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={relatedWines}
          renderItem={renderListItem}
          style={styles.horizontalList}
          horizontal={true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  relatedWineContainer: {
    // paddingHorizontal: 10,
    paddingVertical: 10,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  },
  titleTextStyle: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  horizontalList: {
    width: "100%",
    // paddingHorizontal: 10,
    paddingVertical: 10
  }
});

export default DetailsRelatedWineSection;
