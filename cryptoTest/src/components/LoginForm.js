import React from "react";
import { TextInput, Button, Text, View } from "react-native";

export default function LoginForm() {
  return (
    <View>
      <TextInput placeholder="Username" />
      <TextInput placeholder="Password" />
      <Button title="Enviar" onPress={() => console.log("Esto es un test")} />
    </View>
  );
}
