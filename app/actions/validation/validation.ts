import { z } from "zod";

export const OrderCreateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)),
  address: z.string().min(1),
  zipcode: z.string().min(1),
  city: z.string().min(1),
  email: z.string().min(1),
  id: z.string().optional(),
  productId: z.string().optional(),
  userId: z.string().optional(),
  createdAt: z.string().optional(),
});

export type OrderCreate = z.infer<typeof OrderCreateSchema>;
