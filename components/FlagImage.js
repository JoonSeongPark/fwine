import React from "react";
import { Image, StyleSheet } from "react-native";

const FlagImage = props => {
  const countryFlagDict = [
    {
      countryName: "아르헨티나",
      flagLoc: require("../assets/images/flags/argentina.png")
    },
    {
      countryName: "호주",
      flagLoc: require("../assets/images/flags/australia.png")
    },
    {
      countryName: "오스트리아",
      flagLoc: require("../assets/images/flags/austria.png")
    },
    { countryName: "캐나다", flagLoc: require("../assets/images/flags/canada.png") },
    { countryName: "칠레", flagLoc: require("../assets/images/flags/chile.png")},
    { countryName: "중국", flagLoc: require("../assets/images/flags/china.png") },
    {
      countryName: "크로아티아",
      flagLoc: require("../assets/images/flags/croatia.png")
    },
    { countryName: "프랑스", flagLoc: require("../assets/images/flags/france.png" )},
    { countryName: "조지아", flagLoc: require("../assets/images/flags/georgia.png") },
    { countryName: "독일", flagLoc: require("../assets/images/flags/germany.png") },
    { countryName: "그리스", flagLoc: require("../assets/images/flags/greece.png") },
    { countryName: "헝가리", flagLoc: require("../assets/images/flags/hungary.png") },
    { countryName: "이탈리아", flagLoc: require("../assets/images/flags/italy.png") },
    { countryName: "일본", flagLoc: require("../assets/images/flags/japan.png") },
    { countryName: "몰도바", flagLoc: require("../assets/images/flags/moldova.png") },
    {
      countryName: "뉴질랜드",
      flagLoc: require("../assets/images/flags/new-zealand.png")
    },
    { countryName: "포르투갈", flagLoc: require("../assets/images/flags/portugal.png") },
    { countryName: "루마니아", flagLoc: require("../assets/images/flags/romania.png") },
    {
      countryName: "슬로베니아",
      flagLoc: require("../assets/images/flags/slovenia.png")
    },
    {
      countryName: "남아프리카",
      flagLoc: require("../assets/images/flags/south-africa.png")
    },
    {
      countryName: "대한민국",
      flagLoc: require("../assets/images/flags/south-korea.png")
    },
    { countryName: "스페인", flagLoc: require("../assets/images/flags/spain.png") },
    {
      countryName: "영국",
      flagLoc: require("../assets/images/flags/united-kingdom.png")
    },
    {
      countryName: "미국",
      flagLoc: require("../assets/images/flags/united-states.png")
    },
    { countryName: "우루과이", flagLoc: require("../assets/images/flags/uruguay.png") },
    { countryName: "기타국가", flagLoc: null }
  ];
  const matchedCountry = countryFlagDict.find(name => name.countryName === props.country)

  return <Image style={{...styles.flagImage, ...props.style}} source={matchedCountry.flagLoc} />;
};

const styles = StyleSheet.create({
  flagImage: {
    height: "100%",
    width: undefined,
    aspectRatio: 1/1,
    resizeMode: "contain"
  }
});

export default FlagImage;
