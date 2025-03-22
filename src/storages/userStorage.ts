import AsyncStorage from "@react-native-async-storage/async-storage";

export type User = {
  username: string;
  code: string;
  token: string;
};

export async function storeUserData(userData: User) {
  try {
    await AsyncStorage.setItem("@user:data", JSON.stringify(userData));
  } catch (error) {
    throw error;
  }
}

export async function getUserData(): Promise<User | undefined> {
  try {
    const user = await AsyncStorage.getItem("@user:data");

    if (!user) return;

    return JSON.parse(user);
  } catch (error) {
    throw error;
  }
}

export async function removeUserData() {
  try {
    await AsyncStorage.removeItem("@user:data");
  } catch (error) {
    throw error;
  }
}
