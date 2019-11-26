import React from 'react'

import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import OpeningScreen from "../screens/OpeningScreen";
import HomeScreen from "../screens/HomeScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import WineDetailScreen from "../screens/WineDetailScreen";

import HeaderTitle from '../components/HeaderTitle'
import CustomHeaderButton from "../components/HeaderButton"

import Colors from "../constants/Colors";

const WineNavigator = createStackNavigator(
  { Opening: {
    screen: OpeningScreen
  },
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
        elevation: 0,
        backgroundColor: Platform.OS === "android" ? Colors.wineColor : ""
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.wineColor
    }
  }
);

export default createAppContainer(WineNavigator);
