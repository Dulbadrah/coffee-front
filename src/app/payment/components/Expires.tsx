import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, useFormContext } from "react-hook-form";

export const Expires = () => {
  const { control } = useFormContext();
  const currentYear = new Date().getFullYear();

  return (
   <div className="grid grid-cols-3 gap-4">
      {/* Month */}
      <FormField
        control={control}
        name="expiryMonth" 
        render={({ field }) => (
          <FormItem>
            <FormLabel>Expires</FormLabel>
            <FormControl>
              <select
                {...field}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md shadow-sm"
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
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Year */}
      <FormField
        control={control}
        name="expiryYear" 
        render={({ field }) => (
          <FormItem>
            <FormLabel className="invisible">Year</FormLabel>
            <FormControl>
              <select
                {...field}
                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md shadow-sm"
              >
                <option value="" disabled>
                  Year
                </option>
                {Array.from({ length: 10 }, (_, i) => currentYear + i).map(
                  (year) => (
                    <option key={year} value={year.toString()}>
                      {year}
                    </option>
                  )
                )}
              </select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* CVC */}
      <FormField
        control={control}
        name="cvc"
        render={({ field }) => (
          <FormItem>
            <FormLabel>CVC</FormLabel>
            <FormControl>
              <Input
                {...field}
                value={field.value || ''} 
                maxLength={4}
                placeholder="CVC"
                className="p-2"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};
