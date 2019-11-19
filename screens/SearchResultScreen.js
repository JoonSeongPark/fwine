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

import Searchbar from "../components/Searchbar";
import SearchListCard from "../components/SearchListCard";

import wineData from "../data/winenara.json";

const SearchResultScreen = props => {
  const existingSearchText = props.navigation.getParam("inputText");

  const [searchText, setSearchText] = useState(existingSearchText);
  const searchTextHandler = inputText => {
    setSearchText(inputText);
  };

  const renderListItem = itemData => {
    return (
      <SearchListCard
        engName={itemData.item.eng_name}
        wineImage={itemData.item.image}
        area={itemData.item.prod_area}
        country={itemData.item.prod_country}
        minPrice={itemData.item.price.winenara}
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
          <View>
            <Text>{existingSearchText}</Text>
            <Button
              title="see the detail"
              onPress={() => {
                props.navigation.navigate({ routeName: "WineDetail" });
              }}
            />
          </View>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={wineData}
            renderItem={renderListItem}
            contentContainerStyle={{paddingBottom: 150}}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
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
