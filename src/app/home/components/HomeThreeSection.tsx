"use client";

import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const amounts = ["$1", "$2", "$5", "$10"];

export const HomeThreeSection = () => {
  const [selected, setSelected] = useState("$1");
  return (
    <div className="flex flex-wrap justify-between">
      <div className="text-2xl">Recent transactions</div>
      <div>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-[200px] justify-between">
              <span>Amount</span>
              <span className="text-muted-foreground">{selected}</span>
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-[200px] p-0">
            <div className="py-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelected(amount)}
                  className="flex items-center w-full px-4 py-2 text-left hover:bg-accent"
                >
                  <span className="mr-2">
                    {selected === amount ? (
                      <div className="w-4 h-4 rounded-sm bg-black flex items-center justify-center">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-4 h-4 rounded-sm border border-gray-400" />
                    )}
                  </span>
                  {amount}
                </button>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};
