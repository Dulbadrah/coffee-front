import { SideBar } from "@/components/SideBar";
import { ExploreHeader } from "./components/ExploreHeader";
import { getCreators } from "./_lib/get-creators";
import { CreateProfileCard } from "./components/CreateProfileCard";


const ExploreHome = async () => {
  const profiles = await getCreators();

  return (
    <div className="flex container mx-auto p-20 ml-30">
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