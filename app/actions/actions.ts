"use server";

import { db } from "@prisma";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { OrderCreate, OrderCreateSchema } from "../validation/validation";

const db = new PrismaClient();

export async function saveOrder(incomingData: OrderCreate) {
  const orderData = OrderCreateSchema.parse(incomingData);

  const order = await db.order.create({
    data: {
      date: new Date(),
      firstName: orderData.firstName,
      lastName: orderData.lastName,
    },
  });

  revalidatePath("/");
}

export async function showAllProducts() {
  const products = await db.product.findMany();
  console.log(products);
  revalidatePath("/");
}
