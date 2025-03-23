import { useEffect, useRef, useState } from "react";

import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  FlatList,
  ImageBackground,
  LayoutChangeEvent,
} from "react-native";

import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { s } from "./styles";
import defaultProfile from "../../assets/profile-2.png";

import { api } from "../../services/api";
import { socket } from "../../services/socket";

import { getUserData } from "../../storages/userStorage";
import { IRoomDetail } from "../../interfaces/roomDetails";
import { RootStackParamList } from "../../types/navigation";

import {
  Ionicons,
  Foundation,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import { getCurrentTime } from "../../helpers/currentTimeFormat";

interface Message {
  id: string;
  content: string;
  owner: string;
  sentAt: string;
}

export function ChatScreen() {
  const [room, setRoom] = useState<IRoomDetail | null>(null);

  const [messageContent, setMessageContent] = useState<string>("");

  const [messages, setMessages] = useState<Message[]>([]);

  const flatlistRef = useRef<FlatList>(null);
  const messageWidth = useRef<Record<string, number>>({});

  const { params } = useRoute<RouteProp<RootStackParamList>>();

  const { goBack } = useNavigation();

  useEffect(() => {
    flatlistRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

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

  useEffect(() => {
    socket.emit("joinRoom", params?.id);

    socket.on("newChatMessage", (msg) => {
      const allMessages: Message = {
        ...msg,
        owner: msg.owner === socket.id ? "me" : "other",
      };

      console.log("Mensagem recebida: ");
      console.log(allMessages);

      setMessages((prevState) => [...prevState, allMessages]);

      flatlistRef.current?.scrollToEnd({ animated: true });
    });

    return () => {
      socket.off("joinRoom");
      socket.off("newChatMessage");
      socket.emit("leaveRoom", params?.id);
    };
  }, []);

  function handleSendMessage() {
    if (!messageContent.trim()) return;

    const message: Message = {
      id: `${socket.id}-${Date()}`,
      owner: "me",
      content: messageContent,
      sentAt: getCurrentTime(),
    };

    socket.emit("chatMessage", params?.id, message);

    setMessages([...messages, message]);

    setMessageContent("");
  }

  function handleLayout(itemId: string, e: LayoutChangeEvent) {
    if (!messageWidth.current[itemId]) {
      messageWidth.current[itemId] = e.nativeEvent.layout.width;
    }
  }

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

      <View style={s.containerMessages}>
        <FlatList
          ref={flatlistRef}
          data={messages}
          keyExtractor={(message) => message.id}
          renderItem={({ item }) => {
            const width = messageWidth.current[item.id] || 0;

            return (
              <View
                style={[s.message, item.owner == "me" && s.messageRight]}
                key={item.id}
                onLayout={(e) => handleLayout(item.id, e)}
              >
                <View style={[s.messageInfo, width >= 150 && s.messageRow]}>
                  <Text
                    style={[
                      s.contentMessage,
                      item.owner == "me" && s.myMessage,
                    ]}
                  >
                    {item.content}
                  </Text>

                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      alignSelf: "flex-end",
                    }}
                  >
                    <Text style={s.hoursSentAt}>{item.sentAt}</Text>

                    {item.owner == "me" && (
                      <MaterialCommunityIcons
                        name="checkbox-multiple-marked-circle-outline"
                        size={15}
                        color="#96939b"
                      />
                    )}
                  </View>
                </View>
              </View>
            );
          }}
          showsVerticalScrollIndicator={false}
          onContentSizeChange={() =>
            flatlistRef.current?.scrollToEnd({ animated: true })
          }
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
          }}
        />
      </View>

      <View style={s.sendMessagesArea}>
        <View style={s.containerInput}>
          <TouchableOpacity style={s.plusButton} activeOpacity={0.7}>
            <Ionicons name="albums-outline" size={20} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={s.input}
            placeholder="Digite sua mensagem..."
            onChangeText={setMessageContent}
            value={messageContent}
          />
        </View>

        <TouchableOpacity
          style={s.sendMessageButton}
          activeOpacity={0.7}
          onPress={handleSendMessage}
        >
          <Ionicons
            name="send-outline"
            size={18}
            color="#04a777"
            style={{
              transform: [{ rotate: "-30deg" }],
            }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
