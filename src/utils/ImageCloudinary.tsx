"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { CameraIcon } from "lucide-react";

type CoverImageUploaderProps = {
  onSave: (url: string) => void;
};
export default function CoverImageUploader({
  onSave,
}: CoverImageUploaderProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const coverUrl = process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE || "";
  const handleSave = () => {
    if (imageUrl) {
      onSave(imageUrl);
      setIsSaved(true);
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
        setIsSaved(false);
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
      {imageUrl && isSaved ? (
        <div className="absolute top-4 right-4">
          <button
            onClick={handleImageClick}
            className=" flex justify-center bg-white text-gray-700 px-4 py-2 text-sm rounded shadow hover:bg-gray-100"
          >
            <CameraIcon /> Change photo
          </button>
        </div>
      ) : !imageUrl ? (
        <div className="flex justify-center items-center h-60">
          <button
            onClick={handleImageClick}
            disabled={loading}
            className="bg-white text-sm text-gray-700 px-4 py-2 rounded shadow hover:bg-gray-100"
          >
            {loading ? "Uploading..." : "Add a cover image"}
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
