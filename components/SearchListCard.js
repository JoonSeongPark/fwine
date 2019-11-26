import React from "react";

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";

const SearchListCard = props => {
  let TouchableCmp = TouchableOpacity;

  // if (Platform.OS === "android" && Platform.Version >= 21) {
  //   TouchableCmp = TouchableNativeFeedback;
  // }
  return (
    <View style={styles.wineCard}>
      <TouchableCmp style={{ flex: 1 }} onPress={props.onSelect}>
        <View style={styles.cardFrame}>
          <View style={styles.wineNameContainer}>
            <Text style={styles.wineName} numberOfLines={1}>{props.engName}</Text>
          </View>
          <View style={styles.contents}>
            <View style={styles.imageContainer}>
              <Image
                style={styles.wineImage}
                source={{ uri: props.wineImage }}
              />
            </View>
            <View style={styles.wineInfo}>
              <Text>
                {props.area}, {props.country}
              </Text>
              <Text>WINE COLOR</Text>
              <Text></Text>
              <Text>{props.minPrice}원 (YEAR)</Text>
            </View>
          </View>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    height: 250,
    marginHorizontal: 25,
    marginVertical: 15,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6
    // shadowOffset: { width: 0, height: 2 }
  },
  cardFrame: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 15
  },
  wineNameContainer: {
    height: "15%",
    justifyContent: "center",
    borderBottomColor: 'rgba(0,0,0,0.3)',
    borderBottomWidth: 1,
    
  },
  wineName: {
    fontSize: 20,
    fontWeight: "bold"
  },
  contents: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  imageContainer: {
    width: "30%",
    height: "80%"
  },
  wineImage: {
    height: "100%",
    width: "100%"
  },
  wineInfo: {
    width: "70%",
    height: 50,
    marginHorizontal: 25,
    justifyContent: "space-around"
  }
});

export default SearchListCard;