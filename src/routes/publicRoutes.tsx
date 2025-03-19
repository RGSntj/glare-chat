import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { LoginPage } from "../screens/login";
import { HomeScreen } from "../screens/home";

const S = createNativeStackNavigator<RootStackParamList>();

export function PublicRoutes() {
  return (
    <S.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <S.Screen name="Login" component={LoginPage} />
      <S.Screen name="Home" component={HomeScreen} />
    </S.Navigator>
  );
}
