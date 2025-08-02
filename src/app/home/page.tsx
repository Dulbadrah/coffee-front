import { AccountProfileStat } from "@/app/home/components/AccountProfileStat";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex ">
      <div><SideBar/>
      </div>
  <div> <AccountProfileStat /></div>
      
    </div>
  );
}
