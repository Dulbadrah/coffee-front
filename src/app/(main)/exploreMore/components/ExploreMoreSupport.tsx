import { Button } from "@/components/ui/button";
import { Donation } from "@/lib/types";
import { Heart } from "lucide-react";

<<<<<<< Updated upstream:src/app/(main)/exploreMore/components/ExploreMoreSupport.tsx
export const ExploreMoreSupport = () => {
    const items = Array.from({ length: 4 });
  return (
    <div className="border-[1] rounded-sm w-full mt-8 left-6">
      <h1 className="font-semibold text-lg mt-7.5 ml-6">Recent Supporters</h1>
      <div className="flex ml-6 mt-4">
        <div>
          <Image src="/Profile.png" alt="Profile" width={40} height={40} />
        </div>
        <div className="ml-3">
          <div className="flex gap-4">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p>bouth $1 coffee</p>
          </div>
          <div>
            <p>Thank you for being so awesome everyday! </p>
          </div>
=======
type RecentSupportersProps = {
  donations?: Donation[];
  onSeeMoreClick: () => void;
};
export const ExploreMoreSupport = ({
  onSeeMoreClick,
  donations,
}: RecentSupportersProps) => {
  if (!donations)
    return (
      <div className="p-6 border rounded-lg shadow-sm bg-white">
        <h3 className="font-medium mb-4">Recent Supporters</h3>
        <div className="border rounded-lg p-4 flex flex-col  items-center justify-center text-sm">
          <span>
            <Heart className="fill-black" />
          </span>
          <span> Be the first one to support Jake</span>
>>>>>>> Stashed changes:src/app/(main)/[profileName]/_components/ExploreMoreSupport.tsx
        </div>
      </div>
    );
    console.log(donations);
    

  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h3 className="font-medium mb-4">Recent Supporters</h3>
      {donations.slice(0, 5).map((donation, index) => (
        <div key={index} className="flex items-center gap-3 mb-4 last:mb-0">
          <img src="/coffee.profile.jpg" className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <div className="font-semibold text-sm">
              {donation.donor?.username} bought ${donation?.amount} coffee
            </div>
            <div className="text-xs text-gray-500">
              {donation?.specialMessage}
            </div>
          </div>
        </div>
      ))}
      {donations.length <= 5 && (
        <Button
          onClick={onSeeMoreClick}
          className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 mt-4 text-sm"
        >
          See more
        </Button>
      )}
    </div>
  );
};
