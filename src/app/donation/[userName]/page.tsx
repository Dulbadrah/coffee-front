import { getProfile } from "@/lib/api/donations/get-profile";
import { BuySomeoneCoffee } from "./_components/BuySomeoneCoffee";
import CoverImage from "./_components/CoverImage";
import ProfileCard from "./_components/ProfileCard";
import { Profile } from "@/lib/types";



const DonationPage = async ({
  params,
}: {
  params: Promise<{ userName: string }>;
}) => {
  const { userName } =await  params;
  const profiles: Profile = await getProfile(userName);

  return (
    <div className="min-h-screen px-4">
      <CoverImage />
      <div className="max-w-5xl mx-auto -mt-16 relative z-10 p-4 grid md:grid-cols-2 gap-6">
        <ProfileCard profiles={profiles} />
        <BuySomeoneCoffee />
      </div>
    </div>
  );
};

export default DonationPage;

