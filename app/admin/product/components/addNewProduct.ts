import { ProductFormData } from "@/components/ProductForm";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function AddNewProductAdmin(data: ProductFormData) {
  try {
    const newProduct = await prisma.product.create({
      data: {
        name: data.title,
        description: data.description,
        image: data.image,
        video: data.video || "",
        price: data.price,
        isArchived: false,
      },
    });
    console.log("Product created:", newProduct);
  } catch (error) {
    console.error("Error creating product:", error);
  }
}
