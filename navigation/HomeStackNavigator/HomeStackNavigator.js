import React, { useLayoutEffect } from "react";
import { Button, DevSettings, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import HomeScreen from "../../src/screens/HomeScreen/HomeScreen";
import Profile from "../../src/screens/Profile/Profile";
import Settings from "../../src/screens/Settings/Settings";
import { createStackNavigator } from "@react-navigation/stack";
import { EvilIcons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { auth } from "../../firebaseConfig/firebaseConfig";
import PostRideScreen from "../../src/screens/PostRideScreen/PostRideScreen";
import HistoryRideScreen from "../../src/screens/HistoryRideScreen/HistoryRideScreen";
import RideScreen from "../../src/screens/RideScreen/RideScreen";
import DrawerContent from "../../src/components/DrawerContent/DrawerContent";
import ViewRidesScreen from "../../src/screens/ViewRidesScreen/ViewRidesScreen";
import SettingStackNavigation from "../SettingStackNavigation/SettingStackNavigation";
const Drawer = createDrawerNavigator();

const HomeStackNavigator = ({ navigation }) => {
  //changing header layout
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        >
          <EvilIcons
            name="navicon"
            size={35}
            color="white"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  //custom drawer content

  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Ride" component={RideScreen} />
      <Drawer.Screen name="PostRide" component={PostRideScreen} />
      <Drawer.Screen name="History" component={HistoryRideScreen} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="ViewRides" component={ViewRidesScreen} />
    </Drawer.Navigator>
  );
};

export default HomeStackNavigator;
const styles = StyleSheet.create({
  header: {
    marginLeft: 5,
  },
});
