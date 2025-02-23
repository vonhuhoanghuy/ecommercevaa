import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

const _layout = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="(tab)" />
          <Stack.Screen name="(auth)" />
        </Stack>
      </CartProvider>
    </UserProvider>
  );
};

export default _layout;
