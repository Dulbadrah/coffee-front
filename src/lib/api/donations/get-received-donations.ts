import { Donation } from "@/lib/types";

export const getReceivedDonations = async (username: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/received/${username}`
    );

    const { donations } = await response.json();

    return donations as Donation[];
  } catch (error) {
    console.log(error);
  }
};
