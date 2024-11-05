import {
  ScrollView,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import FavoritesRooms from "../components/FavoritesRooms";
import { Link, useRouter } from "expo-router";
import { Avatar, Divider } from "react-native-elements";
import CustomModal from "../components/Modal";
import CheckInOut from "../components/CheckInOut";
import Subscribe from "../components/Subscribe";
import FeedbackForm from "../components/FeedbackForm";
import Loader from "../components/Loader";

const imagesHotels = [
  {
    id: 1,
    name: "Century Hotel",
    image:
      "https://imgs.search.brave.com/lE6p5F05iEr7SiztRGm0QJtUuTlI9dtV-P35UkHkw-M/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy82/LzZkL1lhb19DaXR5/X0hhbGwuanBn",
    city: "New York",
    address: "123 Century St, New York, NY 10001",
    email: "contact@centuryhotel.com",
  },
  {
    id: 2,
    name: "Hilton Hotel",
    image:
      "https://imgs.search.brave.com/8miZDtkwLgpi-rRmMokMmx6SEZIL1CmdAU821gow2Q8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9l/L2VkL0hpbHRvbl9I/b3RlbF8tLV9OYXNz/YXVfQmF5LF9UZXhh/cy5qcGc",
    city: "Los Angeles",
    address: "456 Hilton Ave, Los Angeles, CA 90001",
    email: "info@hiltonhotel.com",
  },
  {
    id: 3,
    name: "Royal Hotel",
    image:
      "https://imgs.search.brave.com/_AKbmXxoYZZ_ImclEDi7DD-Yt_H_AiqMxVzGIVxJI2w/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/NjQyOTkwL3Bob3Rv/L2dlbmVyaWMtaG90/ZWwtYnVpbGRpbmcu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PXhIRVM5a0xCSFFx/NGRqVkx4Y2NPUGl2/SXdwWnRvYkhJZ0RW/NWJodldDZ2c9",
    city: "Chicago",
    address: "789 Royal Blvd, Chicago, IL 60601",
    email: "reservations@royalhotel.com",
  },
  {
    id: 4,
    name: "Crown Hotel",
    image:
      "https://imgs.search.brave.com/XXJY5xtYPSByLSUWNDvkLDV6kb3rPKH3dP1PgXUmUGI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZS10Yy5nYWxheHku/dGYvd2lqcGVnLTh0/MGpoN2xhNjA3NWJr/aHc5OXRsbGJ0ZDYv/aG9tZS1tZWxib3Vy/bmVfcG9ydHJhaXQu/anBnP3JvdGF0ZT0w/JmNyb3A9MjQ4LDE5/Myw3NTUsMTAwNiZ3/aWR0aD0xMDAw",
    city: "San Francisco",
    address: "101 Crown St, San Francisco, CA 94101",
    email: "support@crownhotel.com",
  },
];
const buttonTitle = "GET CODE";

const bannerUrl =
  "https://imgs.search.brave.com/cqTQN4iwVu3kSS49RqA8NAtmQwv4v7kBUwsVAYscNUw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE0/OTUzNjUyMDA0Nzkt/YzRlZDFkMzVlMWFh/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZH/aHZkR1ZzYzN4bGJu/d3dmSHd3Zkh4OE1B/PT0";
const title = "Discovery Luxury";
const caption = "Book Your Dream Stay Today";

const renderItem = ({ item }: any) => {
  return (
    <View className="bg-black shadow-sm shadow-brand-50 mb-5 mt-3">
      <Link href={`/details/${item.id}`} asChild>
        <TouchableOpacity className="px-3 py-3 ml-2 mt-5 rounded-md flex justify-center items-center shadow shadow-slate-400">
          <Image
            source={{ uri: item.image }}
            width={250}
            height={200}
            className="rounded-md"
          />
          <View className="my-2">
            <Text
              className="text-gray-500 text-center font-bold text-lg uppercase"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              {item.name}
            </Text>
            <Text
              className="text-gray-500 text-center text-sm"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              {item.city}
            </Text>
            <Text
              className="text-gray-500 text-center text-sm"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              {item.address}
            </Text>
            <Text
              className="text-gray-500 text-center text-sm"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              {item.email}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default function Home() {
  const router = useRouter();
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const scrollToIndex = (index: number) => {
    flatListRef.current?.scrollToIndex({ animated: true, index });
    setCurrentIndex(index);
  };

  const handleNext = () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex < imagesHotels.length) {
      scrollToIndex(nextIndex);
    }
  };

  const handlePrev = () => {
    const prevIndex = currentIndex - 1;
    if (prevIndex >= 0) {
      scrollToIndex(prevIndex);
    }
  };

  return (
    <ScrollView
      className="flex-1 bg-black"
      showsVerticalScrollIndicator={false}
    >
      {isLoading ? (
        <View className="flex-1 justify-center items-center min-h-screen">
          <Loader />
        </View>
      ) : (
        <>
          <View className="flex-row items-center justify-between p-4 shadow-md shadow-brand-300 mx-4">
            <Avatar
              rounded
              size={"large"}
              source={{
                uri: "https://imgs.search.brave.com/cPGqvBh1NEYVsUhAf8tjNnbIi4YopwWA56NfPj8xhXw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1oYXBw/eS1tYWxlLXdpdGgt/YnJvYWQtc21pbGVf/MTc2NTMyLTgxNzUu/anBnP3NpemU9NjI2/JmV4dD1qcGc",
              }}
            />
            <TouchableOpacity
              className="bg-brand-200 py-2 px-4 rounded-sm"
              onPress={() => router.push("/")}
            >
              <Text
                className="text-brand-50 font-bold uppercase"
                style={{ fontFamily: "Roboto-Thin" }}
              >
                Sign Out
              </Text>
            </TouchableOpacity>
          </View>
          <View className="mt-5">
            <Banner bannerUrl={bannerUrl} title={title} caption={caption} />
          </View>
          <Divider className="mx-8" />
          <View>
            <Text
              className="text-gray-500 text-2xl font-bold uppercase ml-2 mt-10"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Our partners
            </Text>
            <Text
              className="text-gray-500 text-lg ml-2"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Explore the luxury benefits waiting for you and enjoy a great stay
              like your own home.
            </Text>
          </View>
          <View className="flex-row justify-center items-center mt-4">
            <FlatList
              ref={flatListRef}
              data={imagesHotels}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id.toString()}
              renderItem={renderItem}
              onScrollToIndexFailed={() => {}}
            />
          </View>
          <View className="flex-row mx-10 justify-between shadow-md shadow-brand-200">
            <TouchableOpacity
              onPress={handlePrev}
              className="p-2 bg-brand-200 rounded-md"
            >
              <Text className="text-white text-lg font-bold px-6">{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleNext}
              className="p-2 bg-brand-200 rounded-md"
            >
              <Text className="text-white text-lg font-bold px-6">{">"}</Text>
            </TouchableOpacity>
          </View>
          <Divider className="my-6 mx-8" />
          <View>
            <Text
              className="text-gray-500 text-2xl font-bold uppercase ml-2 mt-10"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Most Popular
            </Text>
            <Text
              className="text-gray-500 text-lg ml-2"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Explore the favorite rooms from our partners.
            </Text>
          </View>
          <FavoritesRooms />
          <Divider className="my-4 mx-8" />
          <View className="space-y-2">
            <Text
              className="text-gray-500 text-2xl font-bold uppercase ml-2 mt-10"
              style={{ fontFamily: "Roboto-Thin" }}
            >
              Check in - out online
            </Text>
            <View>
              <Text className="text-gray-500 text-lg ml-2 mb-3">
                Access with your credentials and get the reservation code for
                the next steps.
              </Text>
            </View>
            <TouchableOpacity
              className="bg-brand-200 rounded-sm px-4 mx-auto mb-5 shadow-md shadow-brand-200"
              onPress={() => router.back()}
            >
              <CustomModal
                children={<CheckInOut />}
                buttonTitle={buttonTitle}
              />
            </TouchableOpacity>
          </View>
          <Subscribe />
          <Divider className="my-4 mx-8" />
          <FeedbackForm />
        </>
      )}
    </ScrollView>
  );
}
