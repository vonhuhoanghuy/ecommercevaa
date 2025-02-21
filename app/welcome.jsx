import { StyleSheet, Text, View, Image } from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("(tab)/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.welcomeImage}
        source={require("../assets/images/h-bg.png")}
      />
      <View>
        <Text>hello</Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffd500",
  },
  welcomeImage: {
    alignSelf: "center",
  },
});
