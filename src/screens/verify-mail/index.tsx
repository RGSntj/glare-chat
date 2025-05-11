import { Text, TouchableOpacity, View } from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../types/navigation";

import { s } from "./styles";

import { OtpInput } from "react-native-otp-entry";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useEffect, useRef, useState } from "react";

type VerifyMailRouteProps = RouteProp<RootStackParamList, "VerifyMail">;

export function VerifyMailScreen() {
  const { params } = useRoute<VerifyMailRouteProps>();
  const [count, setCount] = useState<number>(10);

  const { goBack } = useNavigation();

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  function handleSendCode(otpCode: string) {
    console.log(otpCode);
  }

  function handleResendCode() {
    console.log("Codigo pode ser reenviado");
  }

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevState) => {
        if (prevState < 1) {
          clearInterval(intervalRef.current!);
          handleResendCode();
          return 0;
        }

        return prevState - 1;
      });
    }, 1000);
  }, []);

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

        <View style={{ marginTop: 25, paddingHorizontal: 20 }}>
          <OtpInput
            numberOfDigits={5}
            blurOnFilled={true}
            hideStick={true}
            theme={{
              pinCodeTextStyle: s.pinCodeText,
            }}
            onFilled={(otpCode) => handleSendCode(otpCode)}
          />
        </View>

        <Text style={s.resendCode}>Reenviar código em: {count}s</Text>
      </View>
    </View>
  );
}
