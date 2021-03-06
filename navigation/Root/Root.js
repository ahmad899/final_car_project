import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../src/screens/LoginScreen/LoginScreen";
import RegistrationScreen from "../../src/screens/RegistrationScreen/RegistrationScreen";
import DriverInfoScreen from "../../src/screens/DriverInfoScreen/DriverInfoScreen";
import HomeStackNavigator from "../HomeStackNavigator/HomeStackNavigator";
import Profile from "../../src/screens/Profile/Profile";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import EditDriverInfo from "../../src/screens/EditDriverInfo/EditDriverInfo";
import BookRideScreen from "../../src/screens/BookRideScreen/BookRideScreen";
import RideChatScreen from "../../src/screens/RideChatScreen/RideChatScreen";
import EditMyRideScreen from "../../src/screens/EditMyRideScreen/EditMyRideScreen";
import UserProfileScreen from "../../src/screens/UserProfileScreen/UserProfileScreen";
import ConfirmScreen from "../../src/screens/ConfirmScreen/ConfirmScreen";
import ResetPass from "../../src/screens/ResetPass/ResetPass";
const Stack = createStackNavigator();

const Root = ({ location }) => {
  //changing header style for all screen
  const globalScreenOptions = {
    headerStyle: { backgroundColor: "#ad462f", height: 50 },
    headerTitleStyle: {
      color: "white",
    },
    headerTitleAlign: "center",
    headerTintColor: "white",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={globalScreenOptions}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={RegistrationScreen} />
        <Stack.Screen name="Driver" component={DriverInfoScreen} />
        <Stack.Screen name="ConfirmScreen" component={ConfirmScreen} />
        <Stack.Screen
          name="Home"
          component={HomeStackNavigator}
          initialParams={{ location }}
          options={({ navigation, route }) => ({
            headerTitle: getFocusedRouteNameFromRoute(route),
          })}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditDriverInfo" component={EditDriverInfo} />
        <Stack.Screen name="BookRide" component={BookRideScreen} />
        <Stack.Screen name="RideChatScreen" component={RideChatScreen} />
        <Stack.Screen name="EditMyRideScreen" component={EditMyRideScreen} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="ResetPass" component={ResetPass} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
