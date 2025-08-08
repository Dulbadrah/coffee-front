import { ProfileType } from "@/lib/types";

export const getCreators = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/explore`
    );

    const { profiles } = await response.json();

    return profiles as ProfileType[];
  } catch (error) {
    console.log(error);
  }
};
