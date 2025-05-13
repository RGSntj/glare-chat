import { Text, TouchableOpacity, useAnimatedValue, View } from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

import { s } from "./styles";

import { OtpInput } from "react-native-otp-entry";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services/api";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { AxiosError } from "axios";

type VerifyMailRouteProps = RouteProp<RootStackParamList, "VerifyMail">;

interface VerifyCodeResponseAPI {
  token: string;
  successful: boolean;
}

export function VerifyMailScreen() {
  const { params } = useRoute<VerifyMailRouteProps>();
  const [count, setCount] = useState<number>(10);

  const [error, setError] = useState<{ error: boolean; message?: string }>({
    error: false,
    message: "",
  });

  const { goBack } = useNavigation();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  async function handleSendCode(otpCode: string) {
    setError({
      error: true,
    });

    try {
      const result = await api.post<VerifyCodeResponseAPI>(
        "/auth/verify-code",
        {
          code: otpCode,
        }
      );

      const { token } = result.data;

      console.log(token);

      // Navegar para a tela de redefinir a senha.
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);

        setError({
          error: true,
          message: error.response?.data.message,
        });
      }
    }
  }

  function handleResendCode() {
    console.log("Codigo pode ser reenviado");
  }

  // useEffect(() => {
  //   intervalRef.current = setInterval(() => {
  //     setCount((prevState) => {
  //       if (prevState < 1) {
  //         clearInterval(intervalRef.current!);
  //         handleResendCode();
  //         return 0;
  //       }

  //       return prevState - 1;
  //     });
  //   }, 1000);
  // }, []);

  const errorBalance = useSharedValue(0);

  useEffect(() => {
    if (error.error) {
      errorBalance.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 })
      );
    }
  }, [error.error]);

  const animatedStyleOnError = useAnimatedStyle(() => ({
    transform: [{ translateX: errorBalance.value }],
  }));

  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity
          style={s.headerButtonBack}
          activeOpacity={0.8}
          onPress={goBack}
        >
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>

        <Text style={s.labelForgotPasswordHeader}>Verificar email</Text>
      </View>

      <View style={s.content}>
        <View style={s.imageContainer}>
          <MaterialCommunityIcons name="email" size={70} color="#343a40" />
        </View>

        <Text style={s.labelCode}>
          Por favor, entre com o código de 5 digitos enviado para:{" "}
          <Text style={s.email}>{params.email}</Text>
        </Text>

        <Animated.View
          style={[
            { marginTop: 25, paddingHorizontal: 20 },
            error.error && animatedStyleOnError,
          ]}
        >
          <OtpInput
            numberOfDigits={5}
            blurOnFilled={true}
            hideStick
            onTextChange={(e) => {
              if (error.error) setError({ error: false });
            }}
            theme={{
              pinCodeTextStyle: s.pinCodeText,
              pinCodeContainerStyle: {
                borderColor: error.error ? "#F36A7B" : "#e3e3e3",
              },
            }}
            onFilled={(otpCode) => handleSendCode(otpCode)}
          />
        </Animated.View>

        {error.error && (
          <View style={s.errorMessageContainer}>
            <Text style={s.contentErrorMessage}>{error.message}</Text>
          </View>
        )}

        {/* <Text style={s.resendCode}>Reenviar código em: {count}s</Text> */}
      </View>
    </View>
  );
}
