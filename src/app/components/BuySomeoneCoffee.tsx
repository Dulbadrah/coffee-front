import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";

const amounts = [1, 2, 5, 10];
export const BuySomeoneCoffee = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5);
  const [socialUrl, setSocialUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleSupport = () => {
    console.log({ selectedAmount, socialUrl, message });
  };

  return (
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
    </div>
  );
};
