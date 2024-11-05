import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function BackButton() {
  const router = useRouter();
  return (
    <TouchableOpacity
      className="bg-brand-50 bg-opacity-50 p-2 rounded-full absolute z-10 top-5 left-5 flex items-center justify-center"
      onPress={() => router.back()}
    >
      <Ionicons name="chevron-back" size={20} color={"#7E7CFD"} />
    </TouchableOpacity>
  );
}
