export const SelectCountry = () => {
  return (
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
      </select>
    </div>
  );
};
