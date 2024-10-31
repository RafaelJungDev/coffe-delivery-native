import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ShoppingProvider } from "@/context/ShoppingContext";

const ShopLayout = () => {
  return (
    <ShoppingProvider>
      <Stack>
        <Stack.Screen
          name="coffe"
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack>

      <StatusBar backgroundColor="#272221" style="light" />
    </ShoppingProvider>
  );
};

export default ShopLayout;
