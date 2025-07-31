"use client";

import React from "react";
import { SelectCountry } from "./components/SelectCountry";
import { UserName } from "./components/UserName";
import { EnterCardNumber } from "./components/EnterCardNumber";
import { Expires } from "./components/Expires";
import { Button } from "@/components/ui/button";

const PaymentForm = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="max-w-xl w-full bg-white p-8 rounded-lg shadow-sm">
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
            <Button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
