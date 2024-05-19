"use server";

import argon2 from "argon2";
import { revalidatePath } from "next/cache";
import { db } from "../../prisma/db";
import { UserCreate, UserCreateSchema } from "../validation/validation";

export async function signUpUser(incomingData: UserCreate) {
  const userData = UserCreateSchema.parse(incomingData);
  const hashedPassword = await argon2.hash(userData.password);

  const user = await db.user.create({
    data: {
      username: userData.username,
      password: hashedPassword,
      isAdmin: userData.isAdmin || false,
    },
  });
  revalidatePath("/");
  return user;
}
