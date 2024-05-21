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
});

export const UserCreateSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  firstname: z.string().min(1),
  lastname: z.string().min(1),
  isAdmin: z.boolean().optional(),
});

export const UserSignInSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type OrderCreate = z.infer<typeof OrderCreateSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserSignIn = z.infer<typeof UserSignInSchema>;