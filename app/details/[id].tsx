import React from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import Animated, {
  interpolate,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollViewOffset,
} from "react-native-reanimated";
import { useRoute } from "@react-navigation/native";
import { useNavigation, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";
import NavigationButton from "../components/NavigationButton";
import HotelServices from "../components/HotelServices";

export default function DetailsHotel() {
  const route = useRoute();
  const { id }: any = route.params;
  const { width } = Dimensions.get("window");
  const IMG_HEIGHT = 300;
  const router = useRouter();
  const scrollRef = useAnimatedRef<Animated.ScrollView>();
  const scrollOffset = useScrollViewOffset(scrollRef);
  const navigation = useNavigation();

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1]
          ),
        },
      ],
    };
  });

  const imagesHotels = [
    {
      id: 1,
      name: "Century Hotel",
      image:
        "https://imgs.search.brave.com/n_nY2GQR1aj2jyV3uP5gXgYcZD5y8aK7phkrl8weJA4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by8z/ZC1yZW5kZXJpbmct/YmVhdXRpZnVsLWx1/eHVyeS1iZWRyb29t/LXN1aXRlLWhvdGVs/LXdpdGgtdHZfMTA1/NzYyLTIzMDEuanBn/P3NpemU9NjI2JmV4/dD1qcGc",
      city: "New York",
      address: "123 Century St, New York, NY 10001",
      email: "contact@centuryhotel.com",
    },
    {
      id: 2,
      name: "Hilton Hotel",
      image:
        "https://imgs.search.brave.com/vvIUKvLdFq8jXtd0F_llkwBzZ2a9fTx5sgvPQEaxjyo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNy8w/MS8xNC8xMi80OC9o/b3RlbC0xOTc5NDA2/XzY0MC5qcGc",
      city: "Los Angeles",
      address: "456 Hilton Ave, Los Angeles, CA 90001",
      email: "info@hiltonhotel.com",
    },
    {
      id: 3,
      name: "Royal Hotel",
      image:
        "https://imgs.search.brave.com/6HQJ4-0zEbkHtIr0h0assVlk8if9rmd8XbEif537eRM/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ob3Rl/bC1yb29tLTI3MjU0/MzkxLmpwZw",
      city: "Chicago",
      address: "789 Royal Blvd, Chicago, IL 60601",
      email: "reservations@royalhotel.com",
    },
    {
      id: 4,
      name: "Crown Hotel",
      image:
        "https://imgs.search.brave.com/2W90GDTrypkKv6RIP3US6tKY4HNHCdv7J3hN7F_3dO0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS1jZG4udHJpcGFk/dmlzb3IuY29tL21l/ZGlhL3Bob3RvLW8v/MGEvNzYvMmMvNTcv/aG90ZWwtZGUtbC1p/bWFnZS5qcGc",
      city: "San Francisco",
      address: "101 Crown St, San Francisco, CA 94101",
      email: "support@crownhotel.com",
    },
  ];

  if (!id) {
    return (
      <View>
        <Text>Invalid hotel ID</Text>
      </View>
    );
  }

  const hotelId = parseInt(id, 10);
  const detailsHotelSelected = imagesHotels.find((item) => item.id === hotelId);

  return (
    <View className="flex-1 bg-black">
      <BackButton />
      <TouchableOpacity className="bg-brand-50 bg-opacity-50 p-2 rounded-full absolute z-10 top-5 right-5">
        <Ionicons name="heart" size={20} color={"red"} />
      </TouchableOpacity>
      <Animated.ScrollView ref={scrollRef} showsVerticalScrollIndicator={false}>
        <View className="relative">
          <Animated.Image
            source={{ uri: detailsHotelSelected?.image }}
            style={[{ width: width, height: IMG_HEIGHT }, imageAnimatedStyle]}
          />
        </View>
        <View className="bg-black px-2 py-2 p-4 max-h-screen space-y-2">
          <View className="flex-row items-center justify-between">
            <Text className="text-3xl font-bold text-gray-500">
              {detailsHotelSelected?.name}
            </Text>
            <TouchableOpacity
              className="bg-brand-200 py-2 px-2 rounded-sm shadow-md shadow-brand-200"
              onPress={() => navigation.navigate("tours")}
            >
              <Text className="text-white font-bold">Special Tours</Text>
            </TouchableOpacity>
          </View>
          <Text className="text-lg font-bold text-gray-500">
            {detailsHotelSelected?.city}
          </Text>
          <View className="flex-row items-center space-x-2">
            <Ionicons name="location" size={20} color={"orange"} />
            <Text className="text-md font-bold text-gray-500">
              {detailsHotelSelected?.address}
            </Text>
          </View>
          <View className="flex-row items-center space-x-2">
            <Ionicons name="mail" size={20} color={"orange"} />
            <Text className="text-md font-bold text-gray-500">
              {detailsHotelSelected?.email}
            </Text>
          </View>
        </View>
        <View className="bg-black">
          <View className="mx-4 my-3 flex-row items-center space-x-2">
            <Ionicons name="bed" size={20} color={"orange"} />
            <Text className="text-gray-500 font-bold mr-7">
              Check available Rooms - Reserve
            </Text>
            <NavigationButton href={"rooms"} />
          </View>
          <View className="mx-4 my-3 flex-row items-center space-x-2">
            <Ionicons name="restaurant" size={20} color={"orange"} />
            <Text className="text-gray-500 font-bold mr-6">
              Get Information about Restaurant
            </Text>
            <NavigationButton href={"restaurants"} />
          </View>
          <View className="mx-4 my-3 flex-row items-center space-x-2">
            <Ionicons name="sparkles" size={20} color={"orange"} />
            <Text className="text-gray-500 font-bold">
              Explore our Spa - Concierge - Lounge
            </Text>
            <NavigationButton href={"sclounge"} />
          </View>
          <HotelServices />
        </View>
      </Animated.ScrollView>
    </View>
  );
}
