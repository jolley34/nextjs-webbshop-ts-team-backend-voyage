"use server";

import { auth } from "@/auth";
import { revalidatePath } from "next/cache";
import { db } from "../../../prisma/db";
import { AddressCreate, AddressCreateSchema } from "../validation/validation";

export async function saveOrder(
  incomingData: AddressCreate,
  cartItems: { id: string; quantity: number; price: number }[]
) {
  const session = await auth();
  if (!session || !session.user || !session.user.id) return;

  const addressData = AddressCreateSchema.parse(incomingData);

  const address = await db.address.create({
    data: addressData,
  });

  const order = await db.order.create({
    data: {
      userId: session.user.id,
      shippingAddressId: address.id,
      totalPrice: cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
      number: 0,
      products: {
        create: cartItems.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          subTotalPrice: item.price * item.quantity,
        })),
      },
    },
  });

  revalidatePath("/");
}
