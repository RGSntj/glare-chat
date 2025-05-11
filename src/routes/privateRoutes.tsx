import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { HomeScreen } from "../screens/home";
import { LoginPage } from "../screens/login";
import { NotificationScreen } from "../screens/notifications";
import { ChatScreen } from "../screens/chat";
import { ForgotPasswordScreen } from "../screens/forgot-password";
import { VerifyMailScreen } from "../screens/verify-mail";

const S = createNativeStackNavigator<RootStackParamList>();

export function PrivateRoutes() {
  return (
    <S.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <S.Screen name="Home" component={HomeScreen} />
      <S.Screen name="Notifications" component={NotificationScreen} />
      <S.Screen name="Login" component={LoginPage} />
      <S.Screen name="Chat" component={ChatScreen} />
      <S.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <S.Screen name="VerifyMail" component={VerifyMailScreen} />
    </S.Navigator>
  );
}
