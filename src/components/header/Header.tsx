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
          <div className="pt-1.5">image</div>
          <div className="pt-1.5">Jake</div>
          <div>
            <Select>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
