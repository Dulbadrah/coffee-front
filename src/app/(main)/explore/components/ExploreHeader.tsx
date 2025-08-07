 import { Search } from "lucide-react"; 

export const ExploreHeader = () => {
  return (
    <div className="text-black">
      <h2 className="mb-4 text-xl font-semibold">Explore creators</h2>
      
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />

        <input
          type="text"
          placeholder="Search name"
          className="pl-10 pr-4 py-2 w-full border border-neutral-400 rounded-md text-black focus:outline-none"
        />
      </div>
    </div>
  );
};