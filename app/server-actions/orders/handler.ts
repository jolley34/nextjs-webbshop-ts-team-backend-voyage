"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { db } from "../../../prisma/db";
import { OrderCreate, OrderCreateSchema } from "../validation/validation";

export async function saveOrder(
  incomingData: OrderCreate,
  productId: string,
  userId: string
) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) return;

  const adressData = OrderCreateSchema.parse(incomingData);

  const user = await db.user.findUnique({
    where: { id: userId },
  });

  const product = await db.product.findUnique({
    where: { id: productId },
  });

  const order = await db.address.create({
    data: {
      firstName: adressData.firstName,
      lastName: adressData.lastName,
      city: adressData.address,
      phoneNumber: adressData.phoneNumber,
      street: adressData.address,
      zipcode: adressData.zipcode,
      userId: session.user.id,
      productId: product.id,
    },
  });
  revalidatePath("/");
}
