// "use client";

import { Donation } from "@/lib/types";
import { UserContext } from "@/providers/UserProvider";
import { useContext } from "react";

export const getReceivedDonations = async (username: string) => {
  try {
    const response = await fetch(
      `http://localhost:4200/donation/received/${username}`
    );

    const { donations } = await response.json();

    return donations as Donation[];
  } catch (error) {
    console.log(error);
  }
};
