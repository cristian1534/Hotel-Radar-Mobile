import React from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "expo-router";
import Banner from "./components/Banner";

export default function signUp() {
  const StyledTextInput = styled(TextInput);
  const navigation = useNavigation();
  const bannerUrl =
    "https://st2.depositphotos.com/1006832/7529/i/600/depositphotos_75292127-stock-photo-illumintaed-modern-skyscrapers-and-skyline.jpg";
  const title = "";
  const caption = "";

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View className="flex justify-center items-center mb-5 rounded-">
        <Banner bannerUrl={bannerUrl} title={title} caption={caption} />
      </View>

      <View className="w-5/6">
        <StyledTextInput
          placeholder="Name"
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <StyledTextInput
          placeholder="Telephone"
          placeholderTextColor="#7E7CFD"
          keyboardType="numeric"
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <StyledTextInput
          placeholder="Email"
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <StyledTextInput
          placeholder="Password"
          placeholderTextColor="#7E7CFD"
          secureTextEntry={true}
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View className="bg-brand-200 rounded-sm py-2 px-3 my-6 flex-row flex-start mr-auto shadow-md shadow-brand-200">
              <Text className="text-white text-center text-lg font-bold uppercase">
                Sign In
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("home")}>
          <Text className="text-center text-lg text-white font-bold bg-brand-200 py-3 px-3 rounded-lg uppercase shadow-md shadow-brand-200">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
