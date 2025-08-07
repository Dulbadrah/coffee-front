import { AccountProfileStat } from "@/app/(main)/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";
import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";

const HomePage = async () => {
  const donations = await getReceivedDonations("");
  return (
    <div className="flex justify-between mx-30 p-20">
      <div>
        <SideBar />
      </div>
      <div>
        {" "}
        <AccountProfileStat donations={donations} />
      </div>
    </div>
  );
};
export default HomePage;
