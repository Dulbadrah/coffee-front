import { Donation } from "@/lib/types";
import { HomeCartCaruseil } from "./HomeCart";
type RecentSupportersProps = {
  donations?: Donation[];

};
export const HomeForSection = ({donations}:RecentSupportersProps) => {
  console.log("for",donations);
  
  return (
    <div className="flex flex-col gap-2 border-1 rounded-lg">
      {donations?.slice(0, 5)?.map(( donation ,index) => (
        <HomeCartCaruseil key={index} donation={donation} />
      ))}
    </div>
  );
};
