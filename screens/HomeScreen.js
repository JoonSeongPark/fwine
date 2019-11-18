import React, { useState } from "react";
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

const HomeScreen = props => {
  const [ searchText, setSearchText ] = useState('')
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
            });
          }}
        />

        <View style={styles.todayPickContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleTextStyle}>Today's picks</Text>
          </View>
          <ScrollView />
        </View>

        <View>
          <Button
            title="see the result"
            onPress={() => {
              props.navigation.navigate({ routeName: "WineSearchResult" });
            }}
          />
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
