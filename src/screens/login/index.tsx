import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { s } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import { CommonActions, useNavigation } from "@react-navigation/native";
import { storeUserData } from "../../storages/userStorage";
import { NavigationProp } from "../../types/navigation";

export function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation<NavigationProp>();

  async function handleLogin() {
    try {
      const response = await api.post("/users/login", {
        email,
        password,
      });

      const { code, username, token, userId } = response.data;

      const userData = {
        userId,
        code,
        username,
        token,
      };

      await storeUserData(userData);

      // navegando para a tela principal e removendo a de login do historico
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{ name: "Home" }],
        })
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={s.container}>
      <View style={s.shapeRight} />

      {/* <View style={s.shapeLeft} /> */}

      <View style={s.containerLabels}>
        <Text style={s.labelWelcome}>Bem vindo de volta!</Text>
        <Text style={s.labelCreateAccount}>
          Não tem uma conta? <Text style={s.labelRegister}>Crie uma!</Text>
        </Text>
      </View>

      <Text style={s.labelLogin}>Entrar agora! 🚀</Text>

      <View style={s.containerForm}>
        <View style={s.labelsForm}>
          <Text style={s.labelUsername}>E-mail</Text>
          <TextInput
            style={s.input}
            placeholder="Digite o e-mail cadastrado"
            onChangeText={setEmail}
            value={email}
          />
        </View>

        <View style={s.labelsForm}>
          <Text style={s.labelUsername}>Senha</Text>
          <TextInput
            style={s.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={s.forgotPasswordLabel}>
            Não lembra a senha? A gente te ajuda!
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={s.button}
        activeOpacity={0.9}
        onPress={handleLogin}
      >
        <Text style={s.labelButton}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
