import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import BackButton from "./components/BackButton";
import Animated, { SlideInDown } from "react-native-reanimated";
import { useNavigation } from "expo-router";
import RestaurantForm from "./components/RestaurantForm";
import CustomModal from "./components/Modal";
import Loader from "./components/Loader";

const restaurantImages = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/jSSYqc6vgo31UGLGcqPFpr87480EBz3BvSeXiaBs5eI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/ZXN0YXVyYW50LWlu/dGVyaW9yXzExMjct/MzM5NC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw",
    description: "Enjoy fine dining with a panoramic view of the city.",
    scheduleMondayToFriday: "7:00 AM - 10:00 PM",
    scheduleSaturdayToSunday: "8:00 AM - 11:00 PM",
    linkToMenu: "https://example.com/menu1",
    contactNumber: "+1 234 567 8900",
    email: "contact@restaurant1.com",
    locationInsideOfHotel: "Lobby Level",
    promotions: "Happy Hour: 5:00 PM - 7:00 PM (Monday to Friday)",
    eventsInformation: "Live Jazz on Fridays from 8:00 PM",
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/PKj11qyG68i9Ylml9ubOptbC8m-cvhR7muDXoIBkAQo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWM0LmRlcG9zaXRw/aG90b3MuY29tLzEw/MDcwNjQvMzE1L2kv/NDUwL2RlcG9zaXRw/aG90b3NfMzE1Mzg2/NS1zdG9jay1waG90/by10YWJsZS1zZXJ2/ZWQtaW4tdGhlLXJl/c3RhdXJhbnQuanBn",
    description: "A cozy spot for a casual meal with family and friends.",
    scheduleMondayToFriday: "6:30 AM - 9:00 PM",
    scheduleSaturdayToSunday: "7:30 AM - 10:00 PM",
    linkToMenu: "https://example.com/menu2",
    contactNumber: "+1 234 567 8901",
    email: "contact@restaurant2.com",
    locationInsideOfHotel: "Second Floor",
    promotions: "Kids Eat Free: Sundays from 5:00 PM - 7:00 PM",
    eventsInformation: "Trivia Night: Every Wednesday at 7:00 PM",
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/KcugPf5X59JoKoo7kchTPe857GPxfO8_1TWSTbclBYA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9hcmFmZWQtcmVz/dGF1cmFudC13aXRo/LWxhcmdlLXdpbmRv/dy1iYXItd2l0aC1s/b3Qtc2VhdGluZy1n/ZW5lcmF0aXZlLWFp/Xzk3NDUzMy03MDUy/LmpwZz9zaXplPTYy/NiZleHQ9anBn",
    description: "Experience gourmet dishes crafted by world-renowned chefs.",
    scheduleMondayToFriday: "12:00 PM - 11:00 PM",
    scheduleSaturdayToSunday: "12:00 PM - 12:00 AM",
    linkToMenu: "https://example.com/menu3",
    contactNumber: "+1 234 567 8902",
    email: "contact@restaurant3.com",
    locationInsideOfHotel: "Rooftop",
    promotions: "Wine Tasting: Thursdays from 6:00 PM - 8:00 PM",
    eventsInformation: "Cooking Classes: Every Saturday at 3:00 PM",
  },
  {
    id: 4,
    image:
      "https://imgs.search.brave.com/e0tYiEKch7IC_6D7ya4B_KMObExhzuuNEkqehEw6Zr8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE1/OTk5MjAzOS9waG90/by9jb3p5LXJlc3Rh/dXJhbnQtZm9yLWdh/dGhlcmluZy13aXRo/LWZyaWVuZHMuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPUZU/bldNYjJKOWxJN002/UTA2eGxDREJ3RHEy/OTFQYk5lVV9Zd2Nu/ekg5ZjA9",
    description: "Dine in style with an elegant and sophisticated ambiance.",
    scheduleMondayToFriday: "5:00 PM - 11:00 PM",
    scheduleSaturdayToSunday: "5:00 PM - 12:00 AM",
    linkToMenu: "https://example.com/menu4",
    contactNumber: "+1 234 567 8903",
    email: "contact@restaurant4.com",
    locationInsideOfHotel: "Ground Floor",
    promotions: "Early Bird Special: 5:00 PM - 6:00 PM (Daily)",
    eventsInformation: "Live Piano Music: Fridays and Saturdays at 7:00 PM",
  },
];

export default function RestaurantsInfo() {
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const buttonTitle = "VISIT US";

  const renderItem = ({ item }: any) => {
    return (
      <View className="mt-3 shadow shadow-slate-400 p-4 m-2 rounded-lg bg-black space-y-2">
        <Image
          source={{ uri: item.image }}
          width={350}
          height={150}
          className="mx-auto my-3 rounded-md"
        />
        <Text className="text-start text-gray-500 mx-2">
          Description: <Text>{item.description}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Schedule (Mon-Fri): <Text>{item.scheduleMondayToFriday}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Schedule (Sat-Sun): <Text>{item.scheduleSaturdayToSunday}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Contact: <Text>{item.contactNumber}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Email: <Text>{item.email}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Location: <Text>{item.locationInsideOfHotel}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Promotions: <Text>{item.promotions}</Text>
        </Text>
        <Text className="text-start text-gray-500 mx-2">
          Events: <Text>{item.eventsInformation}</Text>
        </Text>
        <Text className="text-center text-brand-300 font-bold underline mt-2">
          <Text onPress={() => {}}>View Menu</Text>
        </Text>
      </View>
    );
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <View className="flex-1 bg-black">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <BackButton />
          <FlatList
            data={restaurantImages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
          />
          <Animated.View entering={SlideInDown.delay(300)}>
            <TouchableOpacity className="mb-3">
              <View className="bg-brand-200 rounded-md py-1 px-2 mx-8 mt-10">
                <CustomModal
                  children={<RestaurantForm />}
                  buttonTitle={buttonTitle}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        </>
      )}
    </View>
  );
}
