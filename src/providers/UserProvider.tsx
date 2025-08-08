"use client";

import { CurrentPofile } from "@/lib/types";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type LoginResponse = {
  success: boolean;
  accessToken: string;
  user: CurrentPofile;
  isCreatedProfile: boolean;
};

type UserContextType = {
  user: CurrentPofile | null;
  loading: boolean;
  login: (
    email: string,
    password: string
  ) => Promise<AxiosResponse<LoginResponse> | any>;
  logout: () => void;
};

export const UserContext = createContext<UserContextType>(
  {} as UserContextType
);

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [user, setUser] = useState<CurrentPofile | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    const response = await axios.post("http://localhost:4200/auth/login", {
      email: email,
      password: password,
    });

    if (!response) return;

    localStorage.setItem("user", JSON.stringify(response.data));
    localStorage.setItem("accessToken", response.data.accessToken);

    return response.data;
  };

  useEffect(() => {
    const data = localStorage.getItem("accessToken");
    const accessToken = data;

    if (!accessToken) return;

    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const { profileCurrent } = await getCurrentUserByAccessToken(
          accessToken
        );
        setUser(profileCurrent);
      } catch (error) {
        console.log(error);
      }
    };

    setLoading(false);

    getCurrentUser();
  }, [loading]);

  const getCurrentUserByAccessToken = async (accessToken: string) => {
    const response = await fetch("http://localhost:4200/profile/current-user", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    const data = await response.json();
    return data as { profileCurrent: CurrentPofile };
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, login, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
}
export const useUser = () => useContext(UserContext);
