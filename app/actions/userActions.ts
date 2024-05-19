"use server";

import argon2 from "argon2";
import { NextApiRequest, NextApiResponse } from "next";
import { revalidatePath } from "next/cache";
import { db } from "../../prisma/db";
import {
  UserCreate,
  UserCreateSchema,
  UserSignIn,
  UserSignInSchema,
} from "../validation/validation";

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

export async function signInUser(incomingData: UserSignIn) {
  const signInData = UserSignInSchema.parse(incomingData);

  const user = await db.user.findUnique({
    where: {
      id: 5, // Behövs?? Temporärt hårkodad just nu
      username: signInData.username,
    },
  });

  if (user && (await argon2.verify(user.password, signInData.password))) {
    revalidatePath("/");
    return user;
  } else {
    throw new Error("Invalid username or password");
  }
}

export async function signUpHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const user = await signUpUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json("Invalid username or password");
    }
  } else {
    res.status(405).json("Method not allowed");
  }
}

export async function signInHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const user = await signInUser(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(400).json("Invalid username or password");
    }
  } else {
    res.status(405).json("Method not allowed");
  }
}
