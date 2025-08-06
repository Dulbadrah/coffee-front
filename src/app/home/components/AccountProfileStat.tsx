"use client";

import { useState, useEffect } from "react";
import { HomeForSection } from "./HomeForSection";
import { HomeOneSection } from "./HomeOneSection";
import { HomeThreeSection } from "./HomeThreeSection";
import { HomeTwoSection } from "./HomeTwoSection";

export const AccountProfileStat = () => {
  const [user, setUser] = useState([]);

  const getCurrentUserByAccessToken = async (accessToken: string | null) => {
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

  useEffect(() => {
    // const cartItems = localStorage.getItem("user");
    const accessToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NTQ0NDc0MDYsInBheWxvYWQiOnsiZW1haWwiOiJkdWxAZ21haWwuY29tIiwidXNlcklkIjozMH0sImlhdCI6MTc1NDQ0MzgwNn0.MElu739zpUxHdbhPcz54VI7DtWpHMnzu3R6xcL2xK8I
 `;

    const getCurrentUser = async () => {
      const userData = await getCurrentUserByAccessToken(accessToken);
      console.log("userData", userData);
      setUser(userData);
    };
    getCurrentUser();
  }, []);
  console.log(user);
  return (
    <div className="flex flex-col gap-6">
      <div className="border-1 rounded-lg">
        <HomeOneSection />
        <HomeTwoSection />
      </div>
      <HomeThreeSection />
      <div>
        <HomeForSection moduls={user} />
      </div>
    </div>
  );
};
