import { useNavigation, useRouter } from "expo-router";
import React, { useState } from "react";
import { use } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { apiLink } from "../config/api";
import { push } from "expo-router/build/global-state/routing";

const signUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhonenumber] = useState("");

  const navigate = useNavigation("");
  const router = useRouter();

  const handleSignUp = async () => {
    // Kiểm tra xem các trường có trống không
    if (!fullName || !email || !password || !confirmPassword || !phone) {
      Alert.alert("Lỗi", "Vui lòng điền đầy đủ thông tin.");
      return;
    }

    // Kiểm tra mật khẩu và xác thực mật khẩu có khớp không
    if (password !== confirmPassword) {
      Alert.alert("Lỗi", "Mật khẩu và xác thực mật khẩu không khớp.");
      return;
    }

    // Tạo đối tượng dữ liệu để gửi

    try {
      const response = await fetch(apiLink + "/api/user/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email: email,
          password: password,
          confirmPassword: confirmPassword,
          phone: phone,
        }), // Gửi dữ liệu dưới dạng JSON
      });

      const result = await response.json(); // Lấy phản hồi từ server
      if (response.ok) {
        router.push(`/verifyOTP?email=${encodeURIComponent(email)}`);
      } else {
        Alert.alert(
          "Lỗi",
          result.message || "Đã xảy ra lỗi khi tạo tài khoản."
        );
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Lỗi", "Không thể kết nối đến máy chủ.");
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />
      <Text style={styles.title}>Create an account</Text>
      <TextInput
        style={styles.input}
        placeholder="Họ và tên"
        value={fullName}
        onChangeText={setFullName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Mật khẩu"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Xác thực mật khẩu"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={setPhonenumber}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Create an Account</Text>
      </TouchableOpacity>
      <Text style={styles.termsText}>
        By signing up you agree to our Terms, Privacy Policy, and Cookie Use
      </Text>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <Text style={styles.socialButtonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push("login")}>
        <Text style={styles.loginText}>Already have an account? Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default signUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffe14c",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
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
    backgroundColor: "#000", // Màu nền đen
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#ffd500",
    fontSize: 16,
  },
  termsText: {
    textAlign: "center",
    marginBottom: 20,
  },
  socialButton: {
    width: "100%",
    backgroundColor: "green",
    padding: 15,
    alignItems: "center",
    marginBottom: 10,
    textAlign: "center",
  },
  socialButtonText: {
    width: "100%",
    color: "white",
    fontSize: 16,
  },
  loginText: {
    textAlign: "center",
    color: "blue",
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
    alignItems: "center",
  },
});
