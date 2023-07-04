import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {
  Poppins_700Bold,
  Poppins_600SemiBold,
  Poppins_300Light,
} from "@expo-google-fonts/poppins";
import {
  Lato_400Regular,
  Lato_900Black,
  Lato_300Light,
} from "@expo-google-fonts/lato";
import { Inter_400Regular } from "@expo-google-fonts/inter";
import { useCallback } from "react";
import Navigation from "./navigation";
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Poppins_300Light,
    Lato_400Regular,
    Lato_900Black,
    Inter_400Regular,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar />
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
