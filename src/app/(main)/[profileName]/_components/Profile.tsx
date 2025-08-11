"use client";

import { ProfileAbout } from "./ProfileAbout";
import { Donation, ProfileType } from "@/lib/types";
import { SocialProfile } from "./SocialProfile";
import { ExploreMoreRight } from "./ExploreMoreRight";
import { RecentSupporters } from "@/app/donation/[userName]/_components/RecentSupporters";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/providers/UserProvider";
import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";

type ProfileProps = {
  profile: ProfileType;
};

export const ProfileComponent = ({ profile }: ProfileProps) => {
  const [donations, setDonations] = useState<Donation[]>([]);

  useEffect(() => {
    if (!profile?.name) return;
    const getReceivedDonations = async (username: string) => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/received/${profile?.name}`
        );

        const { donations } = await response.json();

        setDonations(donations as Donation[]);
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedDonations(profile?.name);
  }, [profile?.name]);

  const { user } = useContext(UserContext);
  return (
    <div className="relative">
      <img src="/frame.png" alt="frame" width={"100%"} height="100%" />

      <div className="absolute z-50 top-60 flex w-full gap-8 p-4">
        <div className="flex-1/2 ">
          <ProfileAbout
            name={profile?.name}
            about={profile?.about}
            img={profile?.avatarImage}
          />
          <div className="mb-4">
            <SocialProfile url={profile?.socialMediaURL} />
          </div>
          <div className="mb-4">
            <RecentSupporters donations={donations} />
          </div>
        </div>
        <div className="flex-1/2">
          <ExploreMoreRight />
        </div>
      </div>
    </div>
  );
};
