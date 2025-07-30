import { Coffee } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export const Header = () => {
  return (
    <div>
      <div className="flex justify-between px-10 py-4">
        <div className="flex gap-3">
          <div className="pt-1.5">
            <Coffee />
          </div>
          <div className="pt-1.5">Buy Me Coffee</div>
        </div>
        <div className="flex gap-6">
          <div className="pt-1.5">
            <img
              src={"https://i.pravatar.cc/100"}
              className="w-[40px] h-[40px] rounded-full mx-auto border-4 object-cover"
            ></img>
          </div>
          <div className="pt-1.5">Jake</div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">Logout</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
