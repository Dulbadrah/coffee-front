import React from "react";

// You might put this component in a file like src/components/PaymentForm.tsx or similar

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
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Select country
            </label>
            <select
              id="country"
              name="country"
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md shadow-sm"
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              {/* Add more countries as needed */}
            </select>
          </div>

          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your name here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your name here"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
              />
            </div>
          </div>

          {/* Enter Card Number */}
          <div>
            <label
              htmlFor="cardNumber"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Enter card number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              placeholder="XXXX-XXXX-XXXX-XXXX"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
            />
          </div>

          {/* Expires (Month/Year) & CVC */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="expMonth"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Expires
              </label>
              <select
                id="expMonth"
                name="expMonth"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Month
                </option>
                {[...Array(12).keys()].map((i) => (
                  <option
                    key={i + 1}
                    value={(i + 1).toString().padStart(2, "0")}
                  >
                    {(i + 1).toString().padStart(2, "0")}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="expYear"
                className="block text-sm font-medium text-gray-700 mb-1 invisible"
              >
                Year
              </label>{" "}
              {/* Invisible label for alignment */}
              <select
                id="expYear"
                name="expYear"
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md shadow-sm"
                defaultValue=""
              >
                <option value="" disabled>
                  Year
                </option>
                {Array.from(
                  { length: 10 },
                  (_, i) => new Date().getFullYear() + i
                ).map((year) => (
                  <option key={year} value={year.toString()}>
                    {year}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="cvc"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                CVC
              </label>
              <input
                type="text"
                id="cvc"
                name="cvc"
                placeholder="CVC"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm p-2"
                maxLength={4} // Common CVC max length
              />
            </div>
          </div>

          {/* Continue Button */}
          <div className="pt-6">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
