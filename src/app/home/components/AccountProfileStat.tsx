"use client";

import { useEffect, useState } from "react";
import { HomeForSection } from "./HomeForSection";
import { HomeOneSection } from "./HomeOneSection";
import { HomeThreeSection } from "./HomeThreeSection";
import { HomeTwoSection } from "./HomeTwoSection";

export const AccountProfileStat = () => {
  const [moduls, setModuls] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = 11;
        const response = await fetch(
          `http://localhost:4200/donation/total${userId}`
        );
        const data = await response.json();
        setModuls(data);
      } catch (error) {
        console.error("Алдаа гарлаа:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="border-1 rounded-lg">
        <HomeOneSection />
        <HomeTwoSection moduls={moduls} />
      </div>
      <HomeThreeSection />
      <div>
        <HomeForSection />
      </div>
    </div>
  );
};
