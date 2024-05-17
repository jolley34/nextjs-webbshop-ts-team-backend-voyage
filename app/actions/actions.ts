"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../prisma/db";
import { OrderCreate, OrderCreateSchema } from "../validation/validation";

export async function saveOrder(incomingData: OrderCreate) {
  try {
    const orderData = OrderCreateSchema.parse(incomingData);

    const order = await db.order.create({
      data: {
        orderData,
      },
    });

    revalidatePath("/");
    console.log(order);
  } catch (error) {
    console.error("Validation error:", error);
  }
}
