import Image from "next/legacy/image";
import { ExploreMoreLeft } from "./ExploreMoreLeft";
import { ExploreUrl } from "./ExploreUrl";
import { ExploreMoreRight } from "./ExploreMoreRight";
 
export const ExploreBgImg = () => {
  return (
    <div className="relative">
      <Image
        src="/frame.png"
        alt="Profile"
        layout="responsive"
        width={1440}
        height={319}
      />
 
    
      <ExploreMoreLeft />
      <ExploreUrl/>
      <ExploreMoreRight/>
    </div>
  );
};
 