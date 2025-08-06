import { AccountProfileStat } from "@/app/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";
import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";

const HomePage = async () => {
  const donations = await getReceivedDonations("koko");
  console.log(donations)
  return (
    <div className="flex justify-between mx-30 p-20">
      <div>
        <SideBar />
      </div>
      <div >
        {" "}
        <AccountProfileStat donations={donations} />
      </div>
    </div>
  );
}
export default HomePage