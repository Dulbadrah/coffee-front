import { SideBar } from "@/components/SideBar";

export default function Home() {
  return (
    <div className="flex justify-between mx-30 p-20">
      <div>
        <SideBar />
      </div>
      <div className="text-8xl ">
        side bar darna uuu!
      </div>
    </div>
  );
}
