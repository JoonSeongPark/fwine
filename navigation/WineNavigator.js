import React from 'react'

import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import WineDetailScreen from "../screens/WineDetailScreen";

import HeaderTitle from '../components/headerTitle'

import Colors from "../constants/Colors";

const WineNavigator = createStackNavigator(
  {
    HomeInfo: {
      screen: HomeScreen,
      navigationOptions: {

      }
    },
    WineSearchResult: {
      screen: SearchResultScreen
    },
    WineDetail: {
      screen: WineDetailScreen
    }
  },
  {
    defaultNavigationOptions: {
      headerTitle: <HeaderTitle />,
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.wineColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.wineColor
    }
  }
);

export default createAppContainer(WineNavigator);
