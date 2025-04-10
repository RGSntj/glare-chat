import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Notifications: undefined;
  Chat: { id: string };
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
