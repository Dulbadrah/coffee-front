"use client";

import { useForm, FormProvider } from "react-hook-form";
import { SelectCountry } from "./SelectCountry";
import { UserName } from "./UserName";
import { EnterCardNumber } from "./EnterCardNumber";
import { Expires } from "./Expires";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { paymentSchema, PaymentFormValues } from "@/utils/PaymentFormType";

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

  const onSubmit = (data: PaymentFormValues) => {
    console.log("Form  bankCard data:", data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className="border p-14 rounded-lg bg-white shadow-sm max-w-lg mx-auto"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          How would you like to be paid?
        </h2>
        <p className="text-gray-500 mb-8">Enter location and payment details</p>

        <div className="flex flex-col gap-4" >
          <SelectCountry />
          <UserName />
          <EnterCardNumber />
          <Expires />

          <div className="pt-6">
            <Button type="submit" className=" bg-gray-100 text-gray-700 hover:bg-gray-200 mt-4 text-sm">
              Continue
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
