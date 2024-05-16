"use server";

import { revalidatePath } from "next/cache";
import { db } from "../../prisma/db";
import { OrderCreate, OrderCreateSchema } from "../validation/validation";

export async function saveOrder(incomingData: OrderCreate) {
  try {
    const orderData = OrderCreateSchema.parse(incomingData);

    const order = await db.order.create({
      data: {
        createdAt: orderData.createdAt,
        firstName: orderData.firstName,
        lastName: orderData.lastName,
        phoneNumber: orderData.phoneNumber,
        address: orderData.address,
        zipcode: orderData.zipcode,
        city: orderData.city,
        email: orderData.email,
      },
    });

    revalidatePath("/");
    console.log(order);
  } catch (error) {
    console.error("Validation error:", error);
  }
}

export async function showAllProducts() {
  const products = await db.product.findMany();
  console.log(products);
  revalidatePath("/");
}
