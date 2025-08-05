import { Button } from "@/components/ui/button";
import axios from "axios";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

type Supporter = {
  name: string;
  amount: number;
  message: string;
  profileImageUrl: string;
};

type RecentSupportersProps = {
  onSeeMoreClick: () => void;
};
export const RecentSupporters = ({ onSeeMoreClick }: RecentSupportersProps) => {
  const [supporters, setSupporters] = useState<Supporter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const userId = 13;
  useEffect(() => {
    const fetchSupporters = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4200/donation/received/${userId}`
        );
        setSupporters(response.data.donations);
      } catch (error) {
        console.error("Failed to fetch supporters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSupporters();
  }, []);
  return (
    <div className="p-6 border rounded-lg shadow-sm bg-white">
      <h3 className="font-medium mb-4">Recent Supporters</h3>

      {loading ? (
        <div className="text-sm text-gray-500">Loading...</div>
      ) : supporters && supporters.length > 0 ? (
        <>
          {supporters.map((supporter, index) => (
            <div key={index} className="flex items-center gap-3 mb-4 last:mb-0">
              <img
                src={supporter.profileImageUrl}
                alt={`${supporter.name}'s profile`}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="font-semibold text-sm">
                  {supporter.name} bought ${supporter.amount} coffee
                </div>
                <div className="text-xs text-gray-500">{supporter.message}</div>
              </div>
            </div>
          ))}
          <Button
            onClick={onSeeMoreClick}
            className="w-full bg-gray-100 text-gray-700 hover:bg-gray-200 mt-4 text-sm"
          >
            See more
          </Button>
        </>
      ) : (
        <div className="border rounded-lg p-4 flex flex-col  items-center justify-center text-sm">
          <span>
            <Heart className="fill-black" />
          </span>
          <span> Be the first one to support Jake</span>
        </div>
      )}
    </div>
  );
};
