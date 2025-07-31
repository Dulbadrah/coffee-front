import Link from "next/link";
import { Button } from "./ui/button";

export const HomeButtons = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 w-[200px] rounded-b-full">
        <Link href={`/home`}>
          <Button variant="outline" className="flex hover:bg-secondary/80">
            Home
          </Button>
        </Link>
        <Link href={"/explore"}>
          <Button variant="outline" className="flex hover:bg-secondary/80">
            Explore
          </Button>
        </Link>
        <Link href={`/donation`}>
          <Button variant="outline" className="flex hover:bg-secondary/80">
            View-page
          </Button>
        </Link>
        <Link href={"/AccountSettings"}>
          <Button variant="outline" className="flex hover:bg-secondary/80">
            Account-Settings
          </Button>
        </Link>
      </div>
    </div>
  );
};
