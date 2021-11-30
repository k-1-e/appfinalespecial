import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import MainStack from "./src/navegacion/MainStack";


export default function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
