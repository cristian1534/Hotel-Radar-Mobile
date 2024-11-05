import React, { useState } from "react";
import { BottomSheet, Button, ListItem } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

type BottomSheetComponentProps = {};

export default function WelcomeBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const navigation = useNavigation(); // Obtener la función de navegación

  const handleSignIn = () => {
    navigation.navigate("signIn"); // Navegar a la pantalla de signIn
    setIsVisible(false); // Cerrar el BottomSheet
  };

  const handleSignUp = () => {
    navigation.navigate("signUp"); // Navegar a la pantalla de signUp
    setIsVisible(false); // Cerrar el BottomSheet
  };

  const handleClose = () => {
    setIsVisible(false); // Cerrar el BottomSheet
  };

  const list = [
    { title: "Sign In", onPress: handleSignIn },
    { title: "Sign Up", onPress: handleSignUp },
    {
      title: "Close",
      onPress: handleClose,
      style: { backgroundColor: "red" } // Establecer el estilo de fondo rojo
    },
  ];

  return (
    <SafeAreaProvider>
      <Button
        title="GET STARTED WITH HOTEL RADAR"
        onPress={() => setIsVisible(true)}
        buttonStyle={styles.button}
        titleStyle={styles.buttonText} // Establecer el estilo del texto del botón
      />
      <BottomSheet modalProps={{}} isVisible={isVisible}>
        <View style={styles.bottomSheetContent}>
          {list.map((l, i) => (
            <ListItem
              key={i}
              containerStyle={[styles.buttonSheetCustom, l.style]} // Aplicar el estilo de fondo rojo al botón "Close"
              onPress={l.onPress}
            >
              <ListItem.Content style={styles.content}>
                <ListItem.Title onPress={l.onPress}>
                  <Text className="text-white text-center uppercase font-bold">
                    {l.title}
                  </Text>
                </ListItem.Title>
              </ListItem.Content>
            </ListItem>
          ))}
        </View>
      </BottomSheet>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 15,
    backgroundColor: "#A6A4FE",
    borderRadius: 5,
    marginTop: 400,
  },
  buttonText: {
    fontWeight: "bold", // Establecer negrita para el texto del botón
  },
  bottomSheetContent: {
    paddingVertical: 20, // Añadir padding vertical para espaciar mejor los elementos
  },
  buttonSheetCustom: {
    backgroundColor: "#A6A4FE",
    borderRadius: 5,
    margin: 20,
    padding: 15, // Aumentar el padding para más espacio alrededor del texto
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
  },
});
