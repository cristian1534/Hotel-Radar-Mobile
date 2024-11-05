import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { Link, useNavigation } from "expo-router";
import Banner from "./components/Banner";

export default function signIn() {
  const StyledTextInput = styled(TextInput);
  const navigation = useNavigation();

  const handleSignIn = () => {
    navigation.navigate("home");
  };

  const bannerUrl =
    "https://st.depositphotos.com/1035350/2650/i/450/depositphotos_26507181-stock-photo-macau-china.jpg";
  const title = "";
  const caption = "";

  return (
    <View className="flex-1 p-8 bg-black">
      <View className="flex justify-center items-center mb-5 rounded-">
        <Banner bannerUrl={bannerUrl} title={title} caption={caption} />
      </View>
      <View className="flex space-y-6">
        <StyledTextInput
          placeholder="Username"
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-200 py-2 px-4  text-brand-300"
          style={{ fontFamily: "Roboto-Thin" }}
        />
        <StyledTextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-200 py-2 px-4 mb-6 text-brand-300"
          style={{ fontFamily: "Roboto-Thin" }}
        />
        <View className="flex-row justify-between my-10">
          <Link href={"signUp"}>
            <View className="bg-brand-200 rounded-sm py-2 px-3 my-10 shadow-md shadow-brand-200">
              <Text
                className="text-white text-center text-lg font-bold uppercase"
                style={{ fontFamily: "Roboto-Thin" }}
              >
                Sign Up
              </Text>
            </View>
          </Link>
          <TouchableOpacity>
            <Text
              className="text-brand-300 text-center text-lg"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Forgot Password?
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => handleSignIn()}
        className="bg-brand-200 rounded-sm py-3 shadow-md shadow-brand-200"
      >
        <Text
          className="text-white text-center text-lg font-bold uppercase"
          style={{ fontFamily: "Roboto-Thin" }}
        >
          Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
