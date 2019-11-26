import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import Searchbar from "../components/Searchbar";
import wine21 from '../data/wine21_146483.json'

const HomeScreen = props => {
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = inputText => {
    setSearchText(inputText);
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
            props.navigation.navigate({
              routeName: "WineSearchResult",
              params: { inputText: searchText }
            })
            setSearchText('');
          }}
        />

        <View style={styles.todayPickContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Today's picks</Text>
            <View sytle={{ flex: 1, borderColor: 'black', borderWidth: 1, height: 300 }}></View>
          </View>
          <ScrollView />
        </View>
        <View style={styles.todayPickContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Just for you</Text>
            <View sytle={{ borderWidth: 1, height: 300 }}></View>
          </View>
          <ScrollView />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

HomeScreen.navigationOptions = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  todayPickContainer: {
    height: 300,
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

export default HomeScreen;
