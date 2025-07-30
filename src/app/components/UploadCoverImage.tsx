// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function UploadCoverImage() {
//   const [imageUrl, setImageUrl] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   const handleSave = async () => {
//     setImageUrl("");
//   };

//   const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;

//     const formData = new FormData();
//     formData.append("file", file);
//     formData.append("upload_preset", "images");

//     setLoading(true);
//     try {
//       const res = await fetch(
//         "https://api.cloudinary.com/v1_1/dqugs5a11/image/upload",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       const data = await res.json();
//       setImageUrl(data.secure_url);
//     } catch (err) {
//       console.error("Upload error:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="p-55">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="mb-4 block w-full text-sm text-gray-700 file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-2 file:cursor-pointer"
//       />

//       {loading && (
//         <p className="text-blue-600">Uploading... : "Add a Cover Photo"</p>
//       )}

//       {imageUrl && (
//         <div>
//           <Image
//             src={imageUrl}
//             alt="Uploaded cover"
//             layout="fill"
//             objectFit="cover"
//             className="transition-opacity "
//           />
//         </div>
//       )}
//     </div>
//   );
// }
