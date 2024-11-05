import { Tabs } from "expo-router";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "black",
          borderTopWidth: 0,
          padding: 0,
          height: 100,
        },
        tabBarActiveTintColor: "#524FFD",
        tabBarInactiveTintColor: "#A6A4FE",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#ffffff",
                padding: 8,
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="home" size={size} color={color} />
            </View>
          ),
          tabBarLabel: "",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#ffffff",
                padding: 8,
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="person" size={size} color={color} />
            </View>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View
              style={{
                backgroundColor: "#ffffff",
                padding: 8,
                height: 40,
                borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="settings" size={size} color={color} />
            </View>
          ),
          tabBarLabel: "",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
