import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const HomeTwoSection = ({ moduls }: any) => {
  const totalEarnings = moduls.reduce(
    (sum: any, item: { amount: any }) => sum + (item.amount || 0),
    0
  );

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
