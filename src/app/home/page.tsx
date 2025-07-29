import { AccountProfileStat } from "@/app/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex ml-30 md:max-w-[1640px] justify-between">
      <SideBar />
      <AccountProfileStat />
    </div>
  );
}
