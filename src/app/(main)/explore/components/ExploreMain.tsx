import Image from "next/legacy/image";
export const ExploreMain = () => {
  return (
    <div className="flex">
      <Image src="/Profile.png" alt="Profile" width={40} height={40} />
      <div className="flex">
        <p className="text-black">View profile</p>
        <Image src="/external-link (1).png" alt="external" width={16} height={16} />
      </div>
    </div>
  );
};
