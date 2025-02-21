import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { apiLink } from "../config/api";
import { useLocalSearchParams } from "expo-router";
const VerifyOTP = () => {
  const [verify, setVerify] = useState("");
  const router = useRouter();
  const searchParams = useLocalSearchParams();
  const email = searchParams.email; // Lấy email từ query string

  if (!email) {
    return <Text>Email không được cung cấp.</Text>;
  }

  const handleVerifyOTP = async () => {
    if (!verify) {
      Alert.alert("Lỗi", "Vui lòng nhập mã OTP.");
      return;
    }

    try {
      const response = await fetch(apiLink + "/api/otp/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          otpToken: verify,
        }),
      });

      const result = await response.json(); // Chuyển đổi phản hồi từ server thành JSON

      if (response.ok) {
        Alert.alert("Đăng nhập");
        router.push("/login"); // Chuyển hướng đến trang chính (hoặc trang khác)
      } else {
        Alert.alert("Lỗi", result.message || "Xác thực OTP thất bại.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      Alert.alert("Lỗi", "Có lỗi xảy ra khi xác thực OTP.");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nhập mã OTP"
        value={verify}
        onChangeText={setVerify}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Xác thực</Text>
      </TouchableOpacity>
    </View>
  );
};

export default VerifyOTP;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffe14c",
    alignItems: "center",
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
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
