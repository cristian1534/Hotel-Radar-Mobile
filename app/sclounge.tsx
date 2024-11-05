import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import BackButton from "./components/BackButton";

const { width } = Dimensions.get("window");
const IMG_HEIGHT = 300;

const spaData = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/8RZCoiq0SoMlXxm6BEA5BhPaRl7rxJWn57VexOLsaZs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgz/ODc2MjQ0L3Bob3Rv/L3NwYS10cmVhdG1l/bnQuanBnP3M9NjEy/eDYxMiZ3PTAmaz0y/MCZjPVl2cHJUZlVu/dE1KMDBlMU4xSm1M/NldrQWNtd0d4aFlZ/OHN3YUNfRm9VU2M9",
    name: "Luxury Spa",
    description: "The best relaxing place.",
    price: 100,
    schedule: "Monday to Friday 8am to 17pm",
  },
];

const conciergeData = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/XbAwlOHgWGrzkZsvH4AAx9MIEHhwCyNCZ6lgrr4C1tc/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9o/ZWxwZnVsLWNvbmNp/ZXJnZS1hc3Npc3Rz/LWVsZGVybHktZ3Vl/c3RfNDgyMjU3LTc2/NzYwLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
    schedule: "Monday to Friday 16am to 17pm",
    events: "Dessert testing.",
    contact: "concierge@hotel.net",
  },
];

const loungeData = [
  {
    id: 1,
    image:
      "https://imgs.search.brave.com/wJlKNvz-hg9IQcfrqzEirSfWFx6cbNlGgVokOzleurI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc2ltcGxldmll/d2luYy5jb20vc2lt/cGxldmlldy9pbWFn/ZS91cGxvYWQvY19m/aWxsLGdfeHlfY2Vu/dGVyLGhfNTYwLHFf/NjAsd185NjAseF8z/MDAwLHlfMTI4MC92/MS9jbGllbnRzL25l/d29ybGVhbnMvRGF2/ZW5wb3J0X0xvdW5n/ZV9SaXR6X0Nhcmx0/b25fQmVzdF9Ib3Rl/bF9CYXJzX05ld19P/cmxlYW5zXzk2NWU2/ZjUzLWUxYTAtNDBj/Yy1iMTdmLTMwZDdj/MWVhZGQ3NC5qcGc",
    events: "Live Jazz Music.",
    schedule: "Friday to Sunday 22pm till midnight",
    contact: "concierge@hotel.net",
  },
];

const sectionBanner =
  "https://imgs.search.brave.com/LQl0eUVjqcokkwf3FyHFUucYAA5h_nMzBSYCmz2sh-I/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/dGhlYmVuamFtaW4u/Y29tL2NvbnRlbnQv/dXBsb2Fkcy8yMDIz/LzA4L2lTdG9jay01/ODUwNjQ0NDQtNTUw/eDQyMC5qcGc";

export default function scloungeInfo() {
  const [uriUrl, setUriUrl] = useState(sectionBanner);
  const [dataItem, setDataItem] = useState<any[]>([]);

  const renderItem = ({ item }: { item: any }) => {
    if (dataItem === spaData) {
      return (
        <View className="flex justify-center items-center space-y-2 mt-5">
          <Text className="text-gray-500 text-3xl uppercase">{item.name}</Text>
          <Text className="text-gray-500 text-2xl">{item.description}</Text>
          <Text className="text-orange-300 text-lg">U$D {item.price}</Text>
          <Text className="text-gray-500 text-lg">{item.schedule}</Text>
        </View>
      );
    } else if (dataItem === conciergeData) {
      return (
        <View className="flex justify-center items-center space-y-2 mt-5">
          <Text className="text-gray-500 text-2xl">{item.schedule}</Text>
          <Text className="text-gray-500 text-2xl">{item.events}</Text>
          <Text className="text-gray-500 text-lg">{item.contact}</Text>
        </View>
      );
    } else if (dataItem === loungeData) {
      return (
        <View className="flex justify-center items-center space-y-2 mt-5">
          <Text className="text-gray-500 text-2xl">{item.events}</Text>
          <Text className="text-gray-500 text-2xl">{item.schedule}</Text>
          <Text className="text-gray-500 text-lg">{item.contact}</Text>
        </View>
      );
    }
    return null;
  };

  return (
    <View className="flex-1 bg-black">
      <BackButton />
      <View>
        <Image
          source={{
            uri: uriUrl,
          }}
          style={{ width: width, height: IMG_HEIGHT }}
        />
      </View>
      <View className="flex-row justify-between mx-8 my-6 items-center">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => {
            setDataItem(conciergeData);
            setUriUrl(conciergeData[0].image);
          }}
        >
          <FontAwesome5 name="concierge-bell" size={20} color="orange" />
          <Text
            className={`${
              dataItem === conciergeData ? "text-brand-50" : "text-gray-500"
            } font-bold text-md uppercase ml-2`}
          >
            Concierge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => {
            setDataItem(loungeData);
            setUriUrl(loungeData[0].image);
          }}
        >
          <MaterialIcons name="hotel-class" size={20} color="orange" />
          <Text
            className={`${
              dataItem === loungeData ? "text-brand-50" : "text-gray-500"
            } font-bold text-md uppercase ml-2`}
          >
            Lounge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => {
            setDataItem(spaData);
            setUriUrl(spaData[0].image);
          }}
        >
          <FontAwesome5 name="spa" size={20} color="orange" />
          <Text
            className={`${
              dataItem === spaData ? "text-brand-50" : "text-gray-500"
            } font-bold text-md uppercase ml-2`}
          >
            Spa
          </Text>
        </TouchableOpacity>
      </View>
      {dataItem.length < 1 && (
         <View> 
         <Text
           className="text-gray-500 text-2xl font-bold uppercase ml-2 mt-10 mb-5"
           style={{ fontFamily: "Roboto-Thin" }}
         >
           Enjoy our great service.
         </Text>
         <Text
           className="text-gray-500 text-lg ml-2"
           style={{ fontFamily: "Roboto-Thin" }}
         >
           We offer a wide range of services to our guests. 
           Come and join us, check our sections out and make your
           dreams come true.
         </Text>
       </View>
      )}
      <FlatList
        data={dataItem}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}
