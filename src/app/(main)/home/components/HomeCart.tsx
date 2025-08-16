import Image from "next/image";
import { Donation } from "@/lib/types";
import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

type HomeCart = {
  donation: Donation;
};

export const HomeCartCaruseil = ({ donation }: HomeCart) => {
  const { profile } = useContext(UserContext);

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex justify-between">
        <div className="flex gap-3">
          <div className="relative w-[40px] h-[40px] rounded-full border-4 overflow-hidden">
            <Image
              src={profile?.avatarImage || "/Profile.png"}
              alt="/Avatar.png"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div>{donation.donor.username}</div>
            <div>{donation.donor.email}</div>
          </div>
        </div>
        <div>
          <div>{donation.amount}$</div>
          <div>{new Date(donation.donor.createdAt).toLocaleDateString()}</div>
        </div>
      </div>
      <div className="max-w-[650px]">comment: {donation.specialMessage}</div>
    </div>
  );
};
