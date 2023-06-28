import { StatusBar } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import IntroSlider from "./components/intro";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <IntroSlider />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
