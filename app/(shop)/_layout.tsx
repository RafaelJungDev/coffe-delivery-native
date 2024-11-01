import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const ShopLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="coffe"
          options={{ headerShown: false }}
        ></Stack.Screen>
        <Stack.Screen
          name="finalizado"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>

      <StatusBar backgroundColor="#272221" style="light" />
    </>
  );
};

export default ShopLayout;
