"use server";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
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
      ...data,
      isArchived: false,
      categories: {
        connect: data.categories.map((categoryId) => ({ id: categoryId })),
      },
    },
  });
  console.log("Product created:", newProduct);
  revalidatePath("/admin");
  redirect("/admin");
}

export async function EditProduct(productId: string, data: ProductFormData) {
  const categories = data.categories || [];

  const updateProduct = await db.product.update({
    where: { id: productId },
    data: {
      ...data,
      categories: {
        set: categories.map((categoryId) => ({ id: categoryId })),
      },
    },
  });

  console.log("Product updated:", updateProduct);
  revalidatePath("/admin");
  redirect("/admin");
}
