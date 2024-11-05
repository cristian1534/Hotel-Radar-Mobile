import WelcomeBanner from "./components/Welcome";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";

export default function RootBanner() {
  return (
    <ImageBackground 
    source={{ uri: "https://images.pexels.com/photos/2467558/pexels-photo-2467558.jpeg?auto=compress&cs=tinysrgb&w=600"}}
    style={styles.image}
    >
      <WelcomeBanner />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
})