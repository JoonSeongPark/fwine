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

import wineData from "../data/winenara.json";

const SearchResultScreen = props => {
  const existingSearchText = props.navigation.getParam("inputText");
  const [searchText, setSearchText] = useState(existingSearchText);
  const searchTextHandler = inputText => {
    setSearchText(inputText);
  };

  const lowerSearchText = existingSearchText.replace(/\s/gi, "").toLowerCase();

  const searchFilter = wineName => {
    lowerEngName = wineName.eng_name.replace(/\s/gi, "").toLowerCase();
    return lowerEngName.indexOf(lowerSearchText) >= 0;
  };

  const searchedWine = wineData.filter(searchFilter);

  const renderListItem = itemData => {
    return (
      <SearchListCard
        engName={itemData.item.eng_name}
        wineImage={itemData.item.image}
        area={itemData.item.prod_area}
        country={itemData.item.prod_country}
        minPrice={itemData.item.price.winenara}
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
            <Text style={styles.titleTextStyle}>Result</Text>
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
    fontSize: 23,
    fontWeight: "bold"
  }
});

export default SearchResultScreen;
