import React from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const Searchbar = props => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
        <View style={styles.iconContainer}>
          <Icon name="ios-search" size={24} color="gray" />
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder="Enter your wine name"
            onChangeText={props.handler}
            value={props.searchWine}
            style={styles.searchInput}
            blurOnSubmit
            autoCorrect={false}
            underlineColorAndroid="transparent"
            onSubmitEditing={props.onSelect}
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="search"
          onPress={props.onSelect}
          color="wine"
          fontSize="50"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 55,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-around",
    backgroundColor: Colors.wineColor
  },
  inputContainer: {
    width: "68%",
    height: "72%",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "white"
  },
  iconContainer: {
    width: '20%',
    alignItems: "center",
    justifyContent: "center"
  },
  textInputContainer: {
    width: '80%'
  },
  serachInput: {
    paddingTop: 0,
    paddingBottom: 0,
    textAlignVertical: "center",
  },
  buttonContainer: {
    width: "18%"
  }
});

export default Searchbar;
