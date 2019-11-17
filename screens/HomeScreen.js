import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const HomeScreen = props => {
  return (
    <View>
      <Text>This is Home Screen!</Text>
      <Button
        title="see the result"
        onPress={() => {
          props.navigation.navigate({ routeName: "WineSearchResult" });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
