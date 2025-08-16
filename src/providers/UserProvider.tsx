
"use client";

import { ProfileType, User } from "@/lib/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

type LoginResponse = {
  success: boolean;
  accessToken: string;
  user: User;
  isCreatedProfile: boolean;
};

type UserContextType = {
  profile: ProfileType | null;
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<LoginResponse>;
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
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
     const response = await axios.post<LoginResponse>(
  `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
  { email, password },
  {
    headers: {
      "Content-Type": "application/json",
    },
  }
);


      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("accessToken", response.data.accessToken);

      setUser(response.data.user);
      return response.data;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) return;

    const getCurrentUser = async () => {
      try {
        setLoading(true);
        const { profile, user } = await getCurrentUserByAccessToken(accessToken);
        setProfile(profile);
        setUser(user);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getCurrentUser();
  }, []);

  const getCurrentUserByAccessToken = async (accessToken: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/current-user`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const data = await response.json();
    return data as { user: User; profile: ProfileType | null };
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    router.push("/login");
  };

  return (
    <UserContext.Provider value={{ user, login, loading, logout, profile }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);

