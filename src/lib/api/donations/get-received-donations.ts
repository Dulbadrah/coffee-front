import { Donation } from "@/lib/types";

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
