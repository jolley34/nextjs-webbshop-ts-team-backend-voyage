import { PrismaClient } from "@prisma/client";
import console from "console";
import mockedData from "./mocked";

const db = new PrismaClient();

async function main() {
  for (const userData of mockedData.users) {
    const user = await db.user.upsert({
      where: {
        username: userData.username,
      },
      include: { Order: true },
      update: {},
      create: {
        username: userData.username,
        password: userData.password,
        isAdmin: userData.isAdmin,
      },
    });
    console.log("Skapad/Uppdaterad användare:", user);
  }

  for (const productData of mockedData.products) {
    const product = await db.product.upsert({
      where: {
        name: productData.name,
      },
      include: { category: true, Order: true },
      update: {},
      create: {
        name: productData.name,
        description: productData.description,
        image: productData.image,
        video: productData.video,
        price: productData.price,
        isArchived: productData.isArchived,
      },
    });
    console.log("Skapad/Uppdaterad produkt:", product);
  }

  for (const orderData of mockedData.orders) {
    const order = await db.order.upsert({
      data: {
        createdAt: orderData.createdAt,
        firstName: orderData.firstName,
        lastName: orderData.lastName,
        phoneNumber: orderData.phoneNumber,
        address: orderData.address,
        zipcode: orderData.zipcode,
        city: orderData.city,
        email: orderData.email,

        categories: {
          create: [{ name: "MacBook" }, { name: "IPhone" }],
        },
      },
      include: { user: true, product: true },
      update: {},
    });
    console.log("Skapad/Uppdaterad order:", order);
  }

  for (const categoryData of mockedData.category) {
    const category = await db.category.upsert({
      where: {
        name: categoryData.name,
      },
      include: { products: true },
      update: {},
      create: {
        name: categoryData.name,
      },
    });
    console.log("Skapad/Uppdaterad kategori:", category);
  }
}

main()
  .then(async () => {
    await db.$connect();
    console.log("Success Created/Updated Users, Products, and Orders");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(async () => {
    await db.$disconnect();
  });
