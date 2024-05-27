"use server";
import { db } from "@/prisma/db";

export default async function handleArchive(
  productId: string,
  isArchived: boolean
) {
  await db.product.update({
    where: { id: productId },
    data: { isArchived: isArchived },
  });
}
