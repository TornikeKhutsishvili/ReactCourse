import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import type { IAuthContext } from "../interfaces/IAuthContext";
import type { IUser } from "../interfaces/IUser";
import $axios from "../http";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    $axios
      .get("/refresh")
      .then((res) => {
        setUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const logout = useCallback(() => {
    $axios
      .post("/logout")
      .then(() => setUser({} as IUser))
      .catch((err) => console.log(err));
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
