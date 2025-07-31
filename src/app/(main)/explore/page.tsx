import { SideBar } from "@/components/SideBar";
import { ExploreHeader } from "./components/ExploreHeader";
import { ExploreLeft } from "./components/ExploreLeft";
// import { ExploreMain } from "./components/ExploreMain"

const ExploreHome = () => {
  return (
    <div className="flex mt-45 ml-[403px]">
      <SideBar />
      <div>
        <ExploreHeader />
        {/* <ExploreMain/> */}

        <ExploreLeft />
      </div>
    </div>
  );
};
export default ExploreHome;
