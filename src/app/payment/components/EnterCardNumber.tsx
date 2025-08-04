import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, useFormContext } from "react-hook-form";

export const EnterCardNumber = () => {
  const { control } = useFormContext();
  return (
    <FormField
      control={control}
      name="cardNumber"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Enter card number</FormLabel>
          <FormControl>
            <Input
              {...field}
              placeholder="XXXX-XXXX-XXXX-XXXX"
              maxLength={16}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
