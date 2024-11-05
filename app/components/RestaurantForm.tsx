import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Modal } from "react-native";
import { useNavigation } from "expo-router";

export default function RestaurantForm({ close }: any) {
  const navigation = useNavigation();
  const [guests, setGuests] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [time, setTime] = useState("");
  const [meal, setMeal] = useState("");
  const [isMealPickerVisible, setIsMealPickerVisible] = useState(false);

  const meals = ["Lunch", "Dinner"];

  return (
    <View className="flex-1 items-center justify-center">
      <Text className="font-bold text-center text-lg text-brand-300 uppercase mb-5">
        Restaurant Reservation
      </Text>
      <View className="w-5/6">
        <TextInput
          placeholder="Restaurant Name"
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
          value={restaurantName}
          onChangeText={setRestaurantName}
        />
        <TextInput
          placeholder="Number of Guests"
          placeholderTextColor="#7E7CFD"
          keyboardType="numeric"
          className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
          value={guests}
          onChangeText={setGuests}
        />
        <TextInput
          placeholder="Time (e.g., 7:00 PM)"
          placeholderTextColor="#7E7CFD"
          className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
          value={time}
          onChangeText={setTime}
        />

        <TouchableOpacity
          onPress={() => setIsMealPickerVisible(true)}
          className="border-b-2 border-brand-100 py-3 px-4 mb-3"
        >
          <Text className="text-brand-100">{meal ? meal : "Select Meal"}</Text>
        </TouchableOpacity>

        <Modal
          visible={isMealPickerVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setIsMealPickerVisible(false)}
        >
          <View className="bg-black p-5 rounded-lg min-w-full min-h-full flex justify-center">
            {meals.map((mealOption, index) => (
              <TouchableOpacity
                key={index}
                className="py-4 border-b border-brand-100"
                onPress={() => {
                  setMeal(mealOption);
                  setIsMealPickerVisible(false);
                }}
              >
                <Text className="text-lg text-brand-200 text-center">
                  {mealOption}
                </Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              className="py-2 px-4 mx-auto mt-10 bg-red-400 rounded-lg shadow-md shadow-red-200"
              onPress={() => setIsMealPickerVisible(false)}
            >
              <Text className="text-lg text-white text-center uppercase font-bold">
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <TouchableOpacity
          className="py-2 mt-10 bg-brand-200 rounded-lg shadow-md shadow-brand-200"
          onPress={() => close()}
        >
          <Text className="text-lg text-white text-center uppercase font-bold  px-5">
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
