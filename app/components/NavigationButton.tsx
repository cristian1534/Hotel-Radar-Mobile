import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";

export default function NavigationButton({href}:any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(href)}>
      <View className="bg-brand-200 p-1 mx-3 rounded-full">
        <Ionicons name="chevron-forward" size={20} color={"#ffffff"}/>
      </View>
    </TouchableOpacity>
  );
}
