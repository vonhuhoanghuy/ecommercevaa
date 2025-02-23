import { StyleSheet, Text, View, Button } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { apiLink } from "../config/api";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    if (user?.id) {
      handShownInfo();
    }
  }, [user]);

  const handShownInfo = async () => {
    if (!user?.id) {
      alert("Vui lòng đăng nhập để xem thông tin");
      return;
    }
    const id = user.id;
    try {
      const response = await fetch(apiLink + `/api/user/get-details/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        alert("Không thể lấy thông tin tài khoản. Vui lòng thử lại sau.");
        return;
      }

      const data = await response.json();
      setUserDetails(data);
    } catch (error) {
      console.error(error);
      alert("Đã xảy ra lỗi. Vui lòng thử lại.");
    }
  };

  return (
    <View style={styles.container}>
      {userDetails ? (
        <>
          <Text>Tên: {userDetails.name}</Text>
          <Text>Email: {userDetails.email}</Text>
        </>
      ) : (
        <Text>Chưa đăng nhập</Text>
      )}
      <Button title="Lấy thông tin" onPress={handShownInfo} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#ffe14c",
    alignItems: "center",
  },
});
