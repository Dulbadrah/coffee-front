import { Button } from "@/components/ui/button";
import { ProfileType } from "@/lib/types";
import Link from "next/link";

type CreateProfileCardProps = {
  profile: ProfileType;
};

export const CreateProfileCard = ({ profile }: CreateProfileCardProps) => {
  const { avatarImage, name, about, socialMediaURL } = profile;
  return (
    <div className="border-[1] rounded-sm w-full flex flex-col mt-6 pb-4">
      <div className="flex justify-between mt-6">
        <div className="ml-5">
          <img src={avatarImage || "/Profile.png"} />
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <div>
        <Link href={profile.name}>
        <Button className="mr-5">View profile</Button>
        </Link>
        </div>
      </div>
      <div className="flex mt-2">
        <div className="w-1/2 ml-5">
          <h2 className="font-semibold">About {name}</h2>
          <p>{about}</p>
        </div>
        <div className="flex flex-col  break-words max-w-1/2 ">
          <p className="font-semibold">Social media URL</p>
          <p className="break-words text-sm">{socialMediaURL}</p>
        </div>
      </div>
    </div>
  );
};
