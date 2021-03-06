import React, { useLayoutEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
const ViewRideRow = ({ data, id }) => {
  const route = useRoute();
  const [isFromHistory, setIsFromHistory] = useState(true);
  const currentUserType = route.params.user.userType;
  const userName = route.params.user.firstName;
  const navigation = useNavigation();
  const rideInfo = data.rideInfo;
  const userInfo = data.rideInfo.user;
  const fireBaseTime = new Date(
    rideInfo.date.seconds * 1000 + rideInfo.date.nanoseconds / 1000000
  );
  const date = fireBaseTime.toDateString();
  const time = fireBaseTime.toLocaleTimeString();

  useLayoutEffect(() => {
    if (route.name == "History") {
      setIsFromHistory(true);
    } else {
      setIsFromHistory(false);
    }
  }, [route]);
  const onBookRide = () => {
    navigation.push("BookRide", { data, currentUserType, userName });
  };
  
  return !isFromHistory ? (
    <TouchableOpacity style={styles.container} onPress={onBookRide}>
      <View style={styles.topContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="user" size={25} color="black" />
          <Text style={styles.text}>
            {userInfo.firstName} {userInfo.secondName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={25}
            color="brown"
          />
          <Text style={styles.text}>From: {rideInfo.originName}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={25}
            color="black"
          />
          <Text style={styles.text}>Distance: {rideInfo.distance} km</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Fontisto name="date" size={25} color="black" />
          <Text style={styles.text}>Date: {date}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomtext}>{userInfo.userType}</Text>
        <Text style={styles.bottomtext}>To :{rideInfo.destinationName}</Text>
        <Text style={styles.bottomtext}>
          Time: {Math.round(rideInfo.duration)} min
        </Text>
        <Text style={styles.bottomtext}>Clock: {time}</Text>
      </View>
    </TouchableOpacity>
  ) : (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <EvilIcons name="user" size={25} color="black" />
          <Text style={styles.text}>
            {userInfo.firstName} {userInfo.secondName}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="map-marker-outline"
            size={25}
            color="brown"
          />
          <Text style={styles.text}>From: {rideInfo.originName}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="map-marker-distance"
            size={25}
            color="black"
          />
          <Text style={styles.text}>Distance: {rideInfo.distance} km</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Fontisto name="date" size={25} color="black" />
          <Text style={styles.text}>Date: {date}</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.bottomtext}>{userInfo.userType}</Text>
        <Text style={styles.bottomtext}>To :{rideInfo.destinationName}</Text>
        <Text style={styles.bottomtext}>
          Time: {Math.round(rideInfo.duration)} min
        </Text>
        <Text style={styles.bottomtext}>Clock: {time}</Text>
      </View>
    </View>
  );
};

export default ViewRideRow;
