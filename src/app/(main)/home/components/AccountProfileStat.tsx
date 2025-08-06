"use client";

import { useEffect, useState } from "react";
import { HomeForSection } from "./HomeForSection";
import { HomeOneSection } from "./HomeOneSection";
import { HomeThreeSection } from "./HomeThreeSection";
import { HomeTwoSection } from "./HomeTwoSection";
import { Donation } from "@/lib/types";
import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";
type HomeDonation = {
  donations?: Donation[]
}

export const AccountProfileStat = ({ donations }: HomeDonation) => {
  console.log(donations)
  return (
    <div className="flex flex-col w-[840px] gap-6">
      <div className="border-1 rounded-lg">
        <HomeOneSection />
        <HomeTwoSection />
      </div>
      <HomeThreeSection />
      <div>
        <HomeForSection donations={donations} />
      </div>
    </div>
  );
};
