import { SideBar } from "@/components/SideBar";
import { AccountProfileStat } from "./home/components/AccountProfileStat";

export default function Home() {
  return (
    <div className="flex ml-30 md:max-w-[1640px] justify-between">
      <SideBar />
      <AccountProfileStat />
    </div>
  );
}
