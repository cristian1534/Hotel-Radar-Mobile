import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Calendar } from "react-native-calendars";
import { styled } from "nativewind";
import BackButton from "./components/BackButton";
import { useRouter } from "expo-router";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

export default function CalendarReservation() {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const router = useRouter();

  const onDayPress = (day: any) => {
    if (!fromDate) {
      setFromDate(day.dateString);
    } else if (!toDate) {
      setToDate(day.dateString);
    } else {
      setFromDate(day.dateString);
      setToDate("");
    }
  };

  return (
    <View className="flex-1 bg-black">
      <BackButton />
      <StyledView className="items-center justify-center mt-5">
        <View>
          <StyledTextInput
            placeholder="Room Number"
            keyboardType="numeric"
            placeholderTextColor="#9CA3AF"
            className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
          />
          <StyledTextInput
            placeholder="Quantity of Guests"
            keyboardType="numeric"
            placeholderTextColor="#9CA3AF"
            className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
          />
        </View>
        <View className="shadow-md py-5 shadow-slate-400">
          <Calendar
            onDayPress={onDayPress}
            markedDates={{
              [fromDate]: {
                selected: true,
                marked: true,
                selectedColor: "#A6A4FE",
              },
              [toDate]: {
                selected: true,
                marked: true,
                selectedColor: "#A6A4FE",
              },
            }}
            theme={{
              backgroundColor: "white",
              calendarBackground: "black",
              textSectionTitleColor: "#9CA3AF",
              selectedDayBackgroundColor: "#3B82F6",
              selectedDayTextColor: "white",
              todayTextColor: "#3B82F6",
              dayTextColor: "#374151",
              textDisabledColor: "#D1D5DB",
              arrowColor: "#A6A4FE",
              monthTextColor: "#9CA3AF",
              indicatorColor: "blue",
            }}
            style={{ borderWidth: 1, borderColor: "#E5E7EB", borderRadius: 10 }}
          />
        </View>
      </StyledView>
      {!fromDate && !toDate ? (
        <Text className="text-red-500 text-center py-20 text-lg uppercase">
          Date must be selected
        </Text>
      ) : (
        <View className="py-8 space-y-4">
          <Text className="text-brand-200 text-lg font-bold mx-auto">
            FROM: <Text className="text-green-500"> {fromDate}</Text>
          </Text>
          <Text className="text-brand-200 text-lg font-bold mx-auto">
            TO:
            <Text className="text-green-500">  {toDate}</Text>
          </Text>
        </View>
      )}

      <View className="flex-row justify-between mx-20">
        {fromDate && toDate && (
          <>
            <TouchableOpacity
              onPress={() => {
                setFromDate("");
                setToDate("");
              }}
            >
              <View className="bg-red-400 py-3 px-6 rounded-md">
                <Text className="text-brand-50 font-bold uppercase">
                  Cancel
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.back()}>
              <View className="bg-green-400 py-3 px-5 rounded-md">
                <Text className="text-brand-50 font-bold uppercase">
                  Confirm
                </Text>
              </View>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
}
