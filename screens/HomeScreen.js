import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions
} from "react-native";
import Carousel from "react-native-snap-carousel";

import Searchbar from "../components/Searchbar";
import HorizontalCard from "../components/HorizontalCard";
import DefaultText from "../components/DefaultText";

import wineSample from "../data/wine_sample.json";

const HomeScreen = props => {
  const [searchText, setSearchText] = useState("");

  const searchTextHandler = inputText => {
    setSearchText(inputText);
  };

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
      <HorizontalCard
        wineImage={itemData.item.image}
        engName={itemData.item.eng_name}
        korName={itemData.item.kor_name}
        score={itemData.item.score}
        minPrice={answer}
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
            props.navigation.navigate({
              routeName: "WineSearchResult",
              params: { inputText: searchText }
            });
            setSearchText("");
          }}
        />
        <ScrollView>
          <View style={styles.todayPickContainer}>
            <View style={styles.titleContainer}>
              <DefaultText style={styles.titleTextStyle}>
                오늘의 와인
              </DefaultText>
            </View>
            <View style={{ alignItems: "center" }}>
              <FlatList
                keyExtractor={(item, index) => item.id}
                data={wineSample}
                renderItem={renderListItem}
                style={styles.horizontalList}
                horizontal={true}
              />
            </View>
          </View>
          <View style={styles.todayPickContainer}>
            <View style={styles.titleContainer}>
              <DefaultText style={styles.titleTextStyle}>
                동엽님을 위한 맞춤형 추천
              </DefaultText>
            </View>
            <View style={{ alignItems: "center" }}>
              <FlatList
                keyExtractor={(item, index) => item.id}
                data={wineSample}
                renderItem={renderListItem}
                style={styles.horizontalList}
                horizontal={true}
              />
            </View>
          </View>
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
  },
  todayPickContainer: {
    height: Dimensions.get("window").height * 0.5,
    // marginBottom: 10,
    backgroundColor: "white"
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
    paddingVertical: 10
  }
});

export default HomeScreen;
