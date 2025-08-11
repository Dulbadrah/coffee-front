import { ProfileComponent } from "./_components/Profile";
import { getProfile } from "../../../lib/api/donations/get-profile";

type ProfilePageProps = {
  params: Promise<{ profileName: string }>;
};

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { profileName } = await params;

  const profile = await getProfile(profileName);

  if (!profile) return <h1>user not found</h1>;

  return (
    <div className="container mx-auto">
      <ProfileComponent profile={profile} />
    </div>
  );
}
