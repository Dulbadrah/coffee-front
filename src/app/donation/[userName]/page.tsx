import { getProfile } from "@/lib/api/donations/get-profile";
import { BuySomeoneCoffee } from "./_components/BuySomeoneCoffee";
import CoverImage from "./_components/CoverImage";
import ProfileCard from "./_components/ProfileCard";

const DonationPage = async ({ params }: { params: { username: string } }) => {
  const profile = await getProfile("");
  const { username } = params;
  return (
    <div className=" min-h-screen px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};
export default DonationPage;
