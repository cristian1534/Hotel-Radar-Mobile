import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { styled } from "nativewind";
import { useNavigation } from "expo-router";
import { Avatar, Accessory } from "react-native-elements";

export default function profile() {
  const StyledTextInput = styled(TextInput);
  const navigation = useNavigation();

  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      <View className="flex flex-1 justify-center items-center mt-16 space-y-4">
        <View className="shadow-md shadow-brand-200">
          <Avatar
            rounded
            size={"xlarge"}
            source={{
              uri: "https://imgs.search.brave.com/cPGqvBh1NEYVsUhAf8tjNnbIi4YopwWA56NfPj8xhXw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1oYXBw/eS1tYWxlLXdpdGgt/YnJvYWQtc21pbGVf/MTc2NTMyLTgxNzUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
            }}
          />
          <Accessory size={30} color={"white"} />
        </View>
        <View className="w-5/6 mx-auto">
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
          <View className="flex-row justify-between mx-2">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="mt-10 mx-auto rounded-md"
            >
              <Text className="text-center text-lg text-white font-bold bg-brand-200 py-3 px-3 uppercase shadow-md shadow-brand-200">
                Update
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
