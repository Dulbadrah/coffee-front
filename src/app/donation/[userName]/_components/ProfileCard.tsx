"use client";

import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { DialogDemo } from "./Dialog";
import { RecentSupporters } from "./RecentSupporters";
import { Donation } from "@/lib/types";
import { UserContext } from "@/providers/UserProvider";

export default function ProfileCard() {
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
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-14 h-14 rounded-full overflow-hidden">
              <Image
                src={profile?.avatarImage || "/Profile.png"}
                alt={profile?.name || "/Profile.png"}
                fill
                className="object-cover"
              />
            </div>
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
