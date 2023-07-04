import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroSlider from "../../components/intro";
import LoginScreen from "../../pages/Login";
import { RootStackParamList } from "../../type/LoginType";

const Stack = createNativeStackNavigator<RootStackParamList>();

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Intro" component={IntroSlider} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

export default LoginStack;
