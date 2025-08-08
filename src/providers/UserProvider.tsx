// "use client";

// import { CurrentPofile, ProfileType, User } from "@/lib/types";
// import axios, { AxiosError, AxiosResponse } from "axios";
// import { useRouter } from "next/navigation";
// import { createContext, use, useContext, useEffect, useState } from "react";

// type LoginResponse = {
//   success: boolean;
//   accessToken: string;
//   user: User;
//   isCreatedProfile: boolean;
// };

// // type UserContextType = {
// //   profile: ProfileType | null;
// //   user: User | null;
// //   loading: boolean;
// //   login: (
// //     email: string,
// //     password: string
// //   ) => Promise<AxiosResponse<LoginResponse> | AxiosError>;
// //   logout: () => void;
// // };
// type UserContextType = {
//   profile: ProfileType | null;
//   user: User | null;
//   loading: boolean;
//   login: (email: string, password: string) => Promise<LoginResponse>;
//   logout: () => void;
// };

// export const UserContext = createContext<UserContextType>(
//   {} as UserContextType
// );

// export default function UserContextProvider({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [profile, setProfile] = useState<ProfileType | null>(null);
//   const [loading, setLoading] = useState(false);
 



//   // const login = async (email: string, password: string) => {
//   //     console.log("login function called", email, password);
//   //   const response = await axios.post(
//   //     `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
//   //     {
//   //       email: email,
//   //       password: password,
//   //     }
//   //   );
//   //   console.log("res", response);
//   //   if (!response) return;

//   //   localStorage.setItem("user", JSON.stringify(response.data));
//   //   localStorage.setItem("accessToken", response.data.accessToken);

//   //   return response.data;
//   // };
//   const login = async (email: string, password: string): Promise<LoginResponse> => {
//   try {
//     const response = await axios.post<LoginResponse>(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
//       { email, password }
//     );
//     localStorage.setItem("user", JSON.stringify(response.data.user));
//     localStorage.setItem("accessToken", response.data.accessToken);
//     setUser(response.data.user);
//     return response.data;
//   } catch (error) {
//     console.error("Login failed:", error);
//     throw error;
//   }
// };


//   useEffect(() => {
//     const data = localStorage.getItem("accessToken");
//     const accessToken = data;

//     if (!accessToken) return;

//     const getCurrentUser = async () => {
//       try {
//         setLoading(true);
//         const { profile, user } = await getCurrentUserByAccessToken(
//           accessToken
//         );
//         setProfile(profile);
//         setUser(user);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     setLoading(false);

//     getCurrentUser();
//   }, [loading]);

//   const getCurrentUserByAccessToken = async (accessToken: string) => {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/current-user`,
//       {
//         headers: {
//           Authorization: `Bearer ${accessToken}`,
//         },
//       }
//     );
//     const data = await response.json();
//     return data as { user: User; profile: ProfileType | null };
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.clear();
//     router.push("/login");
//   };

//   return (
//     <UserContext.Provider value={{ user, login, loading, logout, profile }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
// export const useUser = () => useContext(UserContext);

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
        { email, password }
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

