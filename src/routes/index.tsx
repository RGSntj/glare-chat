import { useEffect, useState } from "react";
import { getUserData } from "../storages/userStorage";
import { PrivateRoutes } from "./privateRoutes";
import { PublicRoutes } from "./publicRoutes";

export function Navigation() {
  const [isUserLogged, setIsUserLogged] = useState(false);

  useEffect(() => {
    async function fetchUserLogged() {
      const userLogged = await getUserData();

      setIsUserLogged(!!userLogged);
    }

    fetchUserLogged();
  }, []);

  return isUserLogged ? <PrivateRoutes /> : <PublicRoutes />;
}
