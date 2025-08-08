"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Camera } from "lucide-react";

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
      const res = await fetch(coverUrl, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      console.log(data.secure_url);
      if (data.secure_url) {
        setImageUrl(data.secure_url);
        onSave(data.secure_url);
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

      {!imageUrl ? (
        <div className=" w-24 h-24 rounded-full mx-auto border-4 object-cover">
          <div className="flex items-center justify-center h-full">
            <Camera onClick={handleImageClick}>
              {loading ? "Uploading..." : "Add Cover Image"}
            </Camera>
          </div>
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
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
