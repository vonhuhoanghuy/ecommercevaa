import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { apiLink } from "../config/api";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const showMessage = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("Thông báo", message);
    }
  };

  const handleLogin = async () => {
    if (!email || !password) {
      showMessage("Vui lòng nhập email và mật khẩu!");
      return;
    }

    try {
      const response = await fetch(apiLink + "/api/user/sign-in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });

      const result = await response.json();
      console.log(result);
      if (response.ok) {
        router.push(`/home`);
      } else {
        showMessage("Lỗi", result.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      console.error("Error:", error);
      showMessage("Lỗi", "Không thể kết nối đến máy chủ.");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.title}>Đăng nhập</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Đăng nhập</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("signUp")}>
        <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffe14c",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFD700",
    fontSize: 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "black",
    fontSize: 16,
    marginBottom: 200,
  },
  logo: {
    paddingBottom: "100",
    alignSelf: "center",
    width: 100,
    height: 100,
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
  },
});
