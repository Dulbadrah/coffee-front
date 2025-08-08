"use client";

import { useContext, useEffect, useState } from "react";
import { DialogDemo } from "./Dialog";
import { RecentSupporters } from "./RecentSupporters";
import { Donation, ProfileType } from "@/lib/types";
import { UserContext } from "@/providers/UserProvider";

type ProfileCardProps = {
  profile?: ProfileType;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  const [donations, setDonations] = useState<Donation[]>([]);

  const { user } = useContext(UserContext);
  console.log(user?.user.username);
  useEffect(() => {
    if (!user?.name) return;
    const getReceivedDonations = async (username: string) => {
      try {
        const response = await fetch(
          `http://localhost:4200/donation/received/${user?.user?.username}`
        );

        const { donations } = await response.json();

        setDonations(donations as Donation[]);
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedDonations(user?.name);
  }, [user?.name]);

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src={user?.avatarImage}
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{user?.name}</h2>
            </div>

            <DialogDemo />
          </div>

          <div className="border mt-6 mb-6"></div>
          <div className="mb-4">
            <h3 className="font-medium mb-1">About {profile?.name}</h3>
            <p className="text-sm text-gray-600">{user?.about}</p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-1">Social media URL</h3>
          <p className="text-sm text-blue-600 break-all">
            {user?.socialMediaURL}
          </p>
        </div>
      </div>

      <div>
        <RecentSupporters donations={donations} />
      </div>
    </div>
  );
}
