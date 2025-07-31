import { HomeButtons } from "@/components/Buttons";
import AccountPage from "./component/AccountPage";
import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="">
      <SideBar />
      <AccountPage />
    </div>
  );
}
