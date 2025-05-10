import { useEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Header } from "../../components/header";
import { Storys } from "../../components/storys";
import { FONTS } from "../../utils/fonts";

import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { Chat } from "../../components/chat";

import { useNavigation } from "@react-navigation/native";
import { socket } from "../../services/socket";
import { NavigationProp } from "../../types/navigation";
import { getUserData, removeUserData } from "../../storages/userStorage";
import { api } from "../../services/api";
import { IRooms } from "../../interfaces/rooms";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { ListEmptyComponent } from "../../components/list-empty-component";

export function HomeScreen() {
  const isMenuOpen = useSharedValue(0);

  const [rooms, setRooms] = useState<IRooms[]>([]);

  const { navigate } = useNavigation<NavigationProp>();

  function handleOpenMenu() {
    isMenuOpen.value = withSpring(isMenuOpen.value === 0 ? 1 : 0, {
      mass: 1,
      damping: 20,
      stiffness: 350,
      overshootClamping: false,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    });
  }

  function handleCloseMenu() {
    if (isMenuOpen.value == 0) return;

    isMenuOpen.value = withSpring(0, {
      mass: 1,
      damping: 20,
      stiffness: 350,
    });
  }

  async function handleLoggout() {
    socket.disconnect();

    await removeUserData();

    navigate("Login");
  }

  const menuAnimations = useAnimatedStyle(() => {
    const translateY = interpolate(isMenuOpen.value, [0, 1], [300, 0]);

    return {
      transform: [{ translateY }],
    };
  });

  useEffect(() => {
    async function registerSocket() {
      socket.connect();

      const user = await getUserData();

      socket.emit("registerSocket", user!.code);
    }

    async function fetchAllFriends() {
      try {
        const rooms = await api.get("/rooms");

        setRooms(rooms.data);
      } catch (error) {
        console.log("Ocorreu um erro ao buscar a lista de amigos.");
      }
    }

    Promise.allSettled([registerSocket(), fetchAllFriends()]);
  }, []);

  return (
    <SafeAreaView style={styles.container} onTouchStart={handleCloseMenu}>
      <Header />

      <Storys />

      <View style={styles.chatsContainerLabel}>
        <Text style={styles.chatsText}>Conversas</Text>

        <Entypo name="dots-three-horizontal" size={20} color="#222" />
      </View>

      <FlatList
        data={rooms}
        keyExtractor={(room) => room.id}
        renderItem={({ item }) => {
          return (
            <Chat
              username={item.user.username}
              onPress={() =>
                navigate("Chat", {
                  id: item.id,
                })
              }
            />
          );
        }}
        ListEmptyComponent={() => {
          return <ListEmptyComponent />;
        }}
      />

      <TouchableOpacity style={styles.menuButton} onPress={handleOpenMenu}>
        <Entypo name="grid" size={23} color="#727272" />
      </TouchableOpacity>

      <Animated.View style={[styles.menu, menuAnimations]}>
        <View style={styles.menuItens}>
          <Pressable
            style={styles.listItem}
            onPress={() => console.log("Conversas")}
          >
            <Ionicons name="chatbubble-ellipses-outline" size={20} />

            <View>
              <Text style={styles.labelText}>Nova conversa</Text>
              <Text style={styles.labelDescription}>
                Envie uma nova mensagem para um contato
              </Text>
            </View>
          </Pressable>

          <Pressable style={styles.listItem}>
            <MaterialCommunityIcons
              name="account-group"
              size={24}
              color="black"
            />

            <View>
              <Text style={styles.labelText}>Nova comunidade</Text>
              <Text style={styles.labelDescription}>
                Junte-se à comunidade ao seu redor
              </Text>
            </View>
          </Pressable>

          <Pressable style={styles.listItem} onPress={handleLoggout}>
            <Ionicons name="exit-outline" size={24} color="#FF4C51" />

            <View>
              <Text style={[styles.labelText, { color: "#FF4C51" }]}>
                Sair da conta
              </Text>
              <Text style={styles.labelDescription}>
                Voltar para a tela de login
              </Text>
            </View>
          </Pressable>
        </View>
      </Animated.View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },

  chatsContainerLabel: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 25,
    paddingHorizontal: 5,
    marginBottom: 20,
  },

  chatsText: {
    fontSize: 19,
    fontFamily: FONTS.kanitMedium,
    color: "#272727",
  },

  menuButton: {
    height: 45,
    width: 45,
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    borderRadius: 60 / 2,
    position: "absolute",
    bottom: 40,
    right: 25,
    // zIndex: 99,
  },

  menu: {
    borderRadius: 35,
    paddingHorizontal: 20,
    paddingVertical: 24,
    backgroundColor: "#f8f9fa",
    position: "absolute",
    bottom: 40,
    width: "100%",
    alignSelf: "center",
  },

  closeMenu: {
    backgroundColor: "#ffffff",
    borderRadius: 60 / 2,
    height: 40,
    width: 40,
    position: "absolute",
    alignSelf: "center",
    top: -8,
    right: 0,
    zIndex: 99,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  menuItens: {
    display: "flex",
    gap: 15,
  },

  listItem: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 15,
  },

  labelText: {
    fontFamily: FONTS.kanitMedium,
  },

  labelDescription: {
    fontFamily: FONTS.kanitRegular,
    fontSize: 10,
    color: "#9e9e9e",
  },
});
