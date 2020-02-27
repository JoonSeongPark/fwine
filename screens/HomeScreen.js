import React, { useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

import Searchbar from "../components/Searchbar";

import HomeRecommendSection from "../components/sections/HomeRecommendSection";
import ClickRecommendSection from "../components/sections/ClickRecommendSection";

import TasteBased from "../components/TasteBased";

const HomeScreen = props => {
  const [wineTaste, setWineTaste] = useState([]);

  async function A() {
    try {
      const response = await fetch("http://10.0.2.2:8000/recommend", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          type: "recommend_by_taste",
          item_ids: "test"
        })
      });
      setWineTaste(await response.json());
    
    } catch (err) {
      console.log("fetch failed", err);
    }
  }


  var wineTasteBased = ["164714", "155951", "141339", "158985", "141323"];
  var wineClickBased = ["139583", "139602", "139610", "138312", "138412"];
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
            if (searchText === "") {
              null;
            } else {
              props.navigation.navigate({
                routeName: "WineSearchResult",
                params: { inputText: searchText }
              });
              setSearchText("");
            }
          }}
        />
        <ScrollView>
          <HomeRecommendSection
            recommendIds={wineTasteBased}
            title="'OOO' 님을 위한 맞춤 추천"
            navigation={props.navigation}
          />
          <ClickRecommendSection
            recommendIds={wineClickBased}
            title="최근에 본 상품과 유사한 와인"
            navigation={props.navigation}
          />

          {/* <TasteBased navigation={this.props.navigation}/> */}
  
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
};

HomeScreen.navigationOptions = {};

const styles = StyleSheet.create({
  screen: {
    flex: 1
    // backgroundColor: "#eaeaea"
  }
});

export default HomeScreen;
