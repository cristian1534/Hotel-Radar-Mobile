import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from "react-native";

export default function Settings() {
  const { width } = Dimensions.get("window");
  const settingsOptions = [
    "Email preferences",
    "Conditions and Terms of Use",
    "About this Application",
    "Help and Support",
    "Delete account",
  ];

  const renderItem = ({ item }: any) => {
    return (
      <TouchableOpacity
        onPress={handleEmailPreferences}
        className={`${
          item == "Delete account" ? "bg-red-500" : "bg-brand-300"
        } rounded-sm py-3 px-4 mb-2 mx-10 flex `}
      >
        <Text className="text-white text-center ">{item}</Text>
      </TouchableOpacity>
    );
  };

  const handleDeleteAccount = () => {
    // Lógica para eliminar la cuenta
  };

  const handleEmailPreferences = () => {
    // Lógica para gestionar las preferencias de email
  };

  const handleTermsAndConditions = () => {
    // Abrir los términos y condiciones en un navegador
  };

  const handleAboutApp = () => {
    // Lógica para mostrar información sobre la aplicación
  };

  const handleHelpAndSupport = () => {
    // Lógica para mostrar opciones de ayuda y soporte
  };

  return (
    <View className="bg-black min-h-screen space-y-5 p-4">
      <View className="flex justify-center items-center">
        <Image
          source={{
            uri: "https://imgs.search.brave.com/06X_13qhkEFJfJe3_ys_498_kZM1CdXKEAIHj74uziU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ob3Rl/bC1zZXJ2aWNlLWNh/bGwtYmVsbC13b29k/ZW4tcmVjZXB0aW9u/LWZyb250LWRlc2st/cmV0cm8tdG9uZWQt/aW1hZ2UtNjI4NDk4/MTIuanBn",
          }}
          width={width}
          height={300}
          className=""
        />
      </View>
      <FlatList
        data={settingsOptions}
        keyExtractor={(item) => item.indexOf.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
