import React, { useState } from "react";
import { View, Text } from "react-native";
import { List } from "react-native-paper";

export default function HotelServices() {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <View className="bg-black flex-1">
      <List.Section
        title="Services"
        titleStyle={{
          fontSize: 18,
          color: "#6B7280",
          fontWeight: "bold",
          backgroundColor: "black",
        }}
      >
        <List.Accordion
          title="Complementary Services"
          titleStyle={{
            color: "gray",
            fontWeight: "bold",
          }}
          left={(props) => (
            <List.Icon {...props} icon="briefcase" color="orange" />
          )}
          expanded={expanded}
          onPress={handlePress}
          style={{ backgroundColor: "black" }} 
        >
          <List.Item
            title="24-Hour Reception: We are available to assist you at any time of the day or night."
            titleNumberOfLines={10}
            titleStyle={{ fontSize: 14, color: "gray" }}
            style={{ backgroundColor: "black" }} 
          />
          <List.Item
            title="Free Wi-Fi: Enjoy fast and free Wi-Fi throughout the hotel."
            titleNumberOfLines={10}
            titleStyle={{ fontSize: 14, color: "gray" }}
            style={{ backgroundColor: "black" }} 
          />
          <List.Item
            title="Room Service: Available from 6:00 AM to 11:00 PM, with a varied international menu."
            titleNumberOfLines={10}
            titleStyle={{ fontSize: 14, color: "gray" }}
            style={{ backgroundColor: "black" }} 
          />
          <List.Item
            title="Parking: We offer secure and free parking for all our guests."
            titleNumberOfLines={10}
            titleStyle={{ fontSize: 14, color: "gray" }}
            style={{ backgroundColor: "black" }} 
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
}
