import Image from "next/legacy/image";
import { ExploreMoreLeft } from "./ExploreMoreLeft";
import { ExploreUrl } from "./ExploreUrl";
import { ExploreMoreRight } from "./ExploreMoreRight";

export const ExploreBgImg = () => {
  return (
    <div className="relative">
      <img src="/frame.png" alt="frame" width={"100%"} height="100%" />

      <div className="absolute z-50 top-36 left-5 flex w-full gap-8 p-4">
        <div className="flex-1/2">
          <ExploreMoreLeft />
          <ExploreUrl />
        </div>
        <div className="flex-1/2">

        <ExploreMoreRight />
        </div>
      </div>
    </div>
  );
};
