import { Profile } from "@/lib/types";

export const getProfile = async (profileName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${profileName}`
    );
    console.log(response);
    const { profileData } = await response.json();

    return profileData as Profile;
  } catch (error) {
    console.log(error);
  }
};
