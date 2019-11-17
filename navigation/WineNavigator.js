import { Platform } from "react-native";

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import HomeScreen from "../screens/HomeScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import WineDetailScreen from "../screens/WineDetailScreen";

const WineNavigator = createStackNavigator(
  {
    HomeInfo: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: "abc"
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
      headerTitle: "fwine"
    }
  }
);

export default createAppContainer(WineNavigator);
