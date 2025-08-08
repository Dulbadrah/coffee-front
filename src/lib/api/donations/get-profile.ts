// import { Profile } from "@/lib/types";

// export const getProfile = async (profileName: string) => {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${profileName}`
//     );
//     console.log(response);
//     const { profileData } = await response.json();

//     return profileData as Profile;
//   } catch (error) {
//     console.log(error);
//   }
// };


export const getProfile = async (profileName: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${profileName}`
    );

    if (!response.ok) {
      console.error("API response not OK:", response.status);
      return null;
    }

    const { profile } = await response.json();
    console.log("✅ API profile:", profile);

    return profile;
  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    return null;
  }
};

