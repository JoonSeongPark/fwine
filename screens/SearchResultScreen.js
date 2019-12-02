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
    var i;
    var priceList = new Array();
    for (i = 0; i < itemData.item.price.length; i++) {
      priceList.push(itemData.item.price[i][3]);
    }
    var min = Math.min.apply(null, priceList).toString();
    var answer;
    if (min.length < 4) {
      answer = min;
    } else if (min.length < 7) {
      answer = min.slice(0, -3) + "," + min.slice(-3);
    } else {
      answer = min.slice(0, -6) + "," + min.slice(-6, -3) + "," + min.slice(-3);
    }
    return (
      <SearchListCard
        wineImage={itemData.item.image}
        korName={itemData.item.kor_name}
        engName={itemData.item.eng_name}
        country={itemData.item.prod_country}
        company={itemData.item.prod_company}
        wineColor={itemData.item.color}
        score={itemData.item.score}
        minPrice={answer}
        onSelect={() => {
          props.navigation.navigate({
            routeName: "WineDetail",
            params: {
              wineId: itemData.item.id
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
    paddingVertical: 10
  },
  titleContainer: {
    paddingHorizontal: 15
  },
  titleTextStyle: {
    fontSize: 17,
    fontWeight: "bold"
  }
});

export default SearchResultScreen;
