import { Profile } from "@/lib/types";

export const getProfile = async (profileName: string) => {
  try {
    const response = await fetch(
      `http://localhost:4200/profile/view/${profileName}`
    );
    const { profile } = await response.json();

    return profile as Profile;
  } catch (error) {
    console.log(error);
  }
};
