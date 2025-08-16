"use client";

import { ProfileAbout } from "./ProfileAbout";
import { Donation, ProfileType } from "@/lib/types";
import { SocialProfile } from "./SocialProfile";
import { RecentSupporters } from "@/app/donation/[userName]/_components/RecentSupporters";
import { useEffect, useState } from "react";


type ProfileProps = {
  profile: ProfileType;
};

export const ProfileComponent = ({ profile }: ProfileProps) => {
  const [donations, setDonations] = useState<Donation[]>([]);

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
    <div className="max-w-5xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">
      {/* Left side */}
      <div className="md:col-span-2 space-y-6">
        <div className="border rounded-2xl p-6 shadow-sm bg-white">
          <ProfileAbout
            name={profile?.name}
            about={profile?.about}
            img={profile?.avatarImage}
          />
        </div>

        <div className="border rounded-2xl p-6 shadow-sm bg-white">
          <SocialProfile url={profile?.socialMediaURL} />
        </div>

        <div className="border rounded-2xl p-6 shadow-sm bg-white">
          <RecentSupporters donations={donations} />
        </div>
      </div>

      {/* Right side */}
      <div className="md:col-span-1 space-y-6">
        <div className="border rounded-2xl p-6 shadow-sm bg-white">
          {/* <ExploreMoreRight /> */}
        </div>
      </div>
    </div>
  );
};
