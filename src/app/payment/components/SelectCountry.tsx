import { Controller, useFormContext } from "react-hook-form";

export const SelectCountry = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="country"
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col gap-4 border-b-gray-500">
          <label htmlFor="country">Select country</label>
          <select {...field} id="country" className="flex flex-col">
            <option value="">Select</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
          </select>
          {error && (
            <p className="text-sm text-red-500 mt-1">{error.message}</p>
          )}
        </div>
      )}
    />
  );
};
