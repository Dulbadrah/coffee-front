import { AccountProfileStat } from "@/app/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";
import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";
import { Suspense } from "react";

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
        <Suspense fallback={<div>Loading profile stats…</div>}>
          <AccountProfileStat donations={donations} />
        </Suspense>
      </div>
    </div>
  );
}
export default HomePage