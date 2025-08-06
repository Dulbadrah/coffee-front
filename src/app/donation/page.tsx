import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";
import { BuySomeoneCoffee } from "./components/BuySomeoneCoffee";
import CoverImage from "./components/CoverImage";
import ProfileCard from "./components/ProfileCard";

const DonationPage = async () => {
  const donations = await getReceivedDonations("duluu");
 

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
