import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  StyleSheet
} from "react-native";

const SearchListCard = props => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <View style={styles.wineCard}>
      <TouchableCmp style={{ flex: 1 }} onPress={() => {}}>
        <View>
          <Text>{props.engName}</Text>
        </View>
      </TouchableCmp>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    height: 300,
    marginHorizontal: 20,
    marginVertical: 7,
    padding: 15,
    elevation: 3,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowRadius: 6,
    // shadowOffset: { width: 0, height: 2 }
  }
});

export default SearchListCard;
