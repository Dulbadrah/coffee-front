"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { SelectCountry } from "./SelectCountry";
import { UserName } from "./UserName";
import { EnterCardNumber } from "./EnterCardNumber";
import { Expires } from "./Expires";

export const PaymentSection = () => {
  return (
    <div className="border p-6 rounded-lg space-y-4">
      <div className="">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How would you like to be paid?
        </h2>
        <p className="text-gray-500 mb-8">Enter location and payment details</p>

        <div className="space-y-6">
          {/* Select Country */}
          <SelectCountry />

          {/* First Name & Last Name */}

          <UserName />
          {/* Enter Card Number */}
          <EnterCardNumber />

          {/* Expires (Month/Year) & CVC */}

          <Expires />

          {/* Continue Button */}
          <div className="pt-6">
            <Button type="submit " className="w-full">
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
