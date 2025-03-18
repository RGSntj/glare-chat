import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/home";
import { LoginPage } from "../screens/login";
import { RootStackParamList } from "../types/navigation";

const S = createNativeStackNavigator<RootStackParamList>();

export function Navigation() {
  return (
    <S.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
    >
      <S.Screen name="Home" component={HomeScreen} />
      <S.Screen name="Login" component={LoginPage} />
    </S.Navigator>
  );
}
