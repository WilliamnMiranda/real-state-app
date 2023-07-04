import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../pages/Home";

const Stack = createNativeStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default LoginStack;
