import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { UserContext } from "@/providers/UserProvider";

import { useContext, useEffect, useState } from "react";

type HomeTwoSectionProps = {
  message: string;
  totalEarnings: number;
};

export const HomeTwoSection = () => {
  const {user}=useContext(UserContext)
  const [moduls, setModuls] = useState<HomeTwoSectionProps | null>();

  useEffect(() => {
  if (!user?.id) return;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/total/${user.id}`
      );
      const data = await response.json();
      setModuls(data);
    } catch (error) {
      console.error("Алдаа гарлаа:", error);
    }
  };

  fetchData();
}, [user?.id]);


  return (
    <div>
      <div className="flex flex-col gap-4 px-10 py-4">  
        <div className="flex flex-col gap-2">
          <div className="flex gap-8 items-center">
            <div className="text-2xl">Earnings</div>
            <div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Last 30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Filter by</SelectLabel>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="all">All time</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          {moduls && (
            <div className="text-4xl font-semibold">
              {moduls.totalEarnings}₮
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
