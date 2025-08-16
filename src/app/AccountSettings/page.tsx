
import AccountPage from "./component/AccountPage";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex justify-between mx-30 p-20 ">
      <div>
        <SideBar />
      </div>
      <div>
        <AccountPage />
      </div>
    </div>
  );
}
