import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from 'expo-font';
import signIn from "./app/signIn";
import signUp from "./app/signUp";
import Home from "./app/home/home";
import DetailsHotel from "./app/details/[id]";
import CalendarReservation from "./app/reservation";
import Rooms from "./app/rooms";
import RestaurantsInfo from "./app/restaurants";
import scloungeInfo from "./app/sclounge";
import { enableScreens } from "react-native-screens";
import { Text } from "react-native";
import toursAgency from "./app/tours";
import RootBanner from "./app/index";


enableScreens();

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="RootBanner"
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen name="RootBanner" component={RootBanner} />
      <Stack.Screen name="signIn" component={signIn} options={{ presentation: "modal" }} />
      <Stack.Screen name="signUp" component={signUp} options={{ presentation: "modal" }} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={DetailsHotel} />
      <Stack.Screen name="reservation" component={CalendarReservation} />
      <Stack.Screen name="rooms" component={Rooms} />
      <Stack.Screen name="restaurants" component={RestaurantsInfo} />
      <Stack.Screen name="sclounge" component={scloungeInfo} />
      <Stack.Screen name="tours" component={toursAgency} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
  });

  if (!fontsLoaded) {
     return <Text className="text-red-500">Loading Font...</Text>
  }

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <AppNavigator />
        </SafeAreaView>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
