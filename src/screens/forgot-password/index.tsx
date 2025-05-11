import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { s } from "./styles";

import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function ForgotPasswordScreen() {
  const { goBack } = useNavigation();

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

        <View style={s.inputContainer}>
          <Ionicons name="mail-sharp" color="#253237" size={18} />
          <TextInput
            placeholder="Digite seu e-mail."
            style={s.input}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity style={s.buttonSendConfirmation} activeOpacity={0.9}>
          <Text style={s.labelButtonConfirmation}>Enviar confirmação</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
