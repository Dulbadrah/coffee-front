"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogDemo } from "./Dialog";
import { Heart } from "lucide-react";
import { RecentSupporters } from "./RecentSupporters";
import { Donation } from "@/lib/types";

const handleSeeMore = () => {
  alert("See more supporters clicked!");
};

type ProfileCardProps = {
  donations?: Donation[];
};

export default function ProfileCard({ donations }: ProfileCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="w-14 h-14 rounded-full"
            />
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Jake</h2>
            </div>

            <DialogDemo />
          </div>

          <div className="border mt-6 mb-6"></div>
          <div className="mb-4">
            <h3 className="font-medium mb-1">About Jake</h3>
            <p className="text-sm text-gray-600">
              I'm a typical person who enjoys exploring different things. I also
              make music art as a hobby. Follow me along.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <div className="p-6 border rounded-lg">
          <h3 className="font-medium mb-1">Social media URL</h3>
          <p className="text-sm text-blue-600">
            https://buymeacoffee.com/spacerulz44
          </p>
        </div>
      </div>

      <div>
        {/* <div className="border rounded-lg p-4 flex flex-col  items-center justify-center text-sm">
          <span>
            {" "}
            <Heart className="fill-black" />
          </span>
          <span> Be the first one to support Jake</span>
        </div> */}
        <RecentSupporters
          donations={donations}
          onSeeMoreClick={handleSeeMore}
        />
      </div>
    </div>
  );
}
