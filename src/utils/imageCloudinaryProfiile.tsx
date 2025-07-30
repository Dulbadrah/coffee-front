"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type CoverImageUploaderProps = {
  onSave: (url: string) => void;
};
export default function CoverImageUploaderProfile({
  onSave,
}: CoverImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const coverUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE || "";
  const handleSave = () => {
    if (imageUrl) {
      onSave(imageUrl);
    }
  };

  const handleCancel = () => {
    setImageUrl(null);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "images");

    setLoading(true);
    try {
      const res = await fetch(
        coverUrl,
        // user iin cover image ees zurgiig solih
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();

      if (data.secure_url) {
        setImageUrl(data.secure_url);
      }
    } catch (error) {
      console.error("Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full">
      {/* cover image preview */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      )}

      {/* if image is selected, show Save/Cancel; otherwise, show Add button */}
      {!imageUrl ? (
        <div className="w-24 h-24 rounded-full mx-auto border-4 object-cover">
          <button onClick={handleImageClick}>
            {loading ? "Uploading..." : "change image"}
          </button>
        </div>
      ) : (
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={handleSave}
            className="bg-black text-white px-3 py-1 text-sm rounded hover:bg-gray-900"
          >
            Save Changes
          </button>
          <button
            onClick={handleCancel}
            className="bg-white text-gray-700 border border-gray-300 px-3 py-1 text-sm rounded hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      )}

      {/* hidden file input */}
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        className="hidden"
      />
    </div>
  );
}
