import { SideBar } from "@/components/SideBar";
import { AccountProfileStat } from "./(main)/home/components/AccountProfileStat";

export default function Home() {
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
}
