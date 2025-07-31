export const Expires = () => {
  return (
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
            <option key={i + 1} value={(i + 1).toString().padStart(2, "0")}>
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
  );
};
