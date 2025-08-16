"use client";

import { Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import { usePathname } from "next/navigation";
import { UserContext } from "@/providers/UserProvider";

export const Header = () => {
  const { logout, profile, user } = useContext(UserContext);
  const pathName = usePathname();

  // Login/signup page-д Header-г харуулахгүй
  if (pathName === "/login" || pathName === "/signup") return null;

  return (
    <div className="bg-white shadow-sm">
      <div className="flex justify-between px-10 py-4 items-center">
        <div className="flex gap-3 items-center">
          <Link href="/" className="flex items-center gap-1">
            <Coffee />
            <span className="font-semibold">Buy Me Coffee</span>
          </Link>
        </div>

        <div className="flex gap-6 items-center">
          {/* Profile Image */}
          <div className="relative w-[40px] h-[40px] rounded-full border-2 overflow-hidden">
            <Image
              src={profile?.avatarImage || "/Profile.png"}
              alt={profile?.name || "Profile avatar"}
              fill
              className="object-cover"
            />
          </div>

          {/* Name */}
          <div>{profile?.name || "Guest"}</div>

          {/* Dropdown */}
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {profile ? "Account" : "Login"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator />
                {profile ? (
                  <DropdownMenuRadioGroup>
                    <DropdownMenuRadioItem value="" onClick={logout}>
                      Logout
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                ) : (
                  <Link href="/login" className="block p-2">
                    Go to Login
                  </Link>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
};
