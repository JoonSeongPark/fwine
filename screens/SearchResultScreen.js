import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
  Image
} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import Searchbar from "../components/Searchbar";
import SearchListCard from "../components/SearchListCard";
import CustomHeaderButton from "../components/HeaderButton";
import DefaultText from "../components/DefaultText";

import wineSample from "../data/wine_sample.json";
import wineData from "../data/wine.json";

const SearchResultScreen = props => {
  const existingSearchText = props.navigation.getParam("inputText");
  const [searchText, setSearchText] = useState(existingSearchText);
  const searchTextHandler = inputText => {
    setSearchText(inputText);
  };

  const lowerSearchText = existingSearchText.replace(/\s/gi, "").toLowerCase();

  const searchFilter = wineNameList => {
    lowerEngName = wineNameList.eng_name.replace(/\s/gi, "").toLowerCase();
    lowerKorName = wineNameList.kor_name.replace(/\s/gi, "");
    return (
      lowerEngName.indexOf(lowerSearchText) >= 0 ||
      lowerKorName.indexOf(lowerSearchText) >= 0
    );
  };

  const searchedWine = wineData.filter(searchFilter);

  const renderListItem = itemData => {

    return (
      <SearchListCard
        wineImage={itemData.item.image}
        korName={itemData.item.kor_name}
        engName={itemData.item.eng_name}
        country={itemData.item.prod_country}
        company={itemData.item.prod_company}
        wineColor={itemData.item.color}
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
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Searchbar
          searchWine={searchText}
          handler={searchTextHandler}
          onSelect={() => {
            props.navigation.push("WineSearchResult", {
              inputText: searchText
            });
          }}
        />
        <View style={styles.searchResultContainer}>
          <View style={styles.titleContainer}>
            <DefaultText style={styles.titleTextStyle}>검색 결과</DefaultText>
          </View>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={searchedWine}
            renderItem={renderListItem}
            contentContainerStyle={{ paddingBottom: 150 }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

SearchResultScreen.navigationOptions = navigationData => {
  return {
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

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  searchResultContainer: {
    backgroundColor: "#c0c0c0"
  },
  titleContainer: {
    paddingVertical: 10,
    backgroundColor: "white",
    paddingHorizontal: 15,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 1
  },
  titleTextStyle: {
    fontSize: 17,
    fontWeight: "bold"
  }
});

export default SearchResultScreen;
