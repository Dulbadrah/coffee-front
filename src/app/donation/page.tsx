import { getReceivedDonations } from "@/lib/api/donations/get-received-donations";
import { BuySomeoneCoffee } from "./components/BuySomeoneCoffee";
import CoverImage from "./components/CoverImage";
import ProfileCard from "./components/ProfileCard";
import { getProfile } from "../../lib/api/donations/get-profile";

const DonationPage = async () => {
  const donations = await getReceivedDonations("tulgaa");
  const profile = await getProfile("tulgaa");
  console.log(profile);
  return (
    <div className=" min-h-screen px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard donations={donations} profile={profile} />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};
export default DonationPage;
