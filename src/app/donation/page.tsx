import { Donation } from "@/lib/types";
import { BuySomeoneCoffee } from "./components/BuySomeoneCoffee";
import CoverImage from "./components/CoverImage";
import ProfileCard from "./components/ProfileCard";

const getDonations = async (userId: number) => {
  try {
    const response = await fetch(
      `http://localhost:4200/donation/received/${userId}`
    );

    const { donations } = await response.json();

    return donations as Donation[];
  } catch (error) {
    console.log(error);
  }
};

const DonationPage = async () => {
  const donations = await getDonations(12);

  return (
    <div className=" min-h-screen px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard donations={donations} />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};
export default DonationPage;
