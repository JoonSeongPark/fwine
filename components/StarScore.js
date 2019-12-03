import React from "react";

import { View, Image, StyleSheet, Dimensions } from "react-native";

const StarScore = props => {
  let full = Math.floor(props.score);
  let empty = 5 - full;

  const stars = [];

  var i;
  for (i = 0; i < full; i++) {
    stars.push(
      <Image
        style={{ ...styles.starStyle, ...props.style }}
        source={require("../assets/images/FullStar.png")}
      />
    );
  }
  for (i = 0; i < empty; i++) {
    stars.push(
      <Image
        style={{ ...styles.starStyle, ...props.style }}
        source={require("../assets/images/EmptyStar.png")}
      />
    );
  }

  return stars;
};

const styles = StyleSheet.create({
  starStyle: {
    width: Dimensions.get("window").width * 0.04,
    height: undefined,
    resizeMode: "contain",
    aspectRatio: 1 / 1
  }
});

export default StarScore;
