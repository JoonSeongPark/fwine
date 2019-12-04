import React from "react";

import { View, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import DefaultText from "../DefaultText";

import Colors from "../../constants/Colors";
import { Linking } from "expo";

const DetailsPriceComparisonSection = props => {
  // const a = {a: "Linking.openURL("+props.priceList[i][1]+")"}
  const priceListSorted = [];
  var i;
  priceListSorted.push(
    <View
      style={{
        ...styles.priceComparisonListContainer,
        ...{ borderBottomColor: "gray", borderBottomWidth: 0.3 }
      }}
    >
      <DefaultText
        style={{
          ...styles.priceComparisonList,
          ...{ fontSize: 14, fontWeight: "bold" }
        }}
      >
        판매자
      </DefaultText>
      <DefaultText
        style={{
          ...styles.priceComparisonList,
          ...{ fontSize: 14, fontWeight: "bold" }
        }}
      >
        빈티지
      </DefaultText>
      <DefaultText
        style={{
          ...styles.priceComparisonList,
          ...{ fontSize: 14, fontWeight: "bold" }
        }}
      >
        가격
      </DefaultText>
      <DefaultText
        style={{
          ...styles.priceComparisonList,
          ...{ width: "10%", fontSize: 14, fontWeight: "bold" }
        }}
      >
        링크
      </DefaultText>
    </View>
  );
  for (i = 0; i < props.priceList.length; i++) {
    let vintage;
    if (props.priceList[i][2] === null) {
      vintage = null;
    } else {
      vintage = props.priceList[i][2] + " 년";
    }
    var stringPrice = props.priceList[i][3].toString();
    var commaPrice;
    if (stringPrice.length < 4) {
      commaPrice = stringPrice;
    } else if (stringPrice.length < 7) {
      commaPrice = stringPrice.slice(0, -3) + "," + stringPrice.slice(-3);
    } else {
      commaPrice =
        stringPrice.slice(0, -6) +
        "," +
        stringPrice.slice(-6, -3) +
        "," +
        stringPrice.slice(-3);
    }
    priceListSorted.push(
      <View style={styles.priceComparisonListContainer}>
        <DefaultText
          style={{
            ...styles.priceComparisonList,
            ...{ fontSize: 14, fontWeight: "200" }
          }}
        >
          {props.priceList[i][0]}
        </DefaultText>
        <DefaultText
          style={{ ...styles.priceComparisonList, ...{ fontSize: 12 } }}
        >
          {vintage}
        </DefaultText>
        <DefaultText
          style={{ ...styles.priceComparisonList, ...{ fontSize: 12 } }}
        >
          {commaPrice} 원
        </DefaultText>
        <View
          style={{
            width: "10%",
            alignItems: "center"
          }}
        >
          <View
            style={{
              backgroundColor: Colors.wineColor,
              borderColor: Colors.wineColor,
              borderRadius: 20,
              paddingHorizontal: 3
            }}
          >
            <Icon
              name="md-arrow-forward"
              size={22}
              color="white"
              onPress={() => {
                
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.priceComparisonPart}>
      <DefaultText style={styles.lowerTitle}>가격비교</DefaultText>

      {priceListSorted}
    </View>
  );
};

const styles = StyleSheet.create({
  priceComparisonPart: {
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomColor: "#c0c0c0",
    borderBottomWidth: 0.5
  },
  priceComparisonListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 3
    // borderWidth: 0.7,
    // borderColor: "black"
  },
  priceComparisonList: {
    width: "20%",
    textAlign: "center",
    fontSize: 14,
    // marginVertical: 5,
    paddingVertical: 5
  }
});

export default DetailsPriceComparisonSection;
