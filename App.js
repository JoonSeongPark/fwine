import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { enableScreens } from "react-native-screens";

import WineNavigator from "./navigation/WineNavigator";



enableScreens;

const fetchFonts = () => {
  return Font.loadAsync({
    'vagrounded': require("./assets/fonts/vagrounded-regular.ttf"),
    "vagrounded-bold": require("./assets/fonts/vagrounded-bold.ttf"),
    "kakao": require("./assets/fonts/KakaoRegular.ttf")
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }


  return <WineNavigator />;
}

const styles = StyleSheet.create({});
