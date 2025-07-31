import Image from "next/legacy/image";
 
export const ExploreMoreLeft = () => {
  return (
    <div className="w-[632px] h-[273px] absolute top-[369px] left-20 border-[1] bg-white p-4 rounded-sm">
      <div className="flex items-center gap-3 mb-6">
        <Image src="/Profile.png" alt="Profile" width={40} height={40} />
        <h1 className="text-black font-semibold">Space ranger</h1>
      </div>
 
      <div className="w-full h-px bg-gray-300 mb-4 mt-4" />
 
      <div className="mt-2 mb-6">
        <h2 className="text-lg font-semibold mb-1">About Space ranger</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          All day, every day, we're watching, listening to, reading and
          absorbing politics. It's exhausting. We then report on what we've seen
          in a way that's as chill as possible. None of the sensationalism and
          division you'll find elsewhere. It's about clarity, focus,
          approachability, and having a little wry smile almost all the time.
        </p>
      </div>
    </div>
  );
};