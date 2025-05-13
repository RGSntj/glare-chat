import { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { s } from "./styles";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import Animated, {
  withSequence,
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  forgotPasswordSchema,
  ForgotPasswordSchemaType,
} from "../../schemas/forgot-password-schema";
import { NavigationProp } from "../../types/navigation";
import { api } from "../../services/api";
import { AxiosError } from "axios";

export function ForgotPasswordScreen() {
  const [errorMessage, setErrorMessage] = useState<string>("");

  const { goBack } = useNavigation();

  const errorBalance = useSharedValue(0);

  const { navigate } = useNavigation<NavigationProp>();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function handleSendEmail(data: ForgotPasswordSchemaType) {
    try {
      const result = await api.post<{ successful: boolean }>(
        "/auth/forgot-password",
        {
          email: data.email,
        }
      );

      console.log(result.data);

      navigate("VerifyMail", {
        email: data.email,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response) {
          setErrorMessage("E-mail não existe na nossa base de dados.!");

          setError("email", {
            message: "Email não encontrado na nossa base de dados.",
          });
        }
      }
    }
  }

  useEffect(() => {
    if (errors.email) {
      errorBalance.value = withSequence(
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(-10, { duration: 50 }),
        withTiming(10, { duration: 50 }),
        withTiming(0, { duration: 50 })
      );
    }
  }, [errors?.email]);

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

        <Text style={s.labelForgotPasswordHeader}>Esqueci a senha</Text>
      </View>

      <View style={s.content}>
        <View style={s.contentContainer}>
          <View style={s.imageContainer}>
            <MaterialCommunityIcons
              name="shield-lock-outline"
              size={70}
              color={errors?.email ? "#F36A7B" : "#343a40"}
            />
          </View>

          <Text style={s.textForgotPasswordContent}>
            Sem pânico! Me conta seu e-mail pra gente resolver isso rapidinho.
          </Text>
        </View>

        <Animated.View
          style={[
            s.inputContainer,
            errors?.email && s.errorInput,
            animatedStyleOnError,
          ]}
        >
          <Ionicons
            name="mail-sharp"
            color={errors?.email ? "#F8D7DA" : "#253237"}
            size={18}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Digite seu e-mail."
                style={s.input}
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType="email-address"
                placeholderTextColor={errors?.email && "#F8D7DA"}
              />
            )}
            name="email"
          />
        </Animated.View>

        {errors.email && (
          <View style={s.errorMessageContainer}>
            <Text style={s.contentErrorMessage}>{errors.email?.message}</Text>
          </View>
        )}

        <TouchableOpacity
          style={s.buttonSendConfirmation}
          activeOpacity={0.9}
          onPress={handleSubmit(handleSendEmail)}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator color="#ffffff" />
          ) : (
            <Text style={s.labelButtonConfirmation}>Enviar confirmação</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
