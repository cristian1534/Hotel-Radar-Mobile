import { View, Text, Image, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import Loader from "./components/Loader";

const toursOptions = [
  {
    id: 1,
    agency: "Luxury Tour",
    description: "Reach the top of the oldest city.",
    name: "Walking to the mountain",
    image:
      "https://imgs.search.brave.com/PxjI6bTuWXdrE0lcZQ57jzgsi-CSFVRXXRd-XhdubLE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NzU1NzA3MjQ1MDUt/YmYxOTczNmI3Zjdj/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRSOGZH/VjRjR1ZrYVhScGIy/NThaVzU4TUh4OE1I/eDhmREE9",
    price: 1000,
    duration: 45,
  },
  {
    id: 2,
    agency: "Classic Tour",
    description: "Walk through the forest and mountains.",
    name: "Explore the classic town",
    image:
      "https://imgs.search.brave.com/RuWBjq5krHrjCDfrzoqY8lBaswapdPL8Vk-qvHU0VrQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/MjY3NzI2NjIwMDAt/M2Y4OGYxMDQwNWZm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tkh4OFpY/aHdaV1JwZEdsdmJu/eGxibnd3Zkh3d2ZI/eDhNQT09",
    price: 2000,
    duration: 30,
  },
];

export default function ToursAgency() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const renderItem = ({ item }: any) => {
    return (
      <View className="w-full p-4 shadow shadow-slate-400 space-y-2 bg-black rounded-lg my-2">
        <Text className="text-gray-500 text-2xl font-bold uppercase text-center mt-4">
          {item.agency}
        </Text>
        <Text className="text-gray-500 text-lg text-center mt-1">
          {item.description}
        </Text>
        <Image
          source={{ uri: item.image }}
          style={{ width: '100%', height: 150 }}
          className="mx-auto my-3 rounded-md"
        />
        <Text className="text-center text-gray-500">Name: {item.name}</Text>
        <Text className="text-center text-gray-500">Price: ${item.price}</Text>
        <Text className="text-center text-gray-500">
          Duration: {item.duration} mins
        </Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-black p-4">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <FlatList
            data={toursOptions}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        </>
      )}
    </View>
  );
}
