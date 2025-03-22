import { SafeAreaView, Text } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { s } from "./styles";
import { RootStackParamList } from "../../types/navigation";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUserData } from "../../storages/userStorage";
import { IRoomDetail } from "../../interfaces/roomDetails";

export function ChatScreen() {
  const [room, setRoom] = useState<IRoomDetail | null>(null);

  const { params } = useRoute<RouteProp<RootStackParamList>>();

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
      <Text>Chat screen</Text>

      <Text>{room?.participant.username}</Text>
    </SafeAreaView>
  );
}
