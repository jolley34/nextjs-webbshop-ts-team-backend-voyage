"use server";

import { signOut } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";
import { db } from "../../../prisma/db";
import { UserSignIn, UserSignInSchema } from "../validation/validation";

export async function signInUser(incomingData: UserSignIn) {
  const signInData = UserSignInSchema.parse(incomingData);

  const user = await db.user.findUnique({
    where: {
      username: signInData.username,
    },
  });
  console.log(user);
}

export async function signOutUser() {
  await signOut();
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
