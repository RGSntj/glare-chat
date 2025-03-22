import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { LoginPage } from "../screens/login";
import { HomeScreen } from "../screens/home";
import { NotificationScreen } from "../screens/notifications";
import { ChatScreen } from "../screens/chat";

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
      <S.Screen name="Notifications" component={NotificationScreen} />
      <S.Screen name="Chat" component={ChatScreen} />
    </S.Navigator>
  );
}
