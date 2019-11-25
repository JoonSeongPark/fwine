import React from "react";

import { View, Text, StyleSheet } from "react-native";

const TextView = props => {
  return (
    <View style={{ ...styles.textContainer, ...props.textContainerStyle }}>
      <Text style={{ ...styles.textStyle, ...props.textStyle }}>
        {props.children}
      </Text>
    </View>
  );
  F;
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginBottom: 20
  }
});

export default TextView;
