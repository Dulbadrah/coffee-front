"use client";

import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";
import { usePathname } from "next/navigation";

export const Header = () => {
  const { user, logout } = useContext(UserContext);
  const { profile } = useContext(UserContext);
  const pathName = usePathname();

  if (pathName === "/login" || pathName === "/signup") return null;

  return (
    <div>
      <div className="flex justify-between px-10 py-4">
        <div className="flex gap-3">
          <div className="pt-1.5">
            <Link href={"/"}>
              <Coffee />
            </Link>
          </div>
          <div className="pt-1.5">Buy Me Coffee</div>
        </div>
        <div className="flex gap-6">
          <img src={profile?.avatarImage} className="w-[40px] h-[40px] rounded-full mx-auto border-4 object-cover"></img>

          <div className="pt-1.5">{profile?.name}</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Login</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                  <DropdownMenuRadioItem value="" onClick={logout}>
                    logout
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
