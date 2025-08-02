import { HomeButtons } from "@/components/Buttons";
import AccountPage from "./component/AccountPage";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex">
    <div >
      <SideBar />
    </div>
    <div>
      <AccountPage />
    </div>
  </div>
  );
}
