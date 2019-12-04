import React, { Component } from "react";

import {
  View,
  Image,
  FlatList,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  StyleSheet,
  Dimensions
} from "react-native";

import DefaultText from './DefaultText'
import HorizontalCard from './HorizontalCard'
import wineData from '../data/wine.json'
// import styles from "./styles";

export default class TasteBased extends Component {
 
    state = {
      wineList: [],
      
      loading: true

    }
  async componentDidMount() {
    try {
      const wineApiCall = await fetch("http://10.0.2.2:8000/recommend", {
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
      const wine = await wineApiCall.json();
      this.setState({ wineList: wine.recommend, loading: false });
      
    } catch (err) {
      console.log("Error fetching data-----------", err);
    }
  }
  renderItem(data) {
    const itemData = wineData.find(wine => wine.item_id == data.item)
    return (
      <HorizontalCard
      wineImage={itemData.image}
      engName={itemData.eng_name}
      korName={itemData.kor_name}
      score={itemData.score}
      priceList={itemData.price}
      onSelect={() => {
        this.props.navigation.navigate({
          routeName: "WineDetail",
          params: {
            wineId: itemData.item_id
          }
        });
      }}
    />
    );
  }
  render() {
    const { wineList, loading } = this.state;

    if (!loading) {
      return (
        <View style={styles.recommendListContainer}>
        <View style={styles.titleContainer}>
          <DefaultText style={styles.titleTextStyle}>취향 기반 추천 와인</DefaultText>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={wineList}
            renderItem={this.renderItem}
            style={styles.horizontalList}
            horizontal={true}
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <View style={styles.emptyView}></View>
        </View>
      </View>
      );
    } else {
      return <ActivityIndicator style={{height: 200}}/>;
    }
  }
}
const styles = StyleSheet.create({
  recommendListContainer: {
    height: Dimensions.get("window").height * 0.53,
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
