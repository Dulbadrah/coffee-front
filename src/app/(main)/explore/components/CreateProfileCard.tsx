import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ProfileType } from "@/lib/types";
import Link from "next/link";

type CreateProfileCardProps = {
  profile: ProfileType;
};

export const CreateProfileCard = ({ profile }: CreateProfileCardProps) => {
  const { avatarImage, name, about, socialMediaURL } = profile;
  return (
    <div className="border rounded-md w-[700px] flex flex-col mt-6 pb-4 shadow-sm">
      <div className="flex justify-between items-center mt-6 px-5">
        <div className="flex items-center gap-3">
          <div className="relative w-16 h-16">
            <Image
              src={avatarImage || "/Profile.png"}
              alt={name}
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-lg font-semibold">{name}</h2>
        </div>
        <Link href={`/profile/${profile.name}`}>
          <Button>View profile</Button>
        </Link>
      </div>
      
      <div className="flex mt-4 px-5 gap-6">
        <div className="w-1/2">
          <h2 className="font-semibold">About {name}</h2>
          <p className="text-sm text-gray-700">{about}</p>
        </div>
        <div className="w-1/2 break-words">
          <p className="font-semibold">Social media URL</p>
          <p className="text-sm text-blue-600 break-words">
            {socialMediaURL || "Not provided"}
          </p>
        </div>
      </div>
    </div>
  );
};
