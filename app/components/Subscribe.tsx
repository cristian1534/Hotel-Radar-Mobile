import { View } from "react-native";
import { PricingCard, Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import React from "react";

export default function Subscribe() {
  return (
    <View className="flex justify-center items-center">
      <PricingCard
        color="#A6A4FE"
        title="SUBSCRIBE"
        price="U$D 20"
        pricingStyle={{ color: "orange"}}
        info={["Family Account", "Premium Support", "High Benefits on staying"]}
        button={
          <Button
            title="GET STARTED"
            icon={<Icon name="hotel" size={15} color="#EBEBFF" style={{ marginRight: 10 }} />}
            buttonStyle={{ backgroundColor: '#A6A4FE', marginTop: 15}}
          />
        }
        containerStyle={{ borderRadius: 8, width: '80%', backgroundColor: "black"}}
      />
    </View>
  );
}
