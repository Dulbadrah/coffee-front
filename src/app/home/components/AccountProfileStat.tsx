import { HomeForSection } from "./HomeForSection";
import { HomeOneSection } from "./HomeOneSection";
import { HomeThreeSection } from "./HomeThreeSection";
import { HomeTwoSection } from "./HomeTwoSection";

export const AccountProfileStat = () => {
  const moduls = [
    {
      id: "1",
      name: "Thank you for being so awesome everyday! You always manage to brighten up my day when all I can contribute at the moment ",
      mount: "10$",
      date: "10 hours ago",
    },
    { id: "2", name: "", mount: "20$", date: "10 hours ago" },
    { id: "3", name: "threee", mount: "30$", date: "10 hours ago" },
    { id: "4", name: "for", mount: "12$", date: "10 hours ago" },
  ];
  return (
    // default
    <div className="flex flex-col gap-6 ">
      <div className="border-1 rounded-lg ">
        <HomeOneSection />
        <HomeTwoSection />
      </div>
      <HomeThreeSection />
      <div>
        <HomeForSection moduls={moduls} />
      </div>
    </div>
  );
};
{
}
