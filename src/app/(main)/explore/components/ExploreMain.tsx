import Image from "next/legacy/image";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export const ExploreMain = () => {
  return (
    <div className="flex gap-[545px] items-center w-full max-w-5xl mt-6">
      <div className="flex items-center gap-3">
        <Image src="/Profile.png" alt="Profile" width={40} height={40} />
        <h1 className="text-black font-semibold">Space ranger</h1>
      </div>
      <div>
        <Link href="/exploreMore">
          <div className="flex items-center gap-1 cursor-pointer rounded-sm p-2 bg-[rgba(244,244,245,1)]">
            <p className="text-black text-lg">View profile</p>
            <ExternalLink size={20} className="text-black" />
          </div>
        </Link>
      </div>
    </div>
  );
};
