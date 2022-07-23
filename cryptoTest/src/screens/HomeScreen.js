import React from "react";
import { View, Text, Button, SafeAreaView } from "react-native";

export default function HomeScreen(props) {
  const { navigation } = props;

  const goToSettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Bienvenido al Home</Text>
      <Text>Bienvenido al Home</Text>
      <Text>Bienvenido al Home</Text>
      <Text>Bienvenido al Home</Text>
      <Text>Bienvenido al Home</Text>
      {/*<Button onPress={goToSettings} title="Ir a Ajustes" />*/}
    </SafeAreaView>
  );
}
