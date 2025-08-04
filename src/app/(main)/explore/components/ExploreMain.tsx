import Image from "next/legacy/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const ExploreMain = () => {
  return (
    <div className="flex gap-[545px] items-center w-full max-w-5xl mt-6">
      
      <div className="flex items-center gap-3">
        <Link href="/exploreMore">
        <Image src="/Profile.png" alt="Profile" width={40} height={40} />
        <h1 className="text-black font-semibold">Space ranger</h1>
        </Link>
      </div>

      <div className="flex items-center gap-1 cursor-pointer">
        <p className="text-black">View profile</p>
        <ExternalLink size={16} className="text-black" />
      </div>
    </div>
  );
};
