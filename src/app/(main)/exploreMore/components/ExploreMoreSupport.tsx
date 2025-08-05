import Image from "next/legacy/image";

export const ExploreMoreSupport = () => {
    const items = Array.from({ length: 4 });
  return (
    <div className="border-[1] rounded-sm w-full mt-8 left-6">
      <h1 className="font-semibold text-lg mt-7.5 ml-6">Recent Supporters</h1>
      <div className="flex ml-6 mt-4">
        <div>
          <Image src="/Profile.png" alt="Profile" width={40} height={40} />
        </div>
        <div className="ml-3">
          <div className="flex gap-4">
            <h2 className="text-lg font-semibold">John Doe</h2>
            <p>bouth $1 coffee</p>
          </div>
          <div>
            <p>Thank you for being so awesome everyday! </p>
          </div>
        </div>
      </div>
    </div>
  );
};
