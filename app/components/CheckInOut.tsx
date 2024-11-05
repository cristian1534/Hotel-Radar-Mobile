import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function CheckInOut({ close }: any) {
  const [isCheckedIn, setIsCheckedIn] = useState(false);
  const [isCheckedOut, setIsCheckedOut] = useState(false);

  const handleCheckIn = () => {
    setIsCheckedIn(true);
    setIsCheckedOut(false);
  };

  const handleCheckOut = () => {
    setIsCheckedIn(false);
    setIsCheckedOut(true);
  };

  return (
    <View className="flex-1 items-center justify-center space-y-4">
      <View className="flex-row justify-between w-full my-5">
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={handleCheckIn}
            className={`border-2 rounded-full p-2 mr-2 ${isCheckedIn ? "bg-green-400" : "bg-gray-200"}`}
          >
            {isCheckedIn && <View className="w-4 h-4 rounded-full bg-white" />}
          </TouchableOpacity>
          <Text className="text-brand-100 font-bold">Check In</Text>
        </View>
        <View className="flex-row items-center">
          <TouchableOpacity
            onPress={handleCheckOut}
            className={`border-2 rounded-full p-2 mr-2 ${isCheckedOut ? "bg-red-400" : "bg-gray-200"}`}
          >
            {isCheckedOut && <View className="w-4 h-4 rounded-full bg-white" />}
          </TouchableOpacity>
          <Text className="text-brand-100 font-bold">Check Out</Text>
        </View>
      </View>
      <TextInput
        placeholder="Guest Name"
        placeholderTextColor="#7E7CFD"
        className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
      />
      <TextInput
        placeholder="Reservation ID"
        placeholderTextColor="#7E7CFD"
        keyboardType="numeric"
        className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
      />
      <TextInput
        placeholder="Room Number"
        placeholderTextColor="#7E7CFD"
        className="border-b-2 border-brand-100 py-3 px-4 mb-3 text-brand-100"
      />
      <View className="flex-row justify-between w-full mt-5">
        <TouchableOpacity
          onPress={() => close()}
          className="bg-red-400 py-2 px-4 rounded-sm shadow-md shadow-red-200"
        >
          <Text className="text-white font-bold uppercase">Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => close()}
          className="bg-green-400 py-2 px-4 rounded-sm shadow-md shadow-red-200"
        >
          <Text className="text-white font-bold uppercase">Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
