"use server";

import { db } from "@/prisma/db";

export async function showAllProducts() {
  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      description: true,
      image: true,
      price: true,
      video: true,
      isArchived: true,
    },
    orderBy: { id: "desc" },
  });
  return { products };
}

export async function showOneProduct(productId: string) {
  const product = await db.product.findFirst({
    where: {
      id: productId,
    },
    select: {
      id: true,
      name: true,
      image: true,
      description: true,
      price: true,
      video: true,
    },
  });
  return { product };
}
