import { useForm, FormProvider } from "react-hook-form";
import { SelectCountry } from "./SelectCountry";
import { UserName } from "./UserName";
import { EnterCardNumber } from "./EnterCardNumber";
import { Expires } from "./Expires";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, PaymentFormValues } from "@/utils/PaymentFormType";
import { useEffect, useState } from "react";
export const PaymentSection = () => {
  const methods = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      country: "",
      cardNumber: "",
      expiryYear: "",
    },
  });

  const [formData, setFormData] = useState<PaymentFormValues | null>(null);

  const onSubmit = async (data: PaymentFormValues) => {
    setFormData(data);
  };

  useEffect(() => {
    if (!formData) return;

    const sendPayment = async () => {
      try {
        const response = await fetch("http://localhost:4200/bank");
        const data = await response.json();
        console.log("bank", data);
      } catch (error) {
        console.error("Failed to fetch payment data", error);
      }
    };
    sendPayment(); //zasalt hiih
  }, []);

  return (
    <FormProvider {...methods}>
      <form
        // onSubmit={methods.handleSubmit(onSubmit)}
        className="border p-6 rounded-lg space-y-4"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How would you like to be paid?
        </h2>
        <p className="text-gray-500 mb-8">Enter location and payment details</p>

        <div className="space-y-6">
          <SelectCountry />
          <UserName />
          <EnterCardNumber />
          <Expires />

          <div className="pt-6">
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
