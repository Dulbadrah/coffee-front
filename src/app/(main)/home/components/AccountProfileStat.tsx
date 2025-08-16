"use client";

import { useContext, useEffect, useState } from "react";
import { HomeForSection } from "./HomeForSection";
import { HomeOneSection } from "./HomeOneSection";
import { HomeThreeSection } from "./HomeThreeSection";
import { HomeTwoSection } from "./HomeTwoSection";
import { Donation } from "@/lib/types";
import { UserContext } from "@/providers/UserProvider";

export const AccountProfileStat = () => {
  const [donations, setDonations] = useState<Donation[]>([]);
  const { profile } = useContext(UserContext);

  useEffect(() => {
    if (!profile?.name) return;

    const getReceivedDonations = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/received/${profile.name}`
        );

        const { donations } = await response.json();
        setDonations(donations as Donation[]);
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedDonations();
  }, [profile?.name]);

  return (
    <div className="flex flex-col w-[840px] gap-6">
      <div className="border-1 rounded-lg">
        <HomeOneSection />
        <HomeTwoSection />
      </div>
      <HomeThreeSection />
      <div>
        <HomeForSection donations={donations} />
      </div>
    </div>
  );
};
