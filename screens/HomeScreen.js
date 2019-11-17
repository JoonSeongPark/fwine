import React from "react";
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from "react-native";

import Searchbar from "../components/searchbar";

const HomeScreen = props => {
  return (
    <View style={styles.screen}>
      <Searchbar />

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
  );
};

HomeScreen.navigationOptions = {
};


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
