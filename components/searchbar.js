import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const Searchbar = props => {
  const [searchText, setSearchText] = useState(" ");

  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon name="ios-search" size={24} color="gray" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Search"
            onChangeText={() => {}}
            value={searchText}
            style={styles.searchInput}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="search" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 75,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: Colors.wineColor
  },
  inputContainer: {
    width: "72%",
    height: "50%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    backgroundColor: "white"
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  textInputContainer: {
    flex: 7
  },
  serachInput: {
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: "center"
  },
  buttonContainer: {
    width: "18%"
  }
});

export default Searchbar;
