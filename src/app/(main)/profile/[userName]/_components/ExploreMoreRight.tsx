"use client";

import { cn } from "@/lib/utils";
import { useContext, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { UserContext } from "@/providers/UserProvider";

const amounts = [1, 2, 5, 10];

export const ExploreMoreRight = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(5);
  const [socialUrl, setSocialUrl] = useState("");
  const [message, setMessage] = useState("");

  const { user, profile } = useContext(UserContext);

  const handleSupport = async () => {
    try {
      if (!selectedAmount) return alert("Та мөнгөний дүнгээ сонгоно уу");
      if (!profile?.name) return alert("Хүлээн авагчийн мэдээлэл алга байна");

      const donationPayload = {
        amount: selectedAmount,
        specialMessage: message,
        socialURLOrBuyMeACoffee: socialUrl,
        donorId: user?.id,
        recipientId: profile?.userId,
      };

      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/donation/received/${profile?.name}`,
        donationPayload
      );

      alert("Амжилттай дэмжлээ!");
      setMessage("");
      setSocialUrl("");
      setSelectedAmount(5);
    } catch (error) {
      console.error("Donation failed:", error);
      alert("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-md h-fit">
      <h2 className="text-xl font-semibold mb-4">
        Buy <span className="text-blue-600">{profile?.name || "User"}</span> a Coffee ☕
      </h2>

      {/* Amount Selection */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select amount:
        </label>
        <div className="flex gap-2">
          {amounts.map((amount) => (
            <button
              key={amount}
              onClick={() => setSelectedAmount(amount)}
              className={cn(
                "flex items-center gap-1 border px-4 py-2 rounded-lg text-sm transition",
                selectedAmount === amount
                  ? "border-blue-600 bg-blue-50 font-semibold text-blue-600"
                  : "border-gray-300 hover:bg-gray-50"
              )}
            >
              ${amount}
            </button>
          ))}
        </div>
      </div>

      {/* Social URL */}
      <div className="mb-5">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          BuyMeCoffee эсвэл Social account URL:
        </label>
        <input
          type="url"
          value={socialUrl}
          onChange={(e) => setSocialUrl(e.target.value)}
          placeholder="https://buymeacoffee.com/username"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Message */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Special message:
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a nice message..."
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <Button
        onClick={handleSupport}
        disabled={!selectedAmount}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Support
      </Button>
    </div>
  );
};
