"use server";
import { db } from "@/prisma/db";

export async function showAllCategories() {
  const categories = await db.category.findMany({
    select: {
      id: true,
      name: true,
    },
    orderBy: { id: "desc" },
  });
  return { categories };
}
