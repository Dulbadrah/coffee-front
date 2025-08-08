// import CoverImageUploader from "@/utils/ImageCloudinary";

// export default function CoverImage() {
//   const handleCoverSave = (imageUrl: string) => {
//     console.log("Saved image URL:", imageUrl);
//     // Энэ хэсэгт API-р хадгалах логик орж болно
//   };

//   return (
//     <div className="h-110 bg-gray-200 rounded-lg relative flex justify-center">
//       <CoverImageUploader onSave={handleCoverSave} />
//     </div>
//   );
// }
"use client";
import axios from "axios";
import CoverImageUploader from "@/utils/ImageCloudinary";
import { useContext } from "react";
import { UserContext } from "@/providers/UserProvider";

export default function CoverImage() {
  const { user } = useContext(UserContext);

  const handleCoverSave = async (imageUrl: string) => {
    if (!user?.profileCurrent?.id) {
      alert("Профайл ID олдсонгүй");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:4200/profile/${user.profileCurrent.id}/cover`,
        { coverImage: imageUrl },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      console.log("Cover image updated:", response.data);
      alert("Cover зураг амжилттай хадгалагдлаа!");
    } catch (error) {
      console.error("Error saving cover image:", error);
      alert("Зураг хадгалахад алдаа гарлаа");
    }
  };

  return (
    <div className="h-110 bg-gray-200 rounded-lg relative flex justify-center">
      <CoverImageUploader onSave={handleCoverSave} />
    </div>
  );
}
