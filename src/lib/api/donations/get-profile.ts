export const getProfile = async (username: string) => {
  try {
    // URL зөв үүсч байгааг шалгах
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/profile/view/${encodeURIComponent(username)}`;
    console.log("Fetching profile from:", url);

    const response = await fetch(url);

    if (!response.ok) {
      console.error("API response not OK:", response.status, await response.text());
      return null;
    }

    const data = await response.json();

    // JSON дотор 'profile' байгаа эсэхийг шалгах
    if (!data || !data.profile) {
      console.error("Profile not found in API response:", data);
      return null;
    }

    console.log("✅ API profile:", data.profile);
    return data.profile;

  } catch (error) {
    console.error("❌ Error fetching profile:", error);
    return null;
  }
};
