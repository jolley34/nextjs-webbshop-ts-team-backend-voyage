"use server";

import { auth } from "@/auth";
import { redirect } from "next/navigation";
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

  const products = await db.product.findMany({
    where: { id: { in: cartItems.map((item) => item.id) } },
    select: { id: true, price: true, stock: true },
  });

  for (const item of cartItems) {
    const product = products.find((p) => p.id === item.id);
    if (product && product.stock < item.quantity) {
      throw new Error(`Insufficient stock for product ${product.id}`);
    }
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const order = await db.order.create({
    data: {
      userId: session.user.id,
      shippingAddressId: address.id,
      totalPrice,
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

  for (const item of cartItems) {
    await db.product.update({
      where: { id: item.id },
      data: {
        stock: {
          decrement: item.quantity,
        },
      },
    });
  }

  redirect("/confirmation");
}

// kontrollera att man är admin
export async function getAllOrders() {
  const orders = await db.order.findMany({
    select: {
      id: true,
    },
    orderBy: { id: "desc" },
  });
  return { orders };
}
