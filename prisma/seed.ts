import { PrismaClient } from "@prisma/client";
import console from "console";
import mockedData from "./mocked";

const db = new PrismaClient();

async function main() {
  try {
    for (const userData of mockedData.users) {
      await db.user.upsert({
        where: { username: userData.username },
        update: {},
        create: userData,
      });
    }

    for (const productData of mockedData.products) {
      await db.product.upsert({
        where: { name: productData.name },
        update: {},
        create: productData,
      });
    }

    for (const orderData of mockedData.orders) {
      const user = await db.user.findUnique({
        where: { username: orderData.username },
      });

      if (!user) {
        throw new Error(
          `User not found for order with email ${orderData.email}`
        );
      }

      await db.order.upsert({
        where: { email: orderData.email },
        update: {},
        create: {
          ...orderData,
          user: {
            connect: { id: user.id },
          },
        },
      });
    }

    for (const categoryData of mockedData.categories) {
      await db.category.upsert({
        where: { name: categoryData.name },
        update: {},
        create: categoryData,
      });
    }

    console.log("Mockad data har skapats/uppdaterats.");
  } catch (error) {
    console.error("Ett fel uppstod:", error);
  } finally {
    await db.$disconnect();
  }
}

main();
