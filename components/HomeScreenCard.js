import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity
} from "react-native";

const HomeScreenCard = props => {
  return (
    <View style={styles.wineCard}>
      <TouchableOpacity onPress={props.onSelect}>
        {/* <View> */}
        <View style={styles.imagePart}>
          <ImageBackground
            source={require("../assets/images/wineFarm_1.jpg")}
            style={styles.bgImage}
          >
            <Image style={styles.wineImage} source={{ uri: props.wineImage }} />
          </ImageBackground>
        </View>
        {/* </View> */}
        <View style={styles.textContainer}>
          <Text>{props.engName}</Text>
          <Text>{props.content}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  wineCard: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    overflow: "hidden",
    borderColor: "black",
    borderWidth: 1,
    // marginHorizontal: 5,
    marginVertical: 5,
    // elevation: 2,
    backgroundColor: "white"
    // shadowColor: "black",
    // shadowOpacity: 0.26,
    // shadowRadius: 6
    // shadowOffset: { width: 0, height: 2 }
  },
  imagePart: {
    height: "60%",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: '7.5%'
  },
  bgImage: {
    width: "100%",
    // height: "80%",
    alignItems: "center",
    justifyContent: "space-evenly"
    // marginVertical: 20
  },
  wineImage: {
    height: "130%",
    width: "35%"
  },
  textContainer: {
    // backgroundColor: "red",
    height: '30%',
    paddingHorizontal: 15
  }
});

export default HomeScreenCard;
