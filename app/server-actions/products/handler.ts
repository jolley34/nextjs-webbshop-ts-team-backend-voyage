"use server";
import { db } from "@/prisma/db";

export async function getProductsByCategoryName(categoryName: string) {
  const products = await db.product.findMany({
    where: {
      categories: {
        some: { name: categoryName },
      },
    },
    orderBy: { id: "desc" },
  });
  return { products };
}

export async function showOneProduct(productId: string) {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });
  return product;
}
