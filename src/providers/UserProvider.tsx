"use client";

import { ProfileType, User } from "@/lib/types";
import axios, { AxiosResponse } from "axios";
import { error } from "console";
import { createContext, useContext, useEffect, useState } from "react";

type LoginResponse = {
  success: boolean;
  accessToken: string;
  user: {
    username: string;
    email: string;
  };
  isCreatedProfile: boolean;
};

type UserContextType = {
  user: any;
  login: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<LoginResponse> | any>;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<any>();

  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post("http://localhost:4200/auth/login", {
        email: email,
        password: password,
      });

      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("accessToken", response.data.accessToken);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const data = localStorage.getItem("accessToken");
    const accessToken = data;

    if (!accessToken) return;

    const getCurrentUser = async () => {
      const userData = await getCurrentUserByAccessToken(accessToken);

      setUser(userData);
      console.log("userData", userData);
    };

    getCurrentUser();
  }, []);

  const getCurrentUserByAccessToken = async (accessToken: string) => {
    try {
      const response = await fetch(
        "http://localhost:4200/profile/current-user",
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ user, login }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);
