import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { s } from "./styles";
import { RootStackParamList } from "../../types/navigation";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUserData } from "../../storages/userStorage";
import { IRoomDetail } from "../../interfaces/roomDetails";

import { Ionicons } from "@expo/vector-icons";
import Foundation from "@expo/vector-icons/Foundation";

import defaultProfile from "../../assets/profile-2.png";

export function ChatScreen() {
  const [room, setRoom] = useState<IRoomDetail | null>(null);

  const { params } = useRoute<RouteProp<RootStackParamList>>();

  const { goBack } = useNavigation();

  useEffect(() => {
    async function fetchRoomDetails() {
      try {
        const user = await getUserData();

        const roomDetails = await api.get(`/rooms/details/${params?.id}`, {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        setRoom(roomDetails.data);
      } catch (error) {
        console.log(error);
        console.log("Ocorreu um erro ao buscar os detalhes da sala.");
      }
    }

    fetchRoomDetails();
  }, []);

  return (
    <SafeAreaView style={s.container}>
      <View style={s.header}>
        <View style={s.rightContent}>
          <TouchableOpacity
            style={s.button}
            activeOpacity={0.7}
            onPress={goBack}
          >
            <Ionicons name="arrow-back" size={20} />
          </TouchableOpacity>

          <View style={s.profilePhoto}>
            <Image
              source={defaultProfile}
              resizeMode="contain"
              style={{ maxHeight: 40, maxWidth: 40 }}
            />
          </View>

          <View style={s.userInformations}>
            <Text style={s.username}>{room?.participant.username}</Text>
            <Text style={s.userStatus}>online</Text>
          </View>
        </View>

        <View style={s.leftContent}>
          <TouchableOpacity style={s.button} activeOpacity={0.7}>
            <Foundation name="telephone" size={20} color="#222" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.containerMessages}></View>

      <View style={s.sendMessagesArea}>
        <View style={s.containerInput}>
          <TouchableOpacity style={s.plusButton} activeOpacity={0.7}>
            <Ionicons name="add" size={20} color="#ffffff" />
          </TouchableOpacity>

          <TextInput style={s.input} placeholder="Digite sua mensagem..." />
        </View>

        <TouchableOpacity style={s.sendMessageButton} activeOpacity={0.7}>
          <Ionicons name="send-outline" size={18} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
