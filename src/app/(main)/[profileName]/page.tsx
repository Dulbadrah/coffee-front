import { Profile } from "./_components/Profile";
import { getProfile } from "./_lib/get-profile";


type ProfilePageProps = {
  params: Promise<{ profileName: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileName } = await params;

  const profile = await getProfile(profileName);

  if(!profile) return <h1>user not found</h1>

  return (
    <div className="container mx-auto">
      <Profile profile={profile} donations={[]}  />
    </div>
  );
}
