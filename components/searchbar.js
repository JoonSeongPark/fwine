import React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import Icon from "react-native-vector-icons/Ionicons";
import Colors from "../constants/Colors";

const Searchbar = props => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.inputContainer}>
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
        <TouchableOpacity style={styles.iconContainer} onPress={props.onSelect}>
          <Icon name="ios-search" size={24} color="gray" />
        </TouchableOpacity>
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
    width: "93%",
    height: "72%",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "white"
  },
  iconContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  textInputContainer: {
    width: "80%"
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
