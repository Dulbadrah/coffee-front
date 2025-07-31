import { User2 } from "lucide-react";
import { Items } from "../type";
  type Creator = {
  title: string;
  text: string;
};


type ExploreCreatorListProps = {
  creators: Creator[];
};

export const ExploreCreatorList = ({ creators }:ExploreCreatorListProps) => {
  return (
    <div className="mt-8">
      {creators.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-gray-500 mt-12">
          <User2 size={48} className="mb-2" />
          <p className="text-lg font-medium">No creators have signed up yet</p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {creators.map((creator, index) => (
            <div key={index} className="p-4 border rounded-lg">
              <h3 className="text-black font-semibold">{creator.title}</h3>
              <p className="text-sm text-gray-600">{creator.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
