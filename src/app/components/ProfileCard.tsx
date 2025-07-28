"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const amounts = [1, 2, 5, 10];

export default function BuyMeCoffeePage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5);
  const [socialUrl, setSocialUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSupport = () => {
    console.log({ selectedAmount, socialUrl, message });
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow">
      <div className="flex items-center gap-4 mb-4">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-14 h-14 rounded-full"
        />
        <div className="flex-1">
          <h2 className="text-xl font-semibold">Jake</h2>
        </div>
        <button className="text-sm text-gray-500 border px-3 py-1 rounded">
          Edit page
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-1">About Jake</h3>
        <p className="text-sm text-gray-600">
          I'm a typical person who enjoys exploring different things. I also
          make music art as a hobby. Follow me along.
        </p>
      </div>

      <div className="mb-4">
        <h3 className="font-medium mb-1">Social media URL</h3>
        <p className="text-sm text-blue-600">
          https://buymeacoffee.com/spacerulz44
        </p>
      </div>

      <div>
        <h3 className="font-medium mb-1">Recent Supporters</h3>
        <div className="border rounded-lg p-4 flex items-center justify-center text-gray-500 text-sm">
          <span>🖤 Be the first one to support Jake</span>
        </div>
      </div>
    </div>
  );
}
/* Coffee Support Panel
        <div className="bg-white rounded-xl p-6 shadow">
          <h2 className="text-xl font-semibold mb-4">Buy Jake a Coffee</h2>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select amount:
            </label>
            <div className="flex gap-2">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={cn(
                    "flex items-center gap-1 border px-4 py-2 rounded-md text-sm",
                    selectedAmount === amount
                      ? "border-black bg-gray-100 font-semibold"
                      : "border-gray-300 hover:bg-gray-50"
                  )}
                >
                  ☕ ${amount}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Enter BuyMeCoffee or social account URL:
            </label>
            <input
              type="url"
              value={socialUrl}
              onChange={(e) => setSocialUrl(e.target.value)}
              placeholder="buymeacoffee.com/"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Special message:
            </label>
            <textarea
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Please write your message here"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <Button
            onClick={handleSupport}
            disabled={!selectedAmount}
            className="w-full bg-gray-300 text-white py-2 rounded-md hover:bg-gray-400 transition disabled:opacity-50"
          >
            Support
          </Button>
        </div> */

//   );
// }
