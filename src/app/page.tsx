import { SideBar } from "@/components/SideBar";
import { AccountProfileStat } from "./home/components/AccountProfileStat";

export default function Home() {
  return (
    <div className="min-h-screen p-8 font-sans flex gap-6">
    <div><SideBar/>
    </div>
<div> <AccountProfileStat /></div>
    
  </div>
  );
}
