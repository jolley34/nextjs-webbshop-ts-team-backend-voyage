import { z } from "zod";

export const AddressCreateSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  phoneNumber: z.string(),
  street: z.string().min(1),
  zipcode: z.string().min(1),
  city: z.string().min(1),
  email: z.string().min(1),
});

export const UserCreateSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
  isAdmin: z.boolean().optional(),
});

export const UserSignInSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type AddressCreate = z.infer<typeof AddressCreateSchema>;
export type UserCreate = z.infer<typeof UserCreateSchema>;
export type UserSignIn = z.infer<typeof UserSignInSchema>;
