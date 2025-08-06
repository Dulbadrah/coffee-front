"use client";

import CoverImageUploader from "@/utils/ImageCloudinary";

export default function CoverImage() {
  const handleCoverSave = (imageUrl: string) => {
    console.log("Saved image URL:", imageUrl);
    // Энэ хэсэгт API-р хадгалах логик орж болно
  };

  return (
    <div className="h-110 bg-gray-200 rounded-lg relative flex justify-center">
      <CoverImageUploader onSave={handleCoverSave} />
    </div>
  );
}
