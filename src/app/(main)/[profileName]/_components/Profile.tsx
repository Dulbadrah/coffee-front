import { ProfileAbout } from "./ProfileAbout";
import { ExploreMoreRight } from "./ExploreMoreRight";
import { Donation, ProfileType } from "@/lib/types";
import { SocialProfile } from "./SocialProfile";
import { ExploreMoreSupport } from "./ExploreMoreSupport";

type ProfileProps = {
  profile: ProfileType;
  donations: Donation[];
};

export const Profile = ({ profile ,donations}: ProfileProps) => {
    const handleSeeMore = () => {
    console.log("See more clicked!");
  };
  return (
    <div className="relative">
      <img src="/frame.png" alt="frame" width={"100%"} height="100%" />

      <div className="absolute z-50 top-60 flex w-full gap-8 p-4">
        <div className="flex-1/2">
          <ProfileAbout name={profile?.name} about={profile.about} img={profile.avatarImage} />
          <SocialProfile url={profile.socialMediaURL}/>
          <ExploreMoreSupport donations={donations}
          onSeeMoreClick={handleSeeMore}/>
        </div>
        <div className="flex-1/2">
          {/* <ExploreMoreRight name={profile?.name} url={profile.socialMediaURL}/> */}
        </div>
      </div>
    </div>
  );
};
