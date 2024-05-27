"use server";
import { db } from "@/prisma/db";
import { ProductFormData } from "../validation/validation";

export async function handleArchive(productId: string, isArchived: boolean) {
  await db.product.update({
    where: { id: productId },
    data: { isArchived: isArchived },
  });
}

export async function AddNewProductAdmin(data: ProductFormData) {
  const newProduct = await db.product.create({
    data: {
      name: data.name,
      description: data.description,
      image: data.image,
      video: data.video || "",
      price: data.price,
      isArchived: false,
    },
  });
  console.log("Product created:", newProduct);
}
