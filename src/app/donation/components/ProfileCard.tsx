"use client";

import { useEffect, useState } from "react";
import { DialogDemo } from "./Dialog";
import { RecentSupporters } from "./RecentSupporters";
import { Donation, ProfileType } from "@/lib/types";

type ProfileCardProps = {
  profile?: ProfileType;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [donations, setDonations] = useState<Donation[]>([]);
  console.log(profile);

  useEffect(() => {
    console.log("this: ", profile?.user.username);
    if (!profile?.user.username) return;
    const getReceivedDonations = async (username: string) => {
      try {
        const response = await fetch(
          `http://localhost:4200/donation/received/${username}`
        );

        const { donations } = await response.json();

        setDonations(donations as Donation[]);
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedDonations(profile?.user.username);
  }, [profile?.user.username]);

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{profile?.name}</h2>
            </div>

            <DialogDemo />
          </div>

          <div className="border mt-6 mb-6"></div>
          <div className="mb-4">
            <h3 className="font-medium mb-1">About {profile?.name}</h3>
            <p className="text-sm text-gray-600">{profile?.about}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-1">Social media URL</h3>
          <p className="text-sm text-blue-600 break-all">
            {profile?.socialMediaURL}
          </p>
        </div>
      </div>

      <div>
        <RecentSupporters donations={donations} />
      </div>
    </div>
  );
}
