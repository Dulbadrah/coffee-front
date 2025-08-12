import { AccountProfileStat } from "@/app/(main)/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";

const HomePage = async () => {
  
  return (
    <div className="flex justify-between mx-30 p-20">
      <div>
        <SideBar />
      </div>
      <div>
        {" "}
        <AccountProfileStat />
      </div>
    </div>
  );
};
export default HomePage;
