import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { s } from "./styles";
import { useState } from "react";
import { api } from "../../services/api";
import {
  CommonActions,
  StackActions,
  useNavigation,
} from "@react-navigation/native";
import { socket } from "../../services/socket";

export function LoginPage() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigation = useNavigation();

  async function handleLogin() {
    socket.connect();

    try {
      const response = await api.post("/login", {
        username,
      });

      const { code } = response.data;

      console.log(code);
      socket.emit("registerSocket", code);

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
          <Text style={s.labelUsername}>Usuário</Text>
          <TextInput
            style={s.input}
            placeholder="Nome de usuário..."
            onChangeText={setUsername}
            value={username}
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
