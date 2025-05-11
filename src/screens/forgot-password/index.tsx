import { useEffect } from "react";

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

export function ForgotPasswordScreen() {
  const { goBack } = useNavigation();

  const errorBalance = useSharedValue(0);

  const { navigate } = useNavigation<NavigationProp>();

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  function handleSendEmail(data: ForgotPasswordSchemaType) {
    console.log(data);

    navigate("VerifyMail", {
      email: data.email,
    });
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
              color="#343a40"
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
