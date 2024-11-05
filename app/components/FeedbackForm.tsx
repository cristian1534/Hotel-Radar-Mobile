import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "expo-router";

export default function FeedbackForm() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    Alert.alert(
      "Feedback Has Been Sent",
      `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View>
        <Text className="text-gray-500 text-2xl font-bold uppercase ml-2 mt-10 mb-4">
          Let us know your feedback
        </Text>
        <Text className="text-gray-500 text-md ml-2">
          Your experience is important to grow up.
        </Text>
      </View>
      <View className="w-5/6">
        <TextInput
          placeholder="Nombre"
          placeholderTextColor="#7E7CFD"
          value={name}
          onChangeText={setName}
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#7E7CFD"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300"
        />
        <TextInput
          placeholder="Mensaje"
          placeholderTextColor="#7E7CFD"
          value={message}
          onChangeText={setMessage}
          multiline={true}
          numberOfLines={4}
          className="border-b-2 border-brand-100 py-3 px-4 my-3 text-brand-300 h-32"
        />

       <TouchableOpacity
          onPress={handleSubmit}
          className="bg-brand-200 py-2 rounded-md shadow-md shadow-brand-200 mb-5 mx-auto px-6"
        >
          <Text className="text-center text-lg text-white font-bold uppercase">
            Share
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
