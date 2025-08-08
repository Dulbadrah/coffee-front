import { SideBar } from "@/components/SideBar";
import { ExploreHeader } from "./components/ExploreHeader";
import { getCreators } from "./_lib/get-creators";
import { CreateProfileCard } from "./components/CreateProfileCard";


const ExploreHome = async () => {
  const profiles = await getCreators();

  return (
    <div className="flex container  ml-30 mx-30 p-20 ">
      <SideBar />
      <div>
        <ExploreHeader/>
        {profiles?.map((profile) => (
          <CreateProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </div>
  );
};
export default ExploreHome