import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";

export const HomeTwoSection = () => {
  const [moduls, setModuls] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const userId = 2;
          const response = await fetch(
            `http://localhost:4200/donation/total${userId}`
          );
          const data = await response.json();
          setModuls(data);
        } catch (error) {
          console.error("Алдаа гарлаа:", error);
        }
      };
  
      fetchData();
    }, []);
  const totalEarnings = moduls.reduce(
    (sum: any, item: { amount: any }) => sum + (item.amount || 0),
    0
  );
console.log(moduls)
  return (
    <div>
      <div className="flex flex-col gap-4 px-10 py-4">
        <div className="border"></div>
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
          <div className="text-4xl font-semibold">{totalEarnings}$</div>
        </div>
      </div>
    </div>
  );
};
