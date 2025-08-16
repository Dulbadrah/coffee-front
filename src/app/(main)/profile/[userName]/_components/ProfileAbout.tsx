import Image from "next/legacy/image";

type ProfileAboutProps = {
  name: string;
  about: string;
  img:string
};

export const ProfileAbout = ({ name, about,img }: ProfileAboutProps) => {
  return (
    <div className="w-full h-[273px]  border-[1] bg-white p-4 rounded-sm">
      <div className="flex items-center gap-3 mb-6">
        <Image src={img||"/Profile"} alt="Profile" width={40} height={40} />
        <h1 className="text-black font-semibold">{name}</h1>
      </div>

      <div className="w-full h-px bg-gray-300 mb-4 mt-4" />

      <div className="mt-2 mb-6">
        <h2 className="text-lg font-semibold mb-1">About {name}</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          {about}
        </p>
      </div>
    </div>
  );
};
