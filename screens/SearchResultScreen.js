import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SearchResultScreen = props => {
  return (
    <View>
      <Text>This is Search Result Screen!</Text>
      <Button
      title="see the detail"
      onPress={() => {
        props.navigation.navigate({ routeName: 'WineDetail' });
      }}
    />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchResultScreen;
