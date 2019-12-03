import React from "react";

import { View, StyleSheet } from "react-native";

import DefaultText from "./DefaultText";

const WineColor = props => {
  const wineColorDict = [
    {
      wineColorName: "레드",
      boxColor: "#BD2438"
    },
    {
      wineColorName: "화이트",
      boxColor: "#F8FAA7"
    },
    {
      wineColorName: "스파클링",
      boxColor: "#52B036"
    },
    {
      wineColorName: "주정강화",
      boxColor: "#53257E"
    },
    {
      wineColorName: "고도주",
      boxColor: "#E76D2C"
    },
    {
      wineColorName: "로제",
      boxColor: "#F66677"
    },
    {
      wineColorName: "기타",
      boxColor: "#909090"
    }
  ];

  const matchedColor = wineColorDict.find(
    color => color.wineColorName === props.color
  );
  return (
    <View
      style={{
        ...styles.wineColorContainer,
        ...{ backgroundColor: matchedColor.boxColor }
      }}
    >
      <DefaultText style={styles.wineColor}>{props.color}</DefaultText>
    </View>
  );
};

const styles = StyleSheet.create({
  wineColorContainer: {
    alignSelf: "flex-start",
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 10
  },
  wineColor: {
    color: "white",
    fontSize: 13,
    fontWeight: '200'
  }
});

export default WineColor;
