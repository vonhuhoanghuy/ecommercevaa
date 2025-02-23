import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // const [countCart, setCountCart] = useState(0);
  useEffect(() => {
    const loadUserData = async () => {
      const storedUser = await AsyncStorage.getItem("user");
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser));
        } catch (error) {
          console.error("Error parsing user data from AsyncStorage:", error);
          await AsyncStorage.removeItem("user");
        }
      }
    };
    loadUserData();
  }, []);
  // const updateCartCount = (newCount) => {
  //   setCountCart(newCount);
  // };
  const updateUser = (dataUser) => {
    setUser(dataUser);
    AsyncStorage.setItem("user", JSON.stringify(dataUser));
  };

  const logout = () => {
    AsyncStorage.removeItem("access_token");
    AsyncStorage.removeItem("refresh_token");
    AsyncStorage.removeItem("user");
    updateUser(null);
    router.push("/home");
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout }}>
      {children}
    </UserContext.Provider>
  );
};
