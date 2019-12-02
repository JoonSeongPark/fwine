import React from "react";
import { Image, StyleSheet } from "react-native";

const WineImage = props => {
  let wineImageTag
  if (props.wineImage === null) {
    wineImageTag =  <Image style={styles.altImage} source={(require('../assets/images/logoName_wine.png'))} />
  } else {
    wineImageTag =  <Image style={styles.wineImage} source={{ uri: props.wineImage }} />
  }
  return wineImageTag;
};

const styles = StyleSheet.create({
  altImage: {
    height: "50%",
    width: "50%",
    resizeMode: "contain"

  },
  wineImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain"
  },
});

export default WineImage;
