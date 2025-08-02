"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

export const HomeButtons = () => {
  const pathname = usePathname();

  const links = [
    { href: "/home", label: "Home" },
    { href: "/explore", label: "Explore" },
    { href: "/donation", label: "View-page" },
    { href: "/AccountSettings", label: "Account-Settings" },
  ];

  return (
    <div className="flex flex-col gap-2 w-[200px] rounded-b-full">
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          <Button
            variant="ghost"
            className={`flex justify-center transition-all duration-300 hover:bg-secondary/80 border-none  ${
              pathname === link.href ? "bg-secondary/80" : ""
            }`}
          >
            {link.label}
          </Button>
        </Link>
      ))}
    </div>
  );
};
