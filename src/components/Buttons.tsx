import Link from "next/link";

export const HomeButtons = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 w-[200px] rounded-b-full">
        <Link href={`/home`}>
          <button className="flex hover:bg-secondary/80">Home</button>
        </Link>
        <button className="flex hover:bg-secondary/80">explore</button>
        <button className="flex hover:bg-secondary/80">view-page</button>
        <button className="flex hover:bg-secondary/80">Account-Settings</button>
      </div>
    </div>
  );
};
