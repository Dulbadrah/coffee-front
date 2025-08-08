import { ProfileType } from "@/lib/types";

export const getCreators = async () => {
  try {
    const response = await fetch(`http://localhost:4200/profile/explore`);

    const { profiles } = await response.json();
    

    return profiles as ProfileType[];
  } catch (error) {
    console.log(error);
  }
};
