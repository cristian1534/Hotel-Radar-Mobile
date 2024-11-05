import { View, Text, ScrollView, FlatList, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const favoritesRooms = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/7osnUBF30J3vTomHUhSoDEuVYHMtVj9WSfDENS3EWVs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTU1MjYxMTQwMzUt/MGQ0NWVkMTZjZmJm/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4Tm54OFlt/VmtjbTl2Ylh4bGJu/d3dmSHd3Zkh4OE1B/PT0",
    hotel: "Crown Hotel",
    style: "Standard",
    price: 50,
    rating: 3,
  },
  {
    id: 2,
    image:
      "https://imgs.search.brave.com/gfTiAfFHPToXqEKfLFEnBBTbtfRMnHY3raYTznDfe5U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTE5/NDY4NjAxMi9waG90/by9iZWRyb29tLWlu/LW5ldy1sdXh1cnkt/aG9tZS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9WDZZbXU3/cDRHTTdYX1N1MTFE/QVpfM1dUOE1jTDR4/Y2hWN1pMdjZJTXNN/ND0",
    hotel: "Royal Hotel",
    style: "Suite",
    price: 150,
    rating: 4,
  },
  {
    id: 3,
    image:
      "https://imgs.search.brave.com/1APg3rLtaH_9HX3zZH4LK7E_uy2TWwPLWx33_sBGo6A/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzk4Lzc2LzE2/LzM2MF9GXzk4NzYx/NjQ4X3VMb2dOblNs/Q2ZWUzBSbXNWbFhm/N0RMYXUzbVMwdkdr/LmpwZw",
    hotel: "Hilton Hotel",
    style: "Deluxe",
    price: 200,
    rating: 5,
  },
];

export default function FavoritesRooms() {
  const renderStars = (rating:number) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<Ionicons key={i} name="star" size={20} color={"#E3C037"} />);
    }
    return stars;
  };

  const renderItem = ({ item }: any) => {
    return (
      <View className="shadow shadow-slate-400">
        <View className="my-5 py-4 px-4 mr-20 rounded-md flex-row justify-center items-center">
          <Image
            source={{ uri: item.image }}
            width={200}
            height={200}
            className="rounded-sm mr-4"
          />
          <View>
            <Text className="text-gray-500 text-lg font-bold uppercase">
              {item.hotel}
            </Text>
            <Text className="text-gray-400 text-sm">{item.style}</Text>
            <Text className="text-orange-500 font-bold my-2">USD {item.price}</Text>
            <View className="flex-row justify-start my-3">
              {renderStars(item.rating)}
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <ScrollView>
      <View>
        <FlatList
          data={favoritesRooms}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          horizontal={true}
        />
      </View>
    </ScrollView>
  );
}
