import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black", // Màu nền của Tabs
          // borderTopWidth: 1,
          // borderTopColor: 'black', // Màu viền trên Tabs
        },
        tabBarActiveTintColor: "#ffd500", // Màu khi được chọn
        tabBarInactiveTintColor: "#ebd8af", // Màu khi không được chọn
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="appstore-o" size={size} color={color} />
          ),
          tabBarLabel: "Danh mục",
        }}
      />
      <Tabs.Screen
        name="newPost"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="television-play"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: "Tin tức",
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="shopping-cart" size={size} color={color} />
          ),
          tabBarLabel: "Giỏ hàng",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-o" size={size} color={color} />
          ),
          tabBarLabel: "Tôi",
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
