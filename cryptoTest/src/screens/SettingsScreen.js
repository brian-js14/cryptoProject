import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen(props) {
  const { navigation } = props;

  const goToHome = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <Text>Bienvenido al SettingsScreen</Text>
      <Text>Bienvenido al SettingsScreen</Text>
      <Text>Bienvenido al SettingsScreen</Text>
      {/*<Button onPress={goToHome} title="Home" />*/}
    </SafeAreaView>
  );
}
