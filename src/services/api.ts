import axios from "axios";
import { getUserData } from "../storages/userStorage";

export const api = axios.create({
  baseURL: "http://192.168.0.6:3000",
});

api.interceptors.request.use(async (req) => {
  const user = await getUserData();

  if (user?.token) {
    req.headers["Authorization"] = `Bearer ${user.token}`;
  }

  return req;
});
