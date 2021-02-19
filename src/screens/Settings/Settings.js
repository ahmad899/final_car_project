import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.push("Profile")}
        >
          <MaterialIcons
            name="account-circle"
            size={50}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.rowText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.push("Profile")}
        >
          <MaterialIcons
            name="account-circle"
            size={50}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.rowText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.push("Profile")}
        >
          <MaterialIcons
            name="account-circle"
            size={50}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.rowText}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.row}
          onPress={() => navigation.push("Profile")}
        >
          <MaterialIcons
            name="account-circle"
            size={50}
            color="white"
            style={{ marginHorizontal: 10 }}
          />
          <Text style={styles.rowText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;
