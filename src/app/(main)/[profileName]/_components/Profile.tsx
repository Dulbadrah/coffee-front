"use client";

import { ProfileAbout } from "./ProfileAbout";
import { Donation, ProfileType } from "@/lib/types";
import { SocialProfile } from "./SocialProfile";
import { ExploreMoreRight } from "./ExploreMoreRight";

type ProfileProps = {
  profile: ProfileType;
  donations: Donation[];

};

export const ProfileComponent = ({
  profile,
  donations
}: ProfileProps) => {
  return (
    <div className="relative">
      <img src={profile.backgroundImage||"$/frame.png"} alt="frame" width={"100%"} height="100%" />

      <div className="absolute z-50 top-60 flex w-full gap-8 p-4">
        <div className="flex-1/2">
          <ProfileAbout
            name={profile?.name}
            about={profile.about}
            img={profile.avatarImage}
          />
          <SocialProfile url={profile.socialMediaURL} />
        </div>
        <div className="flex-1/2">
          <ExploreMoreRight />
        </div>
      </div>
    </div>
  );
};
