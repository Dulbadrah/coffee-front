import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// export type Props = {
//   control: any;
// };

export const EnterCardNumber = () => {
  return (
    <div>
      <label
        htmlFor="cardNumber"
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        Enter card number
      </label>
      <Input
        // type="text"
        // id="cardNumber"
        // name="cardNumber"
        placeholder="XXXX-XXXX-XXXX-XXXX"
        maxLength={16}
      />
    </div>
  );
};
