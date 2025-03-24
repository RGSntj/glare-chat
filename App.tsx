import React from "react";

import { StatusBar } from "react-native";

import "react-native-get-random-values";

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_700Bold,
  Rubik_600SemiBold,
  useFonts,
} from "@expo-google-fonts/rubik";

import {
  Kanit_400Regular,
  Kanit_500Medium,
  Kanit_800ExtraBold,
} from "@expo-google-fonts/kanit";

import {
  Overpass_800ExtraBold,
  Overpass_400Regular,
} from "@expo-google-fonts/overpass";

import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/routes";
import { Loading } from "./src/components/loading";

export default function App() {
  const [isLoading] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_700Bold,
    Rubik_600SemiBold,
    Kanit_400Regular,
    Kanit_500Medium,
    Overpass_800ExtraBold,
    Overpass_400Regular,
  });

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <NavigationContainer>
      <Navigation />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
    </NavigationContainer>
  );
}
