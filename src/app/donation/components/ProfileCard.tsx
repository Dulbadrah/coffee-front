"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DialogDemo } from "./Dialog";

const amounts = [1, 2, 5, 10];

export default function ProfileCard() {
  return (
    <div className="bg-white rounded-xl p-6 shadow">
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

      <div className="mb-4">
        <h3 className="font-medium mb-1">About Jake</h3>
        <p className="text-sm text-gray-600">
          I'm a typical person who enjoys exploring different things. I also
          make music art as a hobby. Follow me along.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-1">Social media URL</h3>
        <p className="text-sm text-blue-600">
          https://buymeacoffee.com/spacerulz44
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-1">Recent Supporters</h3>
        <div className="border rounded-lg p-4 flex items-center justify-center text-gray-500 text-sm">
          <span>🖤 Be the first one to support Jake</span>
        </div>
      </div>
    </div>
  );
}
