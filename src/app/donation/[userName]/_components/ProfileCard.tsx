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
  console.log(user?.profileCurrent?.user.username);
  useEffect(() => {
    if (!user?.profileCurrent?.name) return;
    const getReceivedDonations = async (username: string) => {
      try {
        const response = await fetch(
          `http://localhost:4200/donation/received/${user?.profileCurrent?.user?.username}`
        );

        const { donations } = await response.json();

        setDonations(donations as Donation[]);
      } catch (error) {
        console.log(error);
      }
    };

    getReceivedDonations(user?.profileCurrent?.name);
  }, [user?.profileCurrent?.name]);

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
              <h2 className="text-xl font-semibold">
                {user?.profileCurrent?.name}
              </h2>
            </div>

            <DialogDemo />
          </div>

          <div className="border mt-6 mb-6"></div>
          <div className="mb-4">
            <h3 className="font-medium mb-1">About {profile?.name}</h3>
            <p className="text-sm text-gray-600">
              {user?.profileCurrent?.about}
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-1">Social media URL</h3>
          <p className="text-sm text-blue-600 break-all">
            {user?.profileCurrent?.socialMediaURL}
          </p>
        </div>
      </div>

      <div>
        <RecentSupporters donations={donations} />
      </div>
    </div>
  );
}
