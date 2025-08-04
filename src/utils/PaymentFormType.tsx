import { z } from "zod";

export const paymentSchema = z.object({
  country: z.string().min(1, "Country is required"),
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  cardNumber: z
    .string()
    .min(16, "Card number must be at least 16 digits")
    .max(19),
  expiryMonth: z.string().min(1, "Month is required"),
  expiryYear: z.string().min(1, "Year is required"),
  cvc: z.string().min(3, "CVC is required").max(4),
});

export type PaymentFormValues = z.infer<typeof paymentSchema>;
