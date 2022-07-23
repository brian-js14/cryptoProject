import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
//import NavigationStack from "./src/navigation/NavigationStack";
//import NavigationTap from "./src/navigation/NavigationTap";
import NavigationDrawer from "./src/navigation/NavigationDrawer";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationDrawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
