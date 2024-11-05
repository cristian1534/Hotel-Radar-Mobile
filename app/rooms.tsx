import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useNavigation } from "expo-router";
import Loader from "./components/Loader";

const roomsImages = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/LWVgfvgOeVP_WSRGA7Agu9ejocFYq__BfrICHU3mtig/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjY2NjU3OTc3Mzkt/MTY3NGRlN2E0MjFh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OFlt/VmtjbTl2Ylh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
    type: "Suite",
    roomNumber: 123,
    price: 100,
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/EQmz-FMIUA6kFurW-keJFiRh9s-YvmoiO6TpA1YpYBQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTg5Mjg2MzYxMzUt/ZDE0NjAwNmZmNGJl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRCOGZH/SmxaSEp2YjIxOFpX/NThNSHg4TUh4OGZE/QT0",
    type: "Standard",
    roomNumber: 215,
    price: 150,
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/XlhLtfOVvXgqmBcRk0PF1IR_SIvTHWi8Q0yyVSXY4uI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzE1MDg2MDE4OTEt/Y2E1ZTdhNzEzODU5/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/SmxaSEp2YjIxOFpX/NThNSHg4TUh4OGZE/QT0",
    type: "Deluxe",
    roomNumber: 305,
    price: 120,
  },
  {
    id: 4,
    image:
      "https://imgs.search.brave.com/rrmZNF-eA7iOmsEc4M7q-auK6H79YDi5QtR0gxE2Mdc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdC5o/emNkbi5jb20vZmlt/Z3MvMWY2MTI4MmQw/MTdiMThkMF8yNzQx/LXczNjAtaDM2MC1i/MC1wMC0tLmpwZw",
    type: "Suite",
    roomNumber: 224,
    price: 140,
  },
];

export default function Rooms() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <View className="mx-auto mt-10 shadow shadow-slate-400 space-y-2">
        <Image
          source={{ uri: item.image }}
          width={180}
          height={150}
          className="mx-3 my-3 rounded-md mt-10"
        />
        <Text className="text-center text-gray-500">Style: {item.type}</Text>
        <Text className="text-center text-gray-500">
          Room Number: {item.roomNumber}
        </Text>
        <Text className="text-center text-gray-500">
          Price per Day: <Text className="text-red-500">USD {item.price}</Text>
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-black">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <FlatList
            data={roomsImages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            numColumns={2}
          />
          <Animated.View entering={SlideInDown.delay(300)}>
            <TouchableOpacity
              onPress={() => navigation.navigate("reservation")}
              className="mb-3"
            >
              <View className="bg-brand-200 rounded-md py-2 px-2 mx-8 mt-10">
                <Text className="text-brand-50 text-lg text-center">
                  Book Now
                </Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
}
