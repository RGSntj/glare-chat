import { Text, TouchableOpacity, View } from "react-native";

import { s } from "./styles";

import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { getUserData } from "../../storages/userStorage";
import { FriendsInvites } from "../../interfaces/FriendsInvites";

export function NotificationScreen() {
  const [inviteFriends, setInviteFriends] = useState<FriendsInvites[]>([]);

  const { goBack } = useNavigation();

  useEffect(() => {
    async function fetchAllFriendsRequest() {
      try {
        const userLogged = await getUserData();

        const response = await api.get("/friends/pendings", {
          headers: {
            Authorization: `Bearer ${userLogged.token}`,
          },
        });

        setInviteFriends(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchAllFriendsRequest();
  }, []);

  return (
    <View style={s.container}>
      <View style={s.header}>
        <TouchableOpacity style={s.button} activeOpacity={0.7} onPress={goBack}>
          <Ionicons name="arrow-back" size={20} />
        </TouchableOpacity>

        <Text style={s.labelHeader}>Notificações Gerais</Text>
      </View>

      <View style={s.contentNotification}>
        {inviteFriends.length > 0 &&
          inviteFriends.map((friend) => {
            return (
              <View style={s.cardNotification} key={friend.id}>
                <View style={s.notificationInfo}>
                  <View style={s.profileIcon} />

                  <View style={s.labelInformations}>
                    <Text style={s.labelUsername}>
                      {friend.sender.username}
                    </Text>
                    <Text style={s.labelNotification}>
                      Enviou um pedido de amizade
                    </Text>
                  </View>
                </View>

                <View style={s.icons}>
                  <TouchableOpacity>
                    <Ionicons name="checkmark" size={24} color="#affc41" />
                  </TouchableOpacity>

                  <TouchableOpacity>
                    <Ionicons name="close" size={24} color="#ee6055" />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
      </View>
    </View>
  );
}
